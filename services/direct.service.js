const redisService = require("../services/redis.service");
const Flight = require("../model/response/flight.dto.js");
const Response = require("../model/response/response.dto.js");
const common = require("../utils/common");
const logger = require("../utils/logger");
const qs = require("qs");
const constant = require("../constants/constants");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
exports.process = async (req, res) => {
  const flightInfo = await getOnewayFareFlight(req);
  return res.status(200).json(flightInfo);
};
async function getOnewayFareFlight(req) {
  return createSearchForm(req);
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

 // Create a DOM environment
    const dom = new JSDOM(html, { runScripts: 'dangerously' });

    // Access the window object of the DOM
    const window = dom.window;

  const inputTag = $('input[name="__RequestVerificationToken"][type="hidden"]');
  const viewModelContent = htmlString.match(/var viewModel = (\{.*\});/)[1];
  const headerRequestVerificationToken = inputTag.attr("value");
  return searchResult(
    req,
    viewModelContent,
    currentURL,
    linkRequest,
    navId,
    prodAsia,
    __RequestVerificationToken,
    headerRequestVerificationToken
  );
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
  headerRequestVerificationToken
) {
  const cookie = prodAsia.concat(__RequestVerificationToken).concat(navId);
  const p = JSON.parse(viewModelContent);
  // &Travelers%5B1%5D%5BDataId%5D=2&Travelers%5B1%5D%5BCount%5D=1
  // &Travelers%5B2%5D%5BDataId%5D=3&Travelers%5B2%5D%5BCount%5D=1
  const traveler1 = null;
  const traveler2 = null;
  if (p.Travelers[1] != undefined) {
    traveler1 = `&Travelers%5B1%5D%5BDataId%5D=${p.Travelers[1].DataId}&Travelers%5B1%5D%5BCount%5D=${p.Travelers[1].Count}`;
  }
  if (p.Travelers[2] != undefined) {
    traveler2 = `&Travelers%5B1%5D%5BDataId%5D=${p.Travelers[2].DataId}&Travelers%5B1%5D%5BCount%5D=${p.Travelers[2].Count}`;
  }
  let data = `SaleConditionAccepted=${
    p.SaleConditionAccepted
  }&RGPDConditionAccepted=${p.RGPDConditionAccepted}&ExtendedSearchDayCount=${
    p.ExtendedSearchDayCount
  }&DoNotCheckCache=${p.DoNotCheckCache}&AlreadyLoggedIn=${
    p.AlreadyLoggedIn
  }&TempDataGuid=${p.TempDataGuid}&CurrencyCode=${
    p.CurrencyCode
  }&FareBasisDataId=&SelectedTimeLimitExtensionDataId=&IsFirstRequest=${
    p.IsFirstRequest
  }
  &Travelers%5B0%5D%5BDataId%5D=${
    p.Travelers[0].DataId
  }&Travelers%5B0%5D%5BCount%5D=${p.Travelers[0].Count}
  &UserSelections%5B0%5D%5BSelectedDate%5D=${p.UserSelections[0].SelectedDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00
  &UserSelections%5B0%5D%5BIsOpen%5D=${p.UserSelections[0].IsOpen}
  &UserSelections%5B0%5D%5BReferenceDate%5D=${p.UserSelections[0].ReferenceDate.replace(
    "T00:00:00",
    "T00"
  )}%3A00%3A00
  &UserSelections%5B0%5D%5BDataIdOrigin%5D=${
    p.UserSelections[0].DataIdOrigin
  }&UserSelections%5B0%5D%5BDataIdDestination%5D=${
    p.UserSelections[0].DataIdDestination
  }
  &UserSelections%5B0%5D%5BGenericClassDataId%5D=${
    p.UserSelections[0].GenericClassDataId
  }&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BAirlineDesignator%5D=BS&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BFlightNumber%5D=175
  &UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDepartureDateTime%5D=2023-08-20T16%3A30%3A00&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdFlight%5D=236331&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdOrigin%5D=6707&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdDestination%5D=6182
  &UserSelections%5B0%5D%5BIsSearchDisabled%5D=false&UserSelections%5B0%5D%5BIsUpgrade%5D=false&UserSelections%5B0%5D%5BFlightNumbers%5D=&JsonPrepareBookingRequest=&CabinClassDataId=&IsFFPRewardSearch=false&IsTCSearch=false&TCBookCode=&PromoCode=&IsNewBooking=true&ShowingWLWarningMessageActivated=false&CustomerAccountInfo=&UpgradeType=&SearchType=&SearchUpgradeOnOtherFlight=false&ZietSearchType=0`;
  if (traveler1 != null) {
    data = data.concat(traveler1);
  }
  if (traveler2 != null) {
    data = data.concat(traveler2);
  }
  data =
    "SaleConditionAccepted=false&RGPDConditionAccepted=false&ExtendedSearchDayCount=3&DoNotCheckCache=true&AlreadyLoggedIn=false&TempDataGuid=24cf2174c3754b0081740295b60d4da5&CurrencyCode=USD&FareBasisDataId=&SelectedTimeLimitExtensionDataId=&IsFirstRequest=true&Travelers%5B0%5D%5BDataId%5D=1&Travelers%5B0%5D%5BCount%5D=1&UserSelections%5B0%5D%5BSelectedDate%5D=2023-08-21T00%3A00%3A00&UserSelections%5B0%5D%5BIsOpen%5D=false&UserSelections%5B0%5D%5BReferenceDate%5D=2023-08-21T00%3A00%3A00&UserSelections%5B0%5D%5BDataIdOrigin%5D=6707&UserSelections%5B0%5D%5BDataIdDestination%5D=6337&UserSelections%5B0%5D%5BGenericClassDataId%5D=15&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BAirlineDesignator%5D=BS&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BFlightNumber%5D=101&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDepartureDateTime%5D=2023-08-21T07%3A00%3A00&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdFlight%5D=222881&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdOrigin%5D=6707&UserSelections%5B0%5D%5BSelectedSegments%5D%5B0%5D%5BDataIdDestination%5D=6337&UserSelections%5B0%5D%5BIsSearchDisabled%5D=false&UserSelections%5B0%5D%5BIsUpgrade%5D=false&UserSelections%5B0%5D%5BFlightNumbers%5D=&JsonPrepareBookingRequest=&CabinClassDataId=&IsFFPRewardSearch=false&IsTCSearch=false&TCBookCode=&PromoCode=&IsNewBooking=true&ShowingWLWarningMessageActivated=false&CustomerAccountInfo=&UpgradeType=&SearchType=&SearchUpgradeOnOtherFlight=false&ZietSearchType=0";
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
  flightObject.cabinClass = "Economy Light";
  flightObject.departDateTime = departureDate;
  flightObject.arrivalDateTime = arrivalDate;
  const sumUpDivs = $(".row.total-to-pay:first-child .sum-up-pax");
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
  const responseFlight = new Array();
  responseFlight.push(flightObject.toJson());
  return responseFlight;
}
