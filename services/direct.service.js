const redisService = require("../services/redis.service");
const Flight = require("../model/response/flight.dto.js");
const Response = require("../model/response/response.dto.js");
const common = require("../utils/common");
const logger = require("../utils/logger");
const qs = require("qs");
const constant = require("../constants/constants");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const he = require('he');

const { JSDOM } = jsdom;
exports.process = async (req, res) => {
  const flightInfo = await getOnewayFareFlight(req);
  return res.status(200).json(flightInfo);
};
async function getOnewayFareFlight(req) {
  return await createSearchForm(req);
}

async function createSearchForm(req) {
  const body = req.body;
  const dptDate = common.formatDate(body.dptDate, "YYYY-MM-DD", "YYYYMMDD0000");
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://fo-asia.ttinteractive.com/Zenith/FrontOffice/usbangla/en-GB/BookingEngine/SearchResult?OriginAirportCode=${body.origin}&DestinationAirportCode=${body.dest}&OutboundDate=${body.dptDate}&InboundDate=&TravelerTypes%5B0%5D.Key=AD&TravelerTypes%5B0%5D.Value=${body.adult}&TravelerTypes%5B1%5D.Key=CHD&TravelerTypes%5B1%5D.Value=${body.child}&TravelerTypes%5B2%5D.Key=INF&TravelerTypes%5B2%5D.Value=${body.infant}&Currency=USD`,
    headers: {
      Host: "fo-asia.ttinteractive.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.5",
      Origin: "https://usbair.com",
      Referer: "https://usbair.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
    },
  };
  const searchResponse = await common.fetchData(config);
  const currentURL = searchResponse.request._redirectable._currentUrl;
  const htmlString = searchResponse.data;
  let navId = searchResponse.headers.get("set-cookie")[0];
  let prodAsia = searchResponse.headers.get("set-cookie")[5];
  const startIndex2 = prodAsia.indexOf("path");
  if (startIndex2 !== -1) {
    prodAsia = prodAsia.substring(0, startIndex2 - 1);
  }

  const startIndex = navId.indexOf("path");
  if (startIndex !== -1) {
    navId = navId.substring(0, startIndex - 1);
  }
  let __RequestVerificationToken = searchResponse.headers.get("set-cookie")[2];
  const startIndex1 = __RequestVerificationToken.indexOf("path");
  if (startIndex1 !== -1) {
    __RequestVerificationToken = __RequestVerificationToken.substring(
      0,
      startIndex1 - 1
    );
  }
  const regex =
    /\/Zenith\/FrontOffice\/\(S\([^]{32}\)\)\/usbangla\/en-GB\/FlexibleFlightStaticAjax\/FlexibleFLightListLoadSelectionResume\?__cnv=[^]{5}/;
  const linkRequest =
    "https://fo-asia.ttinteractive.com/" +
    htmlString.match(regex).map((match) => match.slice(1))[0];
  // Load the HTML content into Cheerio
  const $ = cheerio.load(htmlString);
  const inputTag = $('input[name="__RequestVerificationToken"][type="hidden"]');
  const viewModelContent = htmlString.match(/var viewModel = (\{.*\});/)[1];
  const headerRequestVerificationToken = inputTag.attr("value");
  const regex1 =
    /\/Zenith\/FrontOffice\/\(S\([^]{32}\)\)\/usbangla\/en-GB\/FlexibleFlightStaticAjax\/FlexibleFlightListLoadSelectedDays\?__cnv=[^]{5}/;
  const linkRequest1 =
    "https://fo-asia.ttinteractive.com/" +
    htmlString.match(regex1).map((match) => match.slice(1))[0];
  const parsedUrl = new URL(linkRequest1);
  const regesx = /\(S\(([^)]+)\)\)/;
  const match = linkRequest1.match(regesx);
  const extractedValue = match ? match[1] : null;
  const cnvValue = parsedUrl.searchParams.get("__cnv");
  const cookie = prodAsia.concat(__RequestVerificationToken).concat(navId);
  const parseViewModleContent = JSON.parse(viewModelContent);

  let traveler1 = null;
  let traveler2 = null;
  if (parseViewModleContent.Travelers[1] != undefined) {
    traveler1 = `&Travelers%5B1%5D%5BDataId%5D=${parseViewModleContent.Travelers[1].DataId}&Travelers%5B1%5D%5BCount%5D=${parseViewModleContent.Travelers[1].Count}`;
  }
  if (parseViewModleContent.Travelers[2] != undefined) {
    traveler2 = `&Travelers%5B2%5D%5BDataId%5D=${parseViewModleContent.Travelers[2].DataId}&Travelers%5B2%5D%5BCount%5D=${parseViewModleContent.Travelers[2].Count}`;
  }
  let data = `SaleConditionAccepted=${
    parseViewModleContent.SaleConditionAccepted
  }&RGPDConditionAccepted=${
    parseViewModleContent.RGPDConditionAccepted
  }&ExtendedSearchDayCount=${
    parseViewModleContent.ExtendedSearchDayCount
  }&DoNotCheckCache=${parseViewModleContent.DoNotCheckCache}&AlreadyLoggedIn=${
    parseViewModleContent.AlreadyLoggedIn
  }&TempDataGuid=${parseViewModleContent.TempDataGuid}&CurrencyCode=${
    parseViewModleContent.CurrencyCode
  }&FareBasisDataId=&SelectedTimeLimitExtensionDataId=&IsFirstRequest=false&Travelers%5B0%5D%5BDataId%5D=${
    parseViewModleContent.Travelers[0].DataId
  }&Travelers%5B0%5D%5BCount%5D=${
    parseViewModleContent.Travelers[0].Count
  }&UserSelections%5B0%5D%5BSelectedDate%5D=${parseViewModleContent.UserSelections[0].SelectedDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00&UserSelections%5B0%5D%5BIsOpen%5D=${
    parseViewModleContent.UserSelections[0].IsOpen
  }&UserSelections%5B0%5D%5BReferenceDate%5D=${parseViewModleContent.UserSelections[0].SelectedDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00&UserSelections%5B0%5D%5BDataIdOrigin%5D=${
    parseViewModleContent.UserSelections[0].DataIdOrigin
  }&UserSelections%5B0%5D%5BDataIdDestination%5D=${
    parseViewModleContent.UserSelections[0].DataIdDestination
  }&UserSelections%5B0%5D%5BGenericClassDataId%5D=${
    parseViewModleContent.UserSelections[0].GenericClassDataId != null
      ? parseViewModleContent.UserSelections[0].GenericClassDataId
      : ""
  }&UserSelections%5B0%5D%5BSelectedSegments%5D=&UserSelections%5B0%5D%5BIsSearchDisabled%5D=false&UserSelections%5B0%5D%5BIsUpgrade%5D=false&UserSelections%5B0%5D%5BFlightNumbers%5D=&JsonPrepareBookingRequest=&CabinClassDataId=&IsFFPRewardSearch=false&IsTCSearch=false&TCBookCode=&PromoCode=&IsNewBooking=true&ShowingWLWarningMessageActivated=false&CustomerAccountInfo=&UpgradeType=&SearchType=&SearchUpgradeOnOtherFlight=false&ZietSearchType=0`;
  if (traveler1 != null) {
    data = data.concat(traveler1);
  }
  if (traveler2 != null) {
    data = data.concat(traveler2);
  }
  let config1 = {
    method: "post",
    maxBodyLength: Infinity,
    url: linkRequest1,
    headers: {
      Host: "fo-asia.ttinteractive.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
      Accept: "text/html, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      __RequestVerificationToken: headerRequestVerificationToken,
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://fo-asia.ttinteractive.com",
      Referer: `https://fo-asia.ttinteractive.com/Zenith/FrontOffice/(S(${extractedValue}))/usbangla/en-GB/BookingEngine/FlexibleFlightListStatic?__cnv=${cnvValue}`,
      Cookie: cookie,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    data: data,
  };
  const searchResponse1 = await common.fetchData(config1);
  const $$ = cheerio.load(searchResponse1.data);
  const isShowOut  = $$(".Resultats.day-details .label.label-default").text().trim();
  if(isShowOut=='Sold out'){
    return Response.SOLD_OUT;
  }
  const fareButton = $$("#Fare");
  const selectfareValue = fareButton.attr("data-selectfare");
  const moddalBody = $$(".row.day-detail-trip-row");
  let lstUser = new Array();
  let searchJson = new Array();
  moddalBody.each((index, element) => {
    let user = {
      flightNumber: null,
      fromDate: null,
      toDate: null,
      type: null,
    };
    const type = $(element)
      .find(".col-xs-5.text-center div:last-child")
      .text()
      .trim();
    const regexDate = /[a-zA-Z]{3} [\d]{2} [a-zA-Z]{3} [\d]{2}:[\d]{2}/g;
    const dataArray = type.match(regexDate);
    const dateObjects = dataArray.map((dateString) => dateFormat(dateString));
    const flight = $(element)
      .find(".col-xs-8.text-center span")
      .text()
      .trim()
      .replace(
        "\n                                    \n                                        ",
        ""
      );
    user.flightNumber = flight;
    user.fromDate = dateObjects[0];
    user.toDate = dateObjects[1];$(element).find(
      ".row.day-details-generic-classes-block"
    );
    const genericClass = $(element).find(
      ".row.day-details-generic-classes-block"
    );
    const columnCabin = $(genericClass).find(
      ".text-center.day-details-cell.display-inline.tarif.col-lg-3.col-md-3.col-sm-3.col-xs-12"
    );
    const availableIndex =  $(columnCabin).find('.btn-group-vertical.day-details-amount-block').first();
    const btnFare = $(availableIndex).find('#Fare').attr('data-selectfare');
    const decodedString = he.decode(btnFare);
    const parsedJson = JSON.parse(decodedString);
    const typeCount = $(genericClass).find(
      "div.day-details-cell button.btn.btn-default[disabled]"
    ).length;
    user.type = typeCount;
    searchJson.push(parsedJson);
    lstUser.push(user);
  });
  const parse = JSON.parse(selectfareValue);
  const flightNumbers1 =
    parse.UserSelections[0].SelectedSegments[0].FlightNumber;
  const dataIdFlight = parse.UserSelections[0].SelectedSegments[0].DataIdFlight;
  const airlineDesignator =
    parse.UserSelections[0].SelectedSegments[0].airlineDesignator;
  const departureDateTime =
    parse.UserSelections[0].SelectedSegments[0].DepartureDateTime;
  const responseArray = new Array();
  await Promise.all(
    searchJson.map(async (number) => {
      responseArray.push(
        await searchResult(
          req,
          viewModelContent,
          currentURL,
          linkRequest,
          navId,
          prodAsia,
          __RequestVerificationToken,
          headerRequestVerificationToken,
          flightNumbers1,
          dataIdFlight,
          airlineDesignator,
          departureDateTime,
          parse,
          number
        )
      );
    })
  );
  return responseArray;
}
function dateFormat(inputDate) {
  const date = new Date(inputDate);
  const currentDate = new Date();
  const addLeadingZero = (number) => (number < 10 ? "0" : "") + number;
  const formattedDate = `${currentDate.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${addLeadingZero(date.getDate())} ${addLeadingZero(
    date.getHours()
  )}:${addLeadingZero(date.getMinutes())}:00`;
  return formattedDate;
}
function formatDate(inputDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [, day, monthName, time] = inputDate.match(/(\d+) (\w+) (\d{2}:\d{2})/);

  const monthIndex =
    months.findIndex(
      (month) => month.toLowerCase() === monthName.toLowerCase()
    ) + 1;
  const month = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
  const year = new Date().getFullYear();

  const formattedDate = `${year}-${month}-${day} ${time}:00`;
  return formattedDate;
}
async function searchResult(
  req,
  viewModelContent,
  currentURL,
  linkRequest,
  navId,
  prodAsia,
  __RequestVerificationToken,
  headerRequestVerificationToken,
  flightNumbers1,
  dataIdFlight,
  airlineDesignator,
  departureDateTime,
  parse,
  parsedJson
) {
  const cookie = prodAsia.concat(__RequestVerificationToken).concat(navId);
  // &Travelers%5B1%5D%5BDataId%5D=2&Travelers%5B1%5D%5BCount%5D=1
  // &Travelers%5B2%5D%5BDataId%5D=3&Travelers%5B2%5D%5BCount%5D=1
  let traveler1 = null;
  let traveler2 = null;
  if (parse.Travelers[1] != undefined) {
    traveler1 = `&Travelers%5B1%5D%5BDataId%5D=${parse.Travelers[1].DataId}&Travelers%5B1%5D%5BCount%5D=${parse.Travelers[1].Count}`;
  }
  if (parse.Travelers[2] != undefined) {
    traveler2 = `&Travelers%5B2%5D%5BDataId%5D=${parse.Travelers[2].DataId}&Travelers%5B2%5D%5BCount%5D=${parse.Travelers[2].Count}`;
  }
  let data = `SaleConditionAccepted=${
    parse.SaleConditionAccepted
  }&RGPDConditionAccepted=${parse.RGPDConditionAccepted}&ExtendedSearchDayCount=${
    parse.ExtendedSearchDayCount
  }&DoNotCheckCache=${parse.DoNotCheckCache}&AlreadyLoggedIn=${
    parse.AlreadyLoggedIn
  }&TempDataGuid=${parse.TempDataGuid}&CurrencyCode=${
    parse.CurrencyCode
  }&FareBasisDataId=&SelectedTimeLimitExtensionDataId=&IsFirstRequest=${
    parse.IsFirstRequest
  }&Travelers%5B0%5D%5BDataId%5D=${
    parse.Travelers[0].DataId
  }&Travelers%5B0%5D%5BCount%5D=${
    parse.Travelers[0].Count
  }&UserSelections%5B0%5D%5BSelectedDate%5D=${parse.UserSelections[0].SelectedDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00&UserSelections%5B0%5D%5BIsOpen%5D=${
    parse.UserSelections[0].IsOpen
  }&UserSelections%5B0%5D%5BReferenceDate%5D=${parse.UserSelections[0].ReferenceDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00&UserSelections%5B0%5D%5BDataIdOrigin%5D=${
    parse.UserSelections[0].DataIdOrigin
  }&UserSelections%5B0%5D%5BDataIdDestination%5D=${
    parse.UserSelections[0].DataIdDestination
  }&UserSelections%5B0%5D%5BGenericClassDataId%5D=${parsedJson.UserSelections[0].GenericClassDataId}&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BAirlineDesignator%5D=${parsedJson.UserSelections[0].SelectedSegments[0].AirlineDesignator}&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BFlightNumber%5D=${parsedJson.UserSelections[0].SelectedSegments[0].FlightNumber}&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDepartureDateTime%5D=${parsedJson.UserSelections[0].SelectedSegments[0].DepartureDateTime.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdFlight%5D=${parsedJson.UserSelections[0].SelectedSegments[0].DataIdFlight}&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdOrigin%5D=6707&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdDestination%5D=${
    parse.UserSelections[0].DataIdDestination
  }
  &UserSelections%5B0%5D%5BIsSearchDisabled%5D=false&UserSelections%5B0%5D%5BIsUpgrade%5D=false&UserSelections%5B0%5D%5BFlightNumbers%5D=&JsonPrepareBookingRequest=&CabinClassDataId=&IsFFPRewardSearch=false&IsTCSearch=false&TCBookCode=&PromoCode=&IsNewBooking=true&ShowingWLWarningMessageActivated=false&CustomerAccountInfo=&UpgradeType=&SearchType=&SearchUpgradeOnOtherFlight=false&ZietSearchType=0`;
  if (traveler1 != null) {
    data = data.concat(traveler1);
  }
  if (traveler2 != null) {
    data = data.concat(traveler2);
  }
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${linkRequest}`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
      Accept: "text/html, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      __RequestVerificationToken: headerRequestVerificationToken,
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://fo-asia.ttinteractive.com",
      Connection: "keep-alive",
      Referer: currentURL,
      Cookie: cookie,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    data: data,
  };
  // const name = $(element).find('.sum-up-label span:last-child').text();
  const searchResult = await common.fetchData(config);
  const $ = cheerio.load(searchResult.data);
  const equipmentValue = $(".plane strong")
    .parent()
    .text()
    .trim()
    .replace("Equipment: ", "");

  const flightNumber = $("#flightnumber strong").text().trim();
  const departure = $('strong:contains("Departure"):first-child')
    .parent()
    .text()
    .trim()
    .replace("Departure :\n", "");
  const arrival = $('strong:contains("Arrival"):first-child')
    .parent()
    .text()
    .trim()
    .replace("Arrival :\n", "");
  const departureDate = formatDate(departure);
  const arrivalDate = formatDate(arrival);
  const flightObject = new Flight();
  const parts = equipmentValue.match(/^(.*?)\s*-\s*(\d+)/);
  const aircraft = parts[1].trim();
  const number = parts[2].trim();
  flightObject.flightCode = flightNumber;
  flightObject.type = "direct";
  flightObject.aircraftIata = aircraft;
  flightObject.aircraftIcao = number;
  flightObject.aircraftName = equipmentValue;
  flightObject.currency = "USD";
  if(parsedJson.UserSelections[0].GenericClassDataId=='13'){
    flightObject.cabinClass = "Economy Light";
  }else if(parsedJson.UserSelections[0].GenericClassDataId=='15'){
    flightObject.cabinClass = "Economy Saver";
  }else if (parsedJson.UserSelections[0].GenericClassDataId=='18'){
    flightObject.cabinClass = "Economy Value";
  }else {
    flightObject.cabinClass = "Economy Flex";
  }
  flightObject.departDateTime = departureDate;
  flightObject.arrivalDateTime = arrivalDate;
  const sumUpDivs = $(".row.total-to-pay .sum-up-pax");
  sumUpDivs.each((index, element) => {
    const type = $(element).find(".sum-up-label span:last-child").text();
    const priceText = $(element).find(".sum-up-val span:first-child").text();
    const price = parseFloat(priceText.replace(" USD", ""));
    if (type === "Adult(s)") {
      flightObject.priceAdult = price;
    }
    if (type === "Child(ren)") {
      flightObject.priceChild = price;
    }
    if (type === "Infant(s)") {
      flightObject.priceInfant = price;
    }
  });

  return flightObject.toJson();
}
