const he = require('he');

const encodedString = "{&quot;_genericClassesFilter&quot;:[],&quot;SaleConditionAccepted&quot;:false,&quot;RGPDConditionAccepted&quot;:false,&quot;ExtendedSearchDayCount&quot;:3,&quot;DoNotCheckCache&quot;:true,&quot;AlreadyLoggedIn&quot;:false,&quot;TempDataGuid&quot;:&quot;4ecb8928788f46cc9a3bd386974c49d4&quot;,&quot;CurrencyCode&quot;:&quot;USD&quot;,&quot;FareBasisDataId&quot;:null,&quot;SelectedTimeLimitExtensionDataId&quot;:null,&quot;IsFirstRequest&quot;:false,&quot;GenericClassesFilter&quot;:[],&quot;Travelers&quot;:[{&quot;DataId&quot;:1,&quot;Count&quot;:1},{&quot;DataId&quot;:2,&quot;Count&quot;:1},{&quot;DataId&quot;:3,&quot;Count&quot;:1}],&quot;UserSelections&quot;:[{&quot;SelectedDate&quot;:&quot;2023-08-23T00:00:00&quot;,&quot;IsOpen&quot;:false,&quot;ReferenceDate&quot;:&quot;2023-08-23T00:00:00&quot;,&quot;DataIdOrigin&quot;:6707,&quot;DataIdDestination&quot;:6337,&quot;GenericClassDataId&quot;:18,&quot;SelectedSegments&quot;:[{&quot;AirlineDesignator&quot;:&quot;BS&quot;,&quot;FlightNumber&quot;:&quot;103&quot;,&quot;DepartureDateTime&quot;:&quot;2023-08-23T08:00:00&quot;,&quot;DataIdFlight&quot;:225921,&quot;DataIdOrigin&quot;:6707,&quot;DataIdDestination&quot;:6337}],&quot;IsSearchDisabled&quot;:false,&quot;IsUpgrade&quot;:false,&quot;FlightNumbers&quot;:null}],&quot;JsonPrepareBookingRequest&quot;:null,&quot;CabinClassDataId&quot;:null,&quot;IsFFPRewardSearch&quot;:false,&quot;IsTCSearch&quot;:false,&quot;TCBookCode&quot;:null,&quot;PromoCode&quot;:null,&quot;IsNewBooking&quot;:true,&quot;ShowingWLWarningMessageActivated&quot;:false,&quot;CustomerAccountInfo&quot;:null,&quot;UpgradeType&quot;:null,&quot;SearchType&quot;:null,&quot;SearchUpgradeOnOtherFlight&quot;:false,&quot;ZietSearchType&quot;:0}";

const decodedString = he.decode(encodedString);
const parsedJson = JSON.parse(decodedString);

console.log(parsedJson);