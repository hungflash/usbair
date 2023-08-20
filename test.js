const testString = `<!DOCTYPE html>
<html lang="en-GB-2035">

<head>
	<meta name="robots" content="noindex" />
	<meta name="googlebot" content="noindex" />

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Search result</title>
	<script src="/Zenith/FrontOffice/bundles/modernizr?v=inCVuEFe6J4Q07A0AcRsbJic_UE5MwpRMNGcOtk94TE1"></script>

	<script src="/Zenith/FrontOffice/bundles/jquery?v=dO4Gt7Ka5ojMc14w4awt4_FEcImWHjVwy16ITiwbpBM1"></script>

	<script src="/Zenith/FrontOffice/bundles/typeahead?v=qbTjkUG7rdsnQHRRlxy3WTPux7BYYWx5mWKfolZWoHE1"></script>


	<!--Flag Number--->
	<link href="/Zenith/FrontOffice/Scripts/BookingEngine/intl-tel-input/css/intlTelInput.css" rel="stylesheet">
	<script language="javascript" src="/Zenith/FrontOffice/Scripts/BookingEngine/intl-tel-input/js/intlTelInput.js">
	</script>
	<script language="javascript"
		src="/Zenith/FrontOffice/Scripts/BookingEngine/intl-tel-input/js/intlTelInput-jquery.min.js"></script>
	<script language="javascript" src="/Zenith/FrontOffice/Scripts/BookingEngine/intl-tel-input/js/utils.js"></script>

	<!-- FormValidation plugin and the class supports validating Bootstrap form -->
	<script
		src="/Zenith/FrontOffice/Scripts/BookingEngine/formvalidation/vendor/formvalidation/js/formValidation.min.js">
	</script>
	<script
		src="/Zenith/FrontOffice/Scripts/BookingEngine/formvalidation/vendor/formvalidation/js/framework/bootstrap.min.js">
	</script>
	<script language="javascript" src="/Zenith/FrontOffice/Scripts/bootbox.min.js"></script>




	<link href="/Zenith/FrontOffice/Content/seatMap.css" rel="stylesheet" type="text/css" />
	<link href="/Zenith/FrontOffice/Content/toastr.min.css" rel="stylesheet" type="text/css" />

	<style type="text/css">
		.modal-backdrop {
			z-index: -1 !important;
		}
	</style>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link href="/Zenith/FrontOffice/Content/usbangla/bootstrap?v=cq6dJ559oTuLs5ckMtE6uBaAODG_qChxJY4cakcAQdE1"
		rel="stylesheet" />


	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<link rel="icon" href="/usbangla/favicon.ico?v=2" />

	<!-- FormValidation CSS file -->
	<link
		href="/Zenith/FrontOffice/Scripts/BookingEngine/formvalidation/vendor/formvalidation/css/formValidation.min.css"
		rel="stylesheet">

	<!--Flag SearchCriteria--->
	<link href="/Zenith/FrontOffice/Scripts/BookingEngine/flags/flags.css" rel="stylesheet">


	<style type="text/css">
		body {
			padding: 0;
		}
	</style>
</head>

<body id="body">
	<script>
		!function (a, b, c, d, e, f) {
						  a.ddjskey = e;
						  a.ddoptions = f || null;
						  var m = b.createElement(c), n = b.getElementsByTagName(c)[0];
						  m.async = 1, m.src = d, n.parentNode.insertBefore(m, n);
					  }(window, document, "script", "https://js.datadome.co/tags.js","448C8C102B74E1699B0FADF21BAADF", { ajaxListenerPath: true });
	</script>
	<iframe src="https://usbair.com/zenith/header.html" id="TopFrameId" class="integrated-iframe" seamless="seamless"
		scrolling="no"></iframe>
	<div class="mobile-banner">
		<a href="/Zenith/FrontOffice/usbangla/"
			style="background-image: url('/usbangla/images_site/logos/logo_header.png')"></a>
	</div>

	<div id="TTINotifications" class="ErrorNotification">
		<div style="display: none" data-bind="visible : anyNotification()" class="wrapper-error">

			<div class="row">
				<div class="col-md-12 notification notification-success" data-bind="foreach : { data : success }">
					<div class="alert alert-success alert-dismissible" role="alert">
						<a data-bind="html : description" data-dismiss="alert" href="#"></a>
					</div>
				</div>
				<div class="col-md-12 notification notification-info" data-bind="foreach : { data : info }">
					<div class="alert alert-info alert-dismissible" role="alert">
						<a data-bind="html : description" data-dismiss="alert" href="#"></a>
					</div>
				</div>
				<div class="col-md-12 notification notification-warning" data-bind="foreach : { data : warning }">
					<div class="alert alert-warning alert-dismissible" role="alert">
						<a data-bind="html : description" data-dismiss="alert" href="#"></a>
					</div>

				</div>
				<div class="col-md-12 notification notification-danger" data-bind="foreach : { data : danger }">
					<div class="alert alert-danger alert-dismissible" role="alert"
						data-bind="event: {'close.bs.alert': $root.removeDangerNotification}">
						<a data-bind="html : description, attr: {href:href,target:target}" data-dismiss="alert"></a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="AlertModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"></h4>
				</div>
				<div class="modal-body">
					<p class="modal-body-content">
					</p>
				</div>
				<div class="modal-footer">
				</div>
			</div>
		</div>
	</div>






	<body id="body">
		<div id="SearchNbe">

			<div id="ResultSearch" class="container">

				<div id="FlexBooking" class="animsition-overlay" data-animsition-overlay="true"
					data-animsition-in-class="overlay-slide-in-left" data-animsition-in-duration="1000"
					data-animsition-out-class="overlay-slide-out-left" data-animsition-out-duration="800">

					<div id="fareconditions" class="row">
						<div id="BookFareConditions">
							<div class="modal" id="BookFareConditionsModal">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 class="modal-title">Fare details </h4>

										</div>
										<div class="row comparatif">
											<div class="col-md-2 col-sm-4 col-xs-4  hidden-xs no-pdr legende"
												id="BookFareConditionsModalLegend">
												<table class="table table-striped table-condensed table-bordered">

													<tbody>
														<tr>
															<td class="tr-farebasis info"><strong>Fare basis</strong>
															</td>
														</tr>
														<tr>
															<td class="tr-price"><strong>Price</strong></td>
														</tr>
														<tr>
															<td class="tr-remboursable info">
																<p><strong>Refundable</strong></p>
																<p><strong>Modifiable</strong></p>
															</td>
														</tr>
														<tr>
															<td class="tr-bagages"><strong>Baggage Allowance</strong>
															</td>
														</tr>
													</tbody>

												</table>
											</div>
											<div class="col-md-10 col-sm-8 col-xs-12">
												<div class="modal-body">

												</div>
												<div class="penalty-note col-xs-12">
													<p class="text-primary">
														<span class="material-icons">info</span>
														<strong>In the case of modification of several trips, the highest penalty on all trips will be applied.</strong>
													</p>
												</div>
											</div>
										</div>


										<div class="modal-footer">
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
							<div class="modal" id="BookFareConditionsModalLoader">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h4 class="modal-title">Fare details</h4>
										</div>
										<div class="modal-body">

											<div class="global-progress">
												<div class="loading">

													<div class="preloader">
														<span class="line line-1"></span>
														<span class="line line-2"></span>
														<span class="line line-3"></span>
														<span class="line line-4"></span>
														<span class="line line-5"></span>
														<span class="line line-6"></span>
														<span class="line line-7"></span>
														<span class="line line-8"></span>
														<span class="line line-9"></span>
														<p>Loading</p>
													</div>


												</div>
											</div>
										</div>
									</div>
								</div>
							</div>



						</div>
					</div>

					<div id="seatmaps" class="row">
						<div id="LinkSeats">
							<div class="seatmap">
								<!-- Modal -->
								<div class="modal fade bs-example-modal-lg" id="SeatMapsModal" tabindex="-1"
									role="dialog" aria-labelledby="SeatMapsModal">
									<div class="modal-dialog modal-lg" role="document">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<h4 class="modal-title" id="myModalLabel">Seating preview</h4>
											</div>
											<div class="modal-body">
												<div class="seatmap">
													<div class="row">
														<div class="col-md-12 col-sm-12 col-xs-12 no-padding">
															<div class="hidden-seatmap" style="display:block;">

															</div>
														</div>
													</div>

												</div>
											</div>
											<div class="modal-footer">
												<div class="row legende-bottom">
													<div class="col-md-12 col-sm-12 col-xs-12">
														<div class="seatMapSelectionBlock">
															<div class="row seatMapList">
																<div class="Legende" style="display: block;">

																	<ul class="liste-legende">
																		<li>
																			<div class="row">
																				<div
																					class="seat seatIcon seatStruct None">
																					<span class="seatLetter"></span>
																					<div class="seatHeadRest"></div>
																				</div>
																				<div class="definition">
																					<span class="pull-left">Free</span><span class="ml-10"></span>
																				</div>
																			</div>
																		</li>
																		<li>
																			<div class="row">
																				<div class="seatRow  emergencyExitLeft">
																					<div class="seatRowNumber"></div>
																					<div class="definition">Emergency
																						exit</div>
																				</div>
																			</div>
																		</li>
																		<li>
																			<div class="row">
																				<div
																					class="seat seatIcon seatStruct blocked">
																					<span class="seatLetter"></span>
																					<div class="seatHeadRest"></div>
																				</div>
																				<div class="definition"> Blocked</div>
																			</div>
																		</li>
																		<li>
																			<div class="row">
																				<div
																					class="seat seatIcon seatStruct busy">
																					<span class="seatLetter"></span>
																					<div class="seatHeadRest"></div>
																				</div>
																				<div class="definition"> Used</div>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>

					<div id="UpgradeOnSameFlight">
						<div class="modal-searchUpgradeAdvise modal fade" id="modalSearchUpgradeAdvise" tabindex="-1"
							role="dialog" aria-labelledby="modalSearchUpgradeAdvise" aria-hidden="true">
							<div class="modal-dialog modal-sm">
								<div class="modal-content">
									<div class="modal-body">
										<div class="txt-center">
											No availability has been found for the upgrade, should you wish to look for
											other flights on the same day?
										</div>
									</div>
									<div class="modal-footer">
										<div class="col-xs-4 col-xs-offset-4">
											<button type="button" class="btn btn-back pull-left" data-dismiss="modal">No</button>
											<button class="btn btn-confirm pull-right" data-loading-text="Loading ..." type="button" onclick=" searchUpgradeOnSameDate(); " autocomplete="off">
                                            Yes
                                        </button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Alert modals -->
					<div class="modal-alertMessage modal fade" id="modalAlertMessage" tabindex="-1" role="dialog"
						aria-labelledby="modalAlertMessage" aria-hidden="true" style="z-index: 99999!important">
						<div class="modal-dialog modal-sm">
							<div class="modal-content">
								<div class="modal-body">
									<div class="row">
										<div class="col-xs-12">
											<div style="margin-bottom: 5px; display: flex; align-items: center">
												<div class="col-xs-1">
													<i class="material-icons">notification_important</i>
												</div>
												<div class="col-xs-11" style="padding-left: 0px;">
													<div class="col-xs-12 alert-message-content">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer" style="margin-bottom: 5px;">
									<div class="col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
										<button type="button" class="btn btn-warning pull-left" data-dismiss="modal" style="min-width: 80px;">Cancel</button>
										<button type="button" class="btn btn-primary pull-right btn-confirm-alert" autocomplete="off" style="min-width: 80px;">Confirm</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!--Steps-->
					<div class="container">
						<div id="FilArianne">

							<div class="breadcrumbs BookPath">
								<ul class='cf'>
									<li class="back step-size-20 "><a
											href="/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB?__cnv=uaao7"><span class="icon"></span><span class="txt">Flight search</span></a>
									</li>
									<li class="active step-size-20 "><a
											class="active"><span class="icon"></span><span class="txt">Results</span></a>
									</li>
									<li class="next step-size-20 ">
										<a><span class="icon"></span><span class="txt">Customer</span></a></li>
									<li class="next step-size-20 ">
										<a><span class="icon"></span><span class="txt">Passenger</span></a></li>
									<li class="next step-size-20 ">
										<a><span class="icon"></span><span class="txt">Book</span></a></li>
								</ul>
							</div>

							<div class="validation-summary-valid" data-valmsg-summary="true">
								<ul>
									<li style="display:none"></li>
								</ul>
							</div>
						</div>
					</div>
					<!--Commentaires Legs---->
					<div class="container">


					</div>

					<!---Modification Vol--->
					<div class="container">
						<div class="row">
							<div class="col-md-12 col-sm-12 col-xs-12 no-padding" id="IframeNbe">
								<div class="row">
									<div class="col-xs-12 flex-page selection-sumup-main">
										<div class="selection-sumup-block">
											<div class="selection-sumup">
												<div
													class="col-md-2 col-md-push-6 col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2 no-padding">
													<div class="btn btn-primary btn-block" id="toggleChangeSelection">
														Change selection</div>
												</div>

												<div class="col-md-12 col-sm-12 col-xs-12 selection-sumup-content no-padding"
													id="changeSelectionContent" style="display: none">



													<div id="SearchCriteria" class="row">
														<div class="loading" data-bind="visible: !loaded()">
															<div class="row">
																<div class="col-xs-12">
																	<div id="LoadingBookingEngine">
																		<div class="global-progress">
																			<div class="loading">
																				<div class="logocompagnie"
																					style="background-image: url('/usbangla/images_site/logos/logo_home.png?v=2');">
																				</div>
																				<div class="preloader">
																					<span class="line line-1"></span>
																					<span class="line line-2"></span>
																					<span class="line line-3"></span>
																					<span class="line line-4"></span>
																					<span class="line line-5"></span>
																					<span class="line line-6"></span>
																					<span class="line line-7"></span>
																					<span class="line line-8"></span>
																					<span class="line line-9"></span>
																					<p>Loading</p>
																				</div>

																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="loaded" data-bind="visible: $root.loaded()"
															style="display:none">
															<div class="col-md-12 col-md-offset-0 no-padding">
																<div class="Search">
																	<!----Ul navigation---->
																	<ul class="nav nav-tabs"
																		data-bind="template: { name: getTripTypeTemplate }">
																	</ul>

																	<!---Moteur de recherche--->
																	<div class="tab-content">
																		<div class="row">
																			<div
																				class="col-md-8 col-sm-12 col-xs-12 airport-date-flight no-padding">
																				<div class="row">
																					<div class=""
																						data-bind="template: { name: 'trip-template', foreach: Trips, afterRender: afterRenderTrip }, css : { 'multi-city' : (TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity && $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange)}">
																					</div>
																				</div>
																			</div>

																			<div
																				class="col-md-3 col-sm-12 col-xs-12 passenger no-padding">
																				<div class="row">
																					<h6>Passenger(s)</h6>
																					<div class="select-passenger">
																						<input type="text" data-toggle="modal" id="resume-passenger" data-target="#modalPassagers" data-focusonhide="false" value="1 Adult(s)" readonly=""/>
																						<span class="glyphicon glyphicon-menu-down"></span>
																					</div>
																					<div class="modal false-modal"
																						aria-hidden="true"
																						id="modalPassagers">
																						<div
																							class="modal-dialog modal-lg">
																							<div class="modal-content">
																								<div
																									class="modal-header">
																									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
																									<h6>Passenger(s)
																									</h6>
																								</div>
																								<div class="modal-body">
																									<div class="col-xs-12 passenger no-padding"
																										data-bind="template: { name: 'traveler-template', foreach: Travelers }"
																										id="collapsePassengers">
																									</div>
																									<div class="col-xs-12 passenger no-padding"
																										data-bind="visible: Travelers().length < TTIModel.SearchCriteria.ServerConfig.TravelerTypes.Items.length,if: $root.config.BookingProcessType == TTIModel.SearchCriteria.Enums.BookingProcessType.Book">
																										<div class="row"
																											data-bind="template: { name: 'addTraveler-template' }">
																										</div>
																									</div>
																									<div class="row"
																										id="filterGenericClassesId"
																										data-bind="if: FilterGenericClasses().length > 0">
																										<div class="col-xs-12 search-criterias-currency-block margin-bottom-xs"
																											data-bind="template: { name: 'genericClassFilter-template', foreach: FilterGenericClasses, afterRender: afterRenderGenericClassFilter }">
																										</div>

																									</div>
																									<div class="row"
																										id="Filtres">
																										<div
																											class="col-md-12 col-sm-12 col-xs-12 no-padding">
																											<div class="checkbox"
																												id="extendSearch">
																												<span>
                                                                <input type="checkbox" id="switchExtendedSearch" onclick="switchExtendedSearch();" />
                                                                <label class="extend-search" for="switchExtendedSearch"></label>
                                                            </span>
																												<span><label for="switchExtendedSearch">My travel dates are flexible</label></span>
																											</div>
																										</div>

																										<div class="col-md-12 col-sm-12 col-xs-12 no-padding"
																											id="ChequeDevisePromo">
																											<div
																												class="row">
																												<div class="col-md-12 col-sm-6 col-xs-12 search-criterias-currency-block "
																													data-bind="template: { name: getCurrencyTemplate }">
																												</div>
																												<div
																													class="col-md-12 col-sm-6 col-xs-12 no-padding">
																													<div class="row"
																														data-bind="visible: TTIModel.SearchCriteria.ServerConfig.DisplayPromoCodeFo">
																														<h6>Promotional
																															code
																														</h6>
																														<div
																															class="col-md-12 col-sm-12 col-xs-12 no-padding">
																															<input type="text" class="form-control" data-bind="value: PromoCode" />
                                                                    </div>
																														</div>
																													</div>
																												</div>

																												<div
																													class="col-md-12 col-sm-12 col-xs-12 no-padding">
																													<div class="row mt-10"
																														data-bind="visible: TTIModel.SearchCriteria.ServerConfig.DisplayTravelerCheckBookCode">
																														<h6>E-coupons
																															book
																															code
																														</h6>
																														<div
																															class="col-md-12 col-sm-12 col-xs-12 no-padding">
																															<input type="text" class="form-control" data-bind="value: TCBookCode" />
                                                                </div>
																														</div>
																													</div>

																													<div
																														class="row">
																														<div
																															class="col-xs-12">

																															<div class="row margin-bottom-xs"
																																data-bind="visible: TTIModel.SearchCriteria.ServerConfig.DisplayRealAvailability">
																																<div
																																	class="col-sm-6">
																																	<button class="btn btn-default btn-block" data-bind="click: DisplayRealAvailability.bind($data, !DisplayRealAvailability()), css : { 'active' : DisplayRealAvailability, 'btn-info': DisplayRealAvailability }">Display real availability</button>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																											<div
																												class="row">
																												<button type="button" class="btn btn-primary pull-right" data-dismiss="modal" aria-label="Close">Close</button>
																											</div>
																										</div>


																									</div>
																								</div>
																							</div>
																						</div>
																						<div class="row">
																							<button class="btn btn-default search-criterias-add-segment" type="button" data-bind="visible: $root.TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity && $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange, enable: Trips().length < TTIModel.SearchCriteria.ServerConfig.MultiCityMaxOriginDestinations, click: AddTrip"> <i class="material-icons">add</i> Add a destination
                                </button>
																							<div
																								data-bind="template: { name: 'extendedSearchSettings-template', data: ExtendedSearchSettings }">
																							</div>
																						</div>
																					</div>
																					<div
																						class="col-md-1 col-md-offset-0 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 no-padding searchbtn">
																						<!---Bouton Search--->
																						<div class="row"
																							data-bind="template: { name : 'submitSearch' }">

																						</div>
																					</div>

																				</div>
																			</div>
																		</div>
																	</div>
																</div>

															</div>


														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							<!---Loader--->
							<div class="row" id="LoaderResult">
								<div class="day-selection-trip" id="tripSummmaries">
									<div id="LoadingBookingEngine">
										<div class="global-progress">
											<div class="loading">
												<div class="logocompagnie"
													style="background-image: url('/usbangla/images_site/logos/logo_home.png?v=2');">
												</div>
												<div class="preloader">
													<span class="line line-1"></span>
													<span class="line line-2"></span>
													<span class="line line-3"></span>
													<span class="line line-4"></span>
													<span class="line line-5"></span>
													<span class="line line-6"></span>
													<span class="line line-7"></span>
													<span class="line line-8"></span>
													<span class="line line-9"></span>
													<p>Loading</p>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>

							<!---Time Limit Extension selection--->

							<!---Résumé Vol--->
							<div class="container-fluid footer-resume" id="LoaderResume">
								<div class="row">
									<div class="col-xs-12 selection-sumup-main " id="selectionResume">

									</div>
								</div>
							</div>

						</div>


					</div>
				</div>
	</body>

	<iframe src="https://usbair.com/zenith/footer.php" id="BottomFrameId" class="integrated-iframe" seamless="seamless"
		scrolling="no"></iframe>

	<div id="expiredSession" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Session expired</h4>
				</div>
				<div class="modal-body">
					<p>Your session has expired .<br/>You will be redirected to the homepage.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" onclick="javascript: window.location.href = '/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB';">OK</button>
				</div>
			</div>
		</div>
	</div>

	<script src="/Zenith/FrontOffice/bundles/bootstrap?v=-ktyuuYVm8reiCqek-REkH9kFQQZ53F1Ay-TXz9RIew1"></script>

	<script src="/Zenith/FrontOffice/bundles/bootstrap-datetimepicker?v=XYkUsqTamuA0ygg6WLIMg3AWBKiA18rZiHZgjg1jx2k1">
	</script>

	<script src="/Zenith/FrontOffice/bundles/knockout?v=3yo_6gMBEhVpZHJth7Pp4nH39G55fFs_WcG5iDZaszk1"></script>

	<script src="/Zenith/FrontOffice/bundles/TTI?v=mu4WBOi7swAfdAEoH4Isp_NPEhAU9Afny1Lb4jLse0Q1"></script>

	<script src="/Zenith/FrontOffice/bundles/TTIUI?v=fWRYnz-yFMNC0CQfkRwf6ICt9i4Peh0crXMaIVcFq-w1"></script>

	<script src="/Zenith/FrontOffice/bundles/TTIMoney?v=hc0QlJxWlKt_RvbDcpFsix1bVujWns1eSj1HZjBFGRs1"></script>


	<script src="/Zenith/FrontOffice/Scripts/toastr.min.js" type="text/javascript"></script>
	<script type="text/javascript">
		var antiFraudLitteral = "<!--antifraud-->";
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    var warningSelectionUnspecified = 'Attention, your selection has been modified. Please verify your flight(s).';
    var warningSelectionOutbound = 'Attention, your selection has been modified. Please verify your outbound flight(s).';
    var warningSelectionInbound = 'Attention, your selection has been modified. Please verify your inbound flight(s).';

    var viewModel = {"_genericClassesFilter":[],"SaleConditionAccepted":false,"RGPDConditionAccepted":false,"ExtendedSearchDayCount":3,"DoNotCheckCache":false,"AlreadyLoggedIn":false,"TempDataGuid":"6f7f647c8a47489d843b14406309ff60","CurrencyCode":"USD","FareBasisDataId":null,"SelectedTimeLimitExtensionDataId":null,"IsFirstRequest":false,"GenericClassesFilter":[],"Travelers":[{"DataId":1,"Count":1},{"DataId":2,"Count":1},{"DataId":3,"Count":1}],"UserSelections":[{"SelectedDate":"2023-08-19T00:00:00","IsOpen":false,"ReferenceDate":"2023-08-19T00:00:00","DataIdOrigin":6707,"DataIdDestination":6182,"GenericClassDataId":null,"SelectedSegments":null,"IsSearchDisabled":false,"IsUpgrade":false,"FlightNumbers":null}],"JsonPrepareBookingRequest":null,"CabinClassDataId":null,"IsFFPRewardSearch":false,"IsTCSearch":false,"TCBookCode":null,"PromoCode":null,"IsNewBooking":true,"ShowingWLWarningMessageActivated":false,"CustomerAccountInfo":null,"UpgradeType":null,"SearchType":null,"SearchUpgradeOnOtherFlight":false,"ZietSearchType":0};
    var loadSelectionResumeXhr = null;
    var loadTripSummariesXhr = null;
    var loadDayResumesXhr = null;
    var loadDayDetailsXhr = null;
    var firstSelectionResumeCalled = false;
    function displayModalError() {
        TTIUI.Notifications.instance.addDangerNotification("Error", "An error occured while processing your request. Please \u003cbutton class=\"btn btn-default\" onclick=\"window.location.href=window.location.href;\"\u003eRefresh\u003c/button\u003e your query", true);
    }


    function loadSelectionResume(model) {

        if (loadSelectionResumeXhr != null)
            loadSelectionResumeXhr.abort();

        $("#selectionResume .progress .progress-bar").show();
        $("#selectionResume .progress .progress-bar").removeClass("progress-bar-danger");

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        model.IsFirstRequest = !firstSelectionResumeCalled;
        loadSelectionResumeXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/FlexibleFLightListLoadSelectionResume?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });
        loadSelectionResumeXhr.success(function(html) {
            $("#selectionResume").html(html);
            $("#selectionResume [data-toggle=popover]").popover();

            var $mobileSelection = $('#TTLMobileSelection');
            if ($mobileSelection.length > 0) {
                $mobileSelection.empty();
                $("#FareLockSelection").detach().appendTo($mobileSelection);
            }

            //booking time limit
            $(".booking-time-limit").each(function () {
                var $this = $(this);
                var format = $this.data("format") || "L LT";
                var localTime = moment.utc($this.html(), "DDMMYYYYHHmm").local().format(format);
                $this.html(localTime);
            });

            firstSelectionResumeCalled = true;
        });
        loadSelectionResumeXhr.error(function(xhr, text_status, error_thrown) {
            $("#selectionResume .progress .progress-bar").addClass("progress-bar-danger");
            if (text_status != "abort") {
                var errText = error_thrown ? error_thrown : 'Technical error';
                TTIUI.Notifications.instance.addDangerNotification('', errText, true);
                $(".global-progress").hide();
                //displayModalError();
            }
        });
    }

    function loadDayResumes(model) {
        if (loadDayResumesXhr != null)
            loadDayResumesXhr.abort();

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        loadDayResumesXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/FlexibleFlightListLoadDayResumes?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });
        loadDayResumesXhr.success(function (html) {

            if (html.indexOf(antiFraudLitteral) != -1) {
                $("#tripSummmaries").html(html);
                return;
            }

            var $html = $(html);
            var dayResumes = $(".dayResume", $html);
            for (var index = 0; index < dayResumes.length; index++) {
                var $dayResume = $(dayResumes[index]);

                var toReplace = $($(".dayResume")[index]);
                if (!toReplace.hasClass('tripOpen')) {
                    toReplace.html($dayResume.html());
                }
            }
        });
        loadDayResumesXhr.error(function(xhr, text_status, error_thrown) {
            if (text_status != "abort") {
                var errText = error_thrown ? error_thrown : 'Technical error';
                TTIUI.Notifications.instance.addDangerNotification('', errText, true);
                //displayModalError();
            }
        });

    }

    function loadTripSummaries(model) {
        if (loadTripSummariesXhr != null)
            loadTripSummariesXhr.abort();

        $(".day-details .progress .progress-bar, .progress").show();
        $(".day-details .progress .progress-bar").removeClass("progress-bar-danger");

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        loadTripSummariesXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/FlexibleFlightListLoadSelectedDays?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });
        loadTripSummariesXhr.success(function(html) {
            loadDayResumes(model);

            $("#tripSummmaries").html(html);

            if (html.indexOf(antiFraudLitteral) != -1) {
                return;
            }

            if (!preselectNewFO()) {
                // nothing preselected
                loadSelectionResume(model);
            }
            scrollSelectionBar();


            var tripCount=$("#tripSummmaries [data-tripType]").length;
            if(tripCount>0) {
                $("#SearchNbe").attr('tripType',tripCount-1);
            }

        });
        loadTripSummariesXhr.error(function(xhr, text_status, error_thrown) {
            $(".day-details .progress .progress-bar").addClass("progress-bar-danger");
            if (text_status != "abort") {
                var errText = error_thrown ? error_thrown : 'Technical error';
                TTIUI.Notifications.instance.addDangerNotification('', errText, true);
                $(".global-progress").hide();
                //displayModalError();
            }
        });
    }

    function loadDayDetails(model) {

        if (loadDayDetailsXhr != null)
            loadDayDetailsXhr.abort();

        $(".day-details .progress .progress-bar,.progress").show();
        $(".day-details .progress .progress-bar").removeClass("progress-bar-danger");

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        loadDayDetailsXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/FlexibleFlightListLoadDayDetails?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });
        loadDayDetailsXhr.success(function (html) {

            if (html.indexOf(antiFraudLitteral) != -1) {
                $("#tripSummmaries").html(html);
                return;
            }

            var $html = $(html);
            var dayDetails = $(".dayDetail", $html);
            for (var index = 0; index < dayDetails.length; index++) {
                var $dayDetail = $(dayDetails[index]);
                $($(".dayDetail")[index]).html($dayDetail.html());
            }

            if (!preselectNewFO()) {
                // nothing preselected
                loadSelectionResume(model);
            }
            refreshFadeFlightsFilter();
        });
        loadDayDetailsXhr.error(function(xhr, text_status, error_thrown) {
            $(".day-details .progress .progress-bar").addClass("progress-bar-danger");
            if (text_status != "abort") {
                var errText = error_thrown ? error_thrown : 'Technical error';
                TTIUI.Notifications.instance.addDangerNotification('', errText, true);
                $(".global-progress").hide();
                //displayModalError();
            }
        });
    }

    $(function() {
        loadTripSummaries(viewModel);

    });

    function updateDisplay() {
        var priceCount = 0;
        $(".day-details-generic-classes-block").each(function () {
            var val = $(".tarif", this).length;
            if (val > priceCount) {
                priceCount = val;
            }
        });
        var flightCount = $(".day-details-list .flight").length;
        //if (flightCount > 1 && priceCount >= 3) {
        //    $("#LoaderResult").removeClass("row").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");
        //    $("#LoaderResume").removeClass("container-fluid").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
        //}
        //case 1

        /*
         if (flightCount > 1 && priceCount >= 1) {
             $("#LoaderResult").removeClass("row").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");
             $("#LoaderResume").removeClass("container-fluid").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
         }
         //case 2
         if (flightCount > 1 && priceCount >= 2  && priceCount <= 4) {
             $("#LoaderResult").removeClass("row").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");
             $("#LoaderResume").removeClass("container-fluid").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
         }
         //case 3
         if (flightCount > 1 && priceCount >= 5) {
            $("#LoaderResult").removeClass("col-lg-9 col-md-9 col-sm-12 col-xs-12").addClass("row");
            $("#LoaderResume").removeClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").addClass("container-fluid");
            $("#LoaderResume").removeClass("scroll-lock").addClass("container-fluid").css( "position:relative !important" );
         }
         */

        //APE NEW Code to manage display of cart.
        if (flightCount > 5 && priceCount <= 2) {
            $("#LoaderResult").removeClass("row").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");
            $("#LoaderResume").removeClass("container-fluid").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
        }
        else
        {
            $("#LoaderResult").removeClass("col-lg-9 col-md-9 col-sm-12 col-xs-12").addClass("row");
            $("#LoaderResume").removeClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").addClass("container-fluid");
            $("#LoaderResume").removeClass("scroll-lock").addClass("container-fluid").css( "position:relative !important" );
        }

        if ($("#LoaderResult").hasClass("row")) {
            $("#ConfirmReservationContainer").removeClass("container");
        }

        //$("#LoaderResult").removeClass("row").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");
        //$("#LoaderResume").removeClass("container-fluid").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
    }

    function startFareConditions() {
        $("#BookFareConditionsModalLoader").modal("show");
    }

    function updateFareConditionsHtml(orderedCallBack) {
        var fcPanel = $("#BookFareConditionsModal .modal-body");
        fcPanel.html("");
        var mdSize = Math.floor(12 / orderedCallBack.length);
        var msSize = Math.floor(12 / orderedCallBack.length);

        for (var i = 0; i < orderedCallBack.length; i++) {
            var currentElement = orderedCallBack[i];
            fcPanel.append(currentElement.Html);

            // update classes
            $(".details-classe-tarifaire").last().addClass("col-md-" + mdSize).addClass("col-sm-" + msSize);
            if (currentElement.Selected) {
                $(".details-classe-tarifaire").last().addClass("selectedFareCondition");
            }
        }

        $("#BookFareConditionsModalLoader").modal("hide");
        $("#BookFareConditionsModal").modal("show");
    }


    function loadFareConditions(model, index, count, isSelected, fareCondSync) {

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        var loadFareConditionsXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/LoadFareConditions?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });

        loadFareConditionsXhr.success(function (html) {

            if (html.indexOf(antiFraudLitteral) != -1) {
                $("#tripSummmaries").html(html);
                return;
            }

            fareCondSync.OrderedCallBack[index] = {
                Html: html,
                Selected: isSelected
            };

            if (fareCondSync.OrderedCallBack.length == count) {
                fareCondSync.AllSuccess();
            }
        });

        loadFareConditionsXhr.error(function(xhr, text_status, error_thrown) {
            $("#BookFareConditionsModalLoader .progress .progress-bar").addClass("progress-bar-danger");
            if (text_status != "abort") {
                var errText = error_thrown ? error_thrown : 'Technical error';
                TTIUI.Notifications.instance.addDangerNotification('', errText, true);
                $(".global-progress").hide();
                //displayModalError();
            }
        });
    }

    $("#FlexBooking").on("click", "[data-loadFareConditions]", function() {
        $("#BookFareConditionsModal .modal-body").html("");

        var fareCondSync = {
            OrderedCallBack: new Array(),
            Start: startFareConditions,
            AllSuccess: function() {
                updateFareConditionsHtml(this.OrderedCallBack);
            }
        };

        //var fareCondSync = function () {
        //    this.OrderedCallBack = new Array();
        //};
        //fareCondSync.Start = startFareConditions;
        //fareCondSync.AllSuccess = function() {
        //    updateFareConditionsHtml(OrderedCallBack);
        //};


        var $this = $(this);
        var rowDayDetails = $this.parents('.row.day-detail-trip-row');
        var fareBasis = $(".day-details-fare-conditions[data-loadFareConditions]", rowDayDetails);
        var fbCount = fareBasis.length;


        fareCondSync.Start();

        fareBasis.each(function(index) {
            var params = $(this).attr("data-loadFareConditions");
            var model = JSON.parse(params);

            var isSelected = $(".btn-success", $(this).parents(".select-classe")).length > 0;
            loadFareConditions(model, index, fbCount, isSelected, fareCondSync);
        });


        return false;
    });

    function loadSeatMaps(model) {

        var antiForgeryToken = $("input[name=__RequestVerificationToken]").val();
        var loadSeatMapsXhr = $.ajax({
            url: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/FlexibleFlightStaticAjax/LoadSeatMaps?__cnv=uaao7",
            type: "POST",
            data: model,
            dataType: "html",
            beforeSend: function(request) {
                request.setRequestHeader("__RequestVerificationToken", antiForgeryToken);
            }
        });

        loadSeatMapsXhr.success(function (html) {

            if (html.indexOf(antiFraudLitteral) != -1) {
                $("#tripSummmaries").html(html);
                return;
            }

            $("#SeatMapsModal .hidden-seatmap").html(html);
            initSeating();

            $("#BookFareConditionsModalLoader").modal("hide");
            $("#SeatMapsModal").modal("show");
        });

        loadSeatMapsXhr.error(function(xhr, text_status, error_thrown) {
            $("#BookFareConditionsModalLoader .progress .progress-bar").addClass("progress-bar-danger");
            if (text_status != "abort") {
                TTIUI.Notifications.instance.addDangerNotification('', error_thrown, true);
                $(".global-progress").hide();
                //displayModalError();
            }
        });
    }

    $("#FlexBooking").on("click", "[data-loadseatmaps]", function() {
        $("#SeatMapsModal .hidden-seatmap").html("");
        $("#BookFareConditionsModalLoader").modal("show");

        var params = $(this).attr("data-loadseatmaps");
        var model = JSON.parse(params);

        loadSeatMaps(model);

        return false;
    });

    $("#tripSummmaries").on("click", "[data-loadTripSummaries]", function() {
        var $this = $(this);
        var params = $this.attr("data-loadTripSummaries");
        var model = JSON.parse(params);
        loadTripSummaries(model);
        return false;
    });

    $("#tripSummmaries").on("click", "[data-selectFare]", function() {
        var $this = $(this);
        var params = $this.attr("data-selectFare");
        var model = JSON.parse(params);

        if (!$this.data('auto-selected')) {
            var messageOnSelecting = $this.data('messageonselecting');
            if (messageOnSelecting && $this.parents('[data-currentgcselection]').data('currentgcselection') !== $this.data('genericclass')) {
                var $alertModal = $('#modalAlertMessage');
                $('.alert-message-content', $alertModal).html(messageOnSelecting);
                $('.btn-confirm-alert', $alertModal).off('click');
                $('.btn-confirm-alert', $alertModal).on('click',
                    function() {
                        loadDayDetails(model);
                        $alertModal.modal('hide');
                    });
                $alertModal.modal('show');
                return false;
            }
        } else {
            $this.data('auto-selected', false);
        }

        loadDayDetails(model);
        return false;
    });

    $("#tripSummmaries").on("click", "[data-changeWeek]", function() {
        var $this = $(this);
        $("form", $this.next()).submit();
    });

    $("#UpgradeType").on("click", "[data-upgradeType]", function() {
        var $this = $(this);

        var upgradeType = $this.attr("data-upgradeType");
        var params = $this.attr("data-loadTripSummaries");
        var model = JSON.parse(params);
        viewModel.SearchUpgradeOnOtherFlight = false;

        loadTripSummaries(model);

        //Mark as selected
        $('[data-upgradeType]', $this.parent()).each(function() {
            $(this).removeClass('btn-primary');
        });
        $this.addClass('btn-primary');

        //Show FFP info section
        var showFFPInfo = upgradeType == 2;
        $('#CustomerAccountInfo').toggle(showFFPInfo);
    });


    function updateFareLockResume(e, val) {
        var $this = $(e);
        var model = $this.parents('[data-model-json]').data('model-json');
        model.SelectedTimeLimitExtensionDataId = val;
        loadSelectionResume(model);
    }

    function refreshFareLockSelection(e) {
        var $modal = $('#TimeLimitExtensionSelectionModal');
        var selectedId = parseInt($('input[name="TimeLimitExtension"]:checked', $modal).val());
        if (selectedId === 0) selectedId = null;
        $modal.off("hidden.bs.modal");
        $modal.on("hidden.bs.modal", function () {
            var el = $('#FareLockSelection').find('input');
            updateFareLockResume(el, selectedId);
        });
        $modal.modal('hide');
    }

    function fareLockSelectionChange(e) {
        var $this = $(e);
        var isChecked = $this.is(':checked');
        var count = $('#FareLockSelection').data('selection-count');
        if (isChecked && count > 1) {
            //Show modal
            var $modal = $('#TimeLimitExtensionSelectionModal');
            $('input[value="' + $this.val() + '"]', $modal).prop("checked", true);
            $modal.modal('show');
        } else {
            var val = isChecked ? parseInt($this.val()) : null;
            updateFareLockResume(e, val);
        }
    }

    function searchUpgradeOnSameDate() {
        var $currentUpgradeType = $("#UpgradeType").find('.upgrade-selection-type-item.btn-primary');
        var model= $currentUpgradeType.length > 0 ? JSON.parse($currentUpgradeType.attr("data-loadTripSummaries")) : viewModel;
        model.SearchUpgradeOnOtherFlight = true;
        loadTripSummaries(model);
        $('#modalSearchUpgradeAdvise').modal('hide');
    }


	</script>

	<script type="text/javascript">
		function scrollSelectionBar() {
            $('.day-selection-bar-block').each(function () {
                $(this).scrollLeft($('.btn-primary', $(this)).offset().left - ($(this).width() / 2) + 15);
            });
        }

        function refreshFadeFlightsFilter() {
            $("#tripSummmaries").each(function () {
                var parent = $("[data-tripType]", $(this));

                fadeFilter(parent, $(".chkDirect", parent).is(':checked'), ".escaleFlight");
                fadeFilter(parent, $(".chkAfterMidi", parent).is(':checked'), ".beforeNoon");
                fadeFilter(parent, $(".chkBeforeMidi", parent).is(':checked'), ".afterNoon");
            });
        }

        function fadeFilter(trip, checked, fadeOutFilter) {
            if (checked) {
                $(fadeOutFilter, trip).fadeOut();
            } else {
                // unchecked CB case
                var cbBeforeNoon = $('.chkBeforeMidi', trip);
                var cbAfterNoon = $('.chkAfterMidi', trip);
                var cbDirect = $('.chkDirect', trip);

                if (!$(cbBeforeNoon).is(':checked') && !$(cbDirect).is(':checked') && !$(cbAfterNoon).is(':checked')) {
                    // both unchecked
                    $(fadeOutFilter, trip).fadeIn();
                } else {
                    var fadeIn = $(fadeOutFilter, trip);
                    if ($(cbBeforeNoon).is(':checked')) {
                        // $('.chkAfterMidi').not('checked');
                        fadeIn = fadeIn.not(".afterNoon");
                    }
                    if ($(cbAfterNoon).is(':checked')) {
                        //  $('.chkBeforeMidi').not('checked');
                        fadeIn = fadeIn.not(".beforeNoon");
                    }
                    if ($(cbDirect).is(':checked')) {
                        fadeIn = fadeIn.not(".escaleFlight");
                    }

                    fadeIn.fadeIn();
                }
            }
        }

        $(document).ready(function () {

            $("#selectionResume").on("click", ".showtaxes", function (e) {
                e.preventDefault();
                $("div.taxes-popup")
                    .hide()
                    .eq($(this).index('.showtaxes'))
                    .toggle();
            });
            $("#selectionResume").on("click", ".taxes-popup .close", function () {
                $("div.taxes-popup").hide();
            });

            $("#toggleChangeSelection").click(function () {
                $("#changeSelectionContent").toggle();
            });


            $('#tripSummmaries').on('change', '.chkBeforeMidi', function () {
                var parent = $(this).parents("[data-tripType]");
                var checked = $(this).is(':checked');
                fadeFilter(parent, checked, ".afterNoon");
                if (checked) {
                    $(".chkAfterMidi", parent).prop('checked', false);
                    fadeFilter(parent, false, ".beforeNoon");
                }

            });

            $('#tripSummmaries').on('change', '.chkAfterMidi', function () {
                var parent = $(this).parents("[data-tripType]");
                var checked = $(this).is(':checked');
                fadeFilter(parent, checked, ".beforeNoon");
                if (checked) {
                    $(".chkBeforeMidi", parent).prop('checked', false);
                    fadeFilter(parent, false, ".afterNoon");
                }

            });

            $('#tripSummmaries').on('change', '.chkDirect', function () {
                var parent = $(this).parents("[data-tripType]");
                fadeFilter(parent, $(this).is(':checked'), ".escaleFlight");
            });

        });


        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();


        });
	</script>

	<script>
		//$(function() {
        //    var footerFrame = $("#BottomFrameId");
        //    $(window).scroll(function() {
        //        var scroll = $(window).scrollTop();

        //        if (scroll >= 5) {
        //            footerFrame.addClass("scrolled-down");
        //        } else {
        //            footerFrame.removeClass("scrolled-down");
        //        }
        //    });
        //});

        $(window).scroll(function () {
            if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {

                $('#BottomFrameId').addClass('scrolled-down');
            }

            else {

                $('#BottomFrameId').removeClass('scrolled-down');
            }

        });




	</script>


	<script type="text/javascript" src="/Zenith/FrontOffice/Scripts/TTI.AnchorBlock.js"></script>
	<script type="text/javascript" src="/Zenith/FrontOffice/Scripts/BookingEngine/Seating.js"></script>
	<input name="__RequestVerificationToken" type="hidden" value="6pwrjROyukMzy6rzmgaxtq_Nj3bxRKx29JnHtyyFLymJ-1OMzUCXzAnqAzi4foTGoCSIYa8IeOjmrJB-ZPTsrxjqeFZaqiHc3PyrAMDqiSg1" />



	<!--Nav Ul li--->
	<script type="text/html" id="tripTypeSelection-template">
		<li class="btn-group">
			<a class=""
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.OneWay, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.OneWay }, click: setTripType.bind($data, TTIModel.SearchCriteria.Enums.TripType.OneWay)">
				One way
			</a>
		</li>
		<li class="btn-group">
			<a class=""
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip }, click: setTripType.bind($data, TTIModel.SearchCriteria.Enums.TripType.RoundTrip)">
				Round trip
			</a>
		</li>
	</script>

	<script type="text/html" id="tripTypeSelectionWithMultiCity-template">
		<li class="one-way">
			<a class=""
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.OneWay, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.OneWay }, click: setTripType.bind($data, TTIModel.SearchCriteria.Enums.TripType.OneWay)">
				<!-- ko if: TTIModel.SearchCriteria.ServerModel.IsAddingReturnFlight != true -->
				<!-- ko if: TTIModel.SearchCriteria.ServerConfig.AddReturnFlightAfterFirstBookingOnFO == true -->
				Start Trip
				<!-- /ko -->
				<!-- ko if: TTIModel.SearchCriteria.ServerConfig.AddReturnFlightAfterFirstBookingOnFO != true -->
				One way
				<!-- /ko -->
				<!-- /ko -->
				<!-- ko if: TTIModel.SearchCriteria.ServerModel.IsAddingReturnFlight == true -->
				Return Flight
				<!-- /ko -->
			</a>
		</li>
		<li class="round-trip">
			<a class=""
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip }, click: setTripType.bind($data, TTIModel.SearchCriteria.Enums.TripType.RoundTrip)">
				Round trip
			</a>
		</li>
		<!-- ko if: TTIModel.SearchCriteria.ServerConfig.AddReturnFlightAfterFirstBookingOnFO == true && TTIModel.SearchCriteria.ServerModel.IsAddingReturnFlight != true -->
		<li class="info">
			<label>
            Return flight can be scheduled after passenger details
        </label>
		</li>
		<!-- /ko -->

		<!-- ko if: TTIModel.SearchCriteria.ServerConfig.MultiCityMaxOriginDestinations != 0 -->
		<!-- ko if: TTIModel.SearchCriteria.ServerModel.IsIframe == true -->
		<li class="">
			<a class=" "
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity }, click: RedirectToFullScreenSearchCriterias.bind($data)">
				Multi City
			</a>
		</li>
		<!-- /ko -->
		<!-- ko if: TTIModel.SearchCriteria.ServerModel.IsIframe != true -->
		<li class=" multi-city">
			<a class=" "
				data-bind="css : { 'active' : TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity, 'btn-info' : TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity }, click: setTripType.bind($data, TTIModel.SearchCriteria.Enums.TripType.MultiCity)">
				Multi City
			</a>
		</li>
		<!-- /ko -->
		<!-- /ko -->
	</script>

	<script type="text/html" id="tripTypeSelection-exchange-template">
		<li class="">
			<a class="active">
				Exchange
			</a>
		</li>
		<!-- ko if: TTIModel.SearchCriteria.ServerConfig.CanExchangeOWToRT == true -->
		<li class="">
			<!-- ko if: Trips().length == 1 -->
			<a class=" " data-bind="click: addOrRemoveReturnTripForExchange.bind($data, false)">
				Add return flight
			</a>
			<!-- /ko -->
			<!-- ko if: CanRemoveReturnTrip() == true -->
			<a class=" " data-bind="click: addOrRemoveReturnTripForExchange.bind($data, true)">
				Remove return flight
			</a>
			<!-- /ko -->
		</li>
		<!-- /ko -->
	</script>
	<!--End Nav Ul li--->

	<script type="text/html" id="airportSelectionDropDown-Template">
		<h6 data-bind="text: strModalTitle"></h6>
		<div class="btn-group btn-block margin-bottom-xs">
			<button type="button" class="btn btn-default btn-block dropdown-toggle search-criterias-airport dropdown-airport" data-toggle="dropdown" data-bind="click: setAiportEdit, visible: !AirportEdit(), enable: (!Disabled() && $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange)">
            <span class="glyphicon glyphicon-menu-down"></span><span data-bind="text: TTIModel.SearchCriteria.Helpers.getAirportLabel(AirportCode(), IsAirportSet())" class="airport-label"></span>
        </button>
			<input type="text" data-trigger="focus" class="form-control search-criterias-airport" data-toggle="dropdown" data-bind="textInput: FilterAirport, visible: AirportEdit, hasFocus: AirportEdit" />
			<ul class="dropdown-menu" role="menu" data-bind="foreach: getFilteredAirports()">
				<li><a href="" data-bind="text: Label, click: $parent.setAirportCode.bind($data, Code)"></a></li>
			</ul>
		</div>
	</script>


	<!--Selection Airport--->
	<script type="text/html" id="airportSelectionModal-Template">
		<div class="airport-list-search">
			<div class="input-group">
				<h6 data-bind="text: strModalTitle"></h6>
				<input type="text" read-only data-bind="click: launchModal, enable: !Disabled(), value: TTIModel.SearchCriteria.Helpers.getAirportLabel(AirportCode(), IsAirportSet())" data-toggle="modal" data-target="getModalId()" class="airport-label" />
        </div>

				<div class="false-modal modal" aria-hidden="true" id="getModalId()" data-bind="attr: { 'id': getModalId() }">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h6 data-bind="text: strModalTitle"></h6>
								<input type="text" class="filterAirport form-control" data-bind="textInput: FilterAirport" list="FilterAiportId()" />
                    </div>
								<div class="modal-body">
									<div class="row airport-select">
										<div class="col-md-12 col-sm-12 col-xs-12 airports-list">
											<div class="row">
												<!-- ko foreach: getFilteredAirportsCountry() -->
												<div class="col-sm-12 col-sm-12 col-xs-12 airport-list">
													<a href="" class="center-block"
														data-bind="text: Label, click: $parent.setAirportCode.bind($data, Code)"></a>
												</div>
												<!-- /ko -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	</script>

	<!--Selection Airport--->
	<script type="text/html" id="airportSelectionListModal-Template">
		<div class="airport-list-search airport-country-select">
			<div class="input-group">

				<h6 data-bind="text: strModalTitle"></h6>
				<input type="text" read-only data-bind="click: launchModal, css: { 'disabled': Disabled() }, enable: !Disabled(), value: TTIModel.SearchCriteria.Helpers.getAirportLabel(AirportCode(), IsAirportSet())" data-toggle="modal" data-target="getModalId()" class="airport-label" />
        </div>

				<div class="false-modal modal" aria-hidden="true" data-bind="attr: { 'id': getModalId() }">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<input type="text" data-trigger="focus" class="filterAirport form-control" data-toggle="dropdown" data-bind="textInput: FilterAirport" />
                    </div>
								<div class="modal-body">
									<ul class="list-group" data-bind="foreach: { data: getAirportCountry(), as: 'country' }">
										<!-- ko if: $parent.getFilteredAirportsCountry(country._fields.key).length > 0 -->
										<li class="list-group-item">
											<div class="row airport-select">
												<div class="col-md-12 col-sm-12 col-xs-12 airports-list">
													<span data-bind="attr: { 'class': 'flag flag-'+country._fields.key.toLowerCase()}"></span>
													<span class="country" data-bind="text: TTIModel.SearchCriteria.Helpers.getCountryByCode(country._fields.key).Label"></span>
												</div>
												<div class="col-md-12 col-sm-12 col-xs-12">
													<div class="row">
														<!-- ko foreach: { data: $parent.getFilteredAirportsCountry(country._fields.key), as: 'airport'} -->
														<div class="col-md-12 col-sm-12 col-xs-12 airport-list">
															<a class="" href=""
																data-bind="text: airport.Label, click: $parents[1].setAirportCode.bind($data, airport.Code)"></a>
														</div>
														<!-- /ko -->
													</div>
												</div>
											</div>
										</li>
										<!-- /ko -->
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
	</script>

	<!---Trip Template--->
	<script type="text/html" id="trip-template">
		<div class="row">
			<div class="col-md-8 col-sm-8 col-xs-12 flight">
				<div class="clearfix"
					data-bind="visible : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">
				</div>
				<div class="row search-criterias-airports-row"
					data-bind="visible : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">
					<div class="col-md-6 col-sm-6 col-xs-12"
						data-bind="css : { 'disabled' : $root.config.BookingProcessType == TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange && DisabledLeg() }, enable: $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange || !DisabledLeg()">
						<div class="search-criterias-airport-block"
							data-bind="template : { name: getAirportSelectionTemplate(), data: Departure }"></div>
					</div>

					<div class="change-destination"
						data-bind="click: reverseAirports, css : { 'disabled' : $root.config.BookingProcessType == TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange && DisabledLeg() }, enable: $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange || !DisabledLeg()">
						<i class="material-icons">&#xE915;</i></div>

					<div class="col-md-6 col-sm-6 col-xs-12"
						data-bind="css : { 'disabled' : $root.config.BookingProcessType == TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange && DisabledLeg() }, enable: $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange || !DisabledLeg()">
						<div class="" data-bind="template : { name: getAirportSelectionTemplate(), data: Arrival }"></div>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-4 col-xs-12 date"
				data-bind="template : { name: getCalendarTemplate }, css :{ 'return-date':$root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1 } ">
			</div>
		</div>
		<div class="row search-criterias-dates-separator"
			data-bind="visible: !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">
		</div>
		<div class="row">
			<button class="btn btn-default pull-right search-criterias-remove-segment" type="button" data-bind="visible: $root.TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity && $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Exchange && $parent.Trips().length > 2, enable: $parent.Trips().length > 2, click: Remove">
            <i class="material-icons">close</i> Delete
        </button>
		</div>
		<div class="clearfix" data-bind="visible : $root.TripType() == TTIModel.SearchCriteria.Enums.TripType.MultiCity">
		</div>
	</script>

	<!---Calendrier template---->
	<script type="text/html" id="calendar-disabled-template">
		<div class="input-group">
			<h6 data-bind="text: DateTitle"></h6>
			<!-- ko if: IsOpen() -->
			<input type="text" class="form-control" value="Open" disabled="disabled" />
			<!-- /ko -->
			<!-- ko if: !IsOpen() -->
			<input type="text" class="form-control DatePicker" data-availabilities="true" data-bind="value: getSetDepartureDate, attr: { 'id': getCalendarId() }" disabled="disabled" />
			<!-- /ko -->
		</div>
	</script>

	<script type="text/html" id="calendar-template">
		<div class="input-group">
			<h6>
				<span data-bind="visible : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">Departure</span>
				<span data-bind="visible : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">Return</span>
			</h6>
			<input type="text" class="form-control DatePicker" data-availabilities="true" data-bind="value: getSetDepartureDate, attr: { 'id': getCalendarId(), 'date-max-unix': strMaxDate, 'date-min-unix': strMinDate }" />

    </div>
	</script>

	<script type="text/html" id="calendarWithOpen-template">
		<div class="input-group"
			data-bind="css: {'departure-block' : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1), 'arrival-block arrival-date ' : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)}">
			<h6>
				<span data-bind="visible : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">Departure</span>
				<span data-bind="visible : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)">Return</span>

			</h6>
			<input type="text" class="DatePicker form-control-position" data-availabilities="true" data-bind="value: getSetDepartureDate, attr: { 'id': getCalendarId(), 'date-max-unix': strMaxDate, 'date-min-unix': strMinDate, 'data-calendar-title': CalendarTitle }, css: { departure : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1), arrival : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1), 'disabled' : DisabledDate()}" />
			<!-- ko if: TTIModel.SearchCriteria.ServerConfig.DisplayOpen && (TTIModel.SearchCriteria.ServerConfig.AllowedTripsIndexForOpen.length==0 || TTIModel.SearchCriteria.ServerConfig.AllowedTripsIndexForOpen.indexOf($index())>=0) -->
			<div class="checkboxOpen checkbox-info">
				<input id="check4" type="checkbox" checked class="styled" data-bind="attr:{ 'id': getCheckBoxOpenId() }, css:{'checkgoOutbound' : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1), 'checkgoReturn' : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)},checked:IsOpen(),  click : SetIsOpen.bind($data, !IsOpen())" />
				<label for="check4" class="" data-bind="attr:{'for': getCheckBoxOpenId()}, css:{'checkgoOutbound checkBoxOutbound' : !($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1), 'checkgoReturn' : ($root.TripType() == TTIModel.SearchCriteria.Enums.TripType.RoundTrip && $index() == 1)}">Open</label>
			</div>

			<!-- /ko -->
		</div>
	</script>

	<script type="text/html" id="traveler-template">
		<div class=""
			data-bind="template: { name: getTravelerTemplate, if: TravelerCount() > 0 || $root.config.BookingProcessType == TTIModel.SearchCriteria.Enums.BookingProcessType.Book }">

		</div>
	</script>

	<script type="text/html" id="extendedSearchSettings-template">
		<div class="row margin-bottom-xs" style="display: none">
			<div class="btn-group" role="group" aria-label="...">
				<button type="button" class="btn btn-default" data-bind="click: getSetDaysCount(3), css : { active : DayCount() == 3 }">Flexible</button>
				<button type="button" class="btn btn-default" data-bind="click: getSetDaysCount(0), css : { active : DayCount() == 0 }">Fixed</button>
			</div>
		</div>

		<div class="row margin-bottom-xs" style="display: none">
			<div class="col-xs-6">
				<label class="">Extend search</label>
			</div>
			<div class="col-xs-6">
				<div class="width115-mx pull-right">
					<div class="input-group">
						<button class="form-control" id="ExtendedSearchDaysNumber" data-bind="click: getSetDaysCount.bind($data, 3)"></button>
						<button class="form-control" id="UnextendedSearchDaysNumber" data-bind="click: getSetDaysCount.bind($data, 0)"></button>
					</div>
				</div>
			</div>
		</div>
	</script>


	<!-----MODAL PASSAGERS----->


	<script type="text/html" id="defaultTraveler-template">
		<div class="col-md-12 col-sm-12 col-xs-12 no-padding">
			<div class="row">

				<div class="search-criterias-traveler-quantity">
					<div class="input-group">
						<div class="row">
							<div class="col-md-7 col-sm-7 col-xs-6">
								<h6 class="text-left"
									data-bind="text: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId()).Label"></h6>
								<div class="row">
									<div class="search-criterias-traveler-desc"
										data-bind="with: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId())">
										<!-- ko if: YearsMin > 0 -->
										<!-- ko if: YearsMax >= 80 || YearsMax <= 0 -->
										more than <span data-bind="text: YearsMin"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMax < 80 && YearsMax > 0 -->
										from <span data-bind="text: YearsMin"></span> to
										<span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- /ko -->
										<!-- ko if: YearsMin == 0 -->
										until <span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMin == null -->
										<span>&nbsp;</span>
										<!-- /ko -->
									</div>
								</div>
							</div>
							<div class="col-md-5 col-sm-5 col-xs-6">
								<div class="row passengerType">
									<div class="col-md-3 col-sm-4 col-xs-4">
										<span class="input-group-btn">
                                        <button class="btn btn-default btn-decrease" type="button" data-bind="click: Decrease" onclick="incrementValue()"><span class="glyphicon glyphicon-minus"></span></button>
										</span>
									</div>
									<div class="col-md-6 col-sm-4 col-xs-4">
										<input type="text" class="form-control passenger-number" data-bind="value: getSetTravelerCount" />
                                </div>
										<div class="col-md-3 col-sm-4 col-xs-4">
											<span class="input-group-btn">
                                        <button class="btn btn-default btn-increase" type="button" data-bind="click: Increase"><span class="glyphicon glyphicon-plus"></span></button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>
	</script>

	<script type="text/html" id="defaultTraveler-disabled-template">
		<div class="col-md-12 col-sm-12 col-xs-12 no-padding">
			<div class="row mb-10">
				<div class="search-criterias-traveler-quantity">
					<div class="input-group">
						<div class="row">
							<div class="col-md-7 col-sm-6 col-sm-push-2 col-xs-12">
								<h6 class="text-left"
									data-bind="text: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId()).Label"></h6>
								<div class="row">
									<div class="search-criterias-traveler-desc"
										data-bind="with: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId())">
										<!-- ko if: YearsMin > 0 -->
										<!-- ko if: YearsMax >= 80 || YearsMax <= 0 -->
										more than <span data-bind="text: YearsMin"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMax < 80 -->
										from <span data-bind="text: YearsMin"></span> to
										<span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- /ko -->
										<!-- ko if: YearsMin == 0 -->
										until <span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMin == null -->
										<span>&nbsp;</span>
										<!-- /ko -->
									</div>
								</div>
							</div>
							<div class="col-md-5 col-sm-3 col-xs-12">
								<div class="row passengerType">
									<div class="col-md-3 col-sm-4 col-xs-4">
										<span class="input-group-btn">
                                        <button class="btn btn-default btn-decrease" type="button" data-bind="click: Decrease, enable: false"><span class="glyphicon glyphicon-minus"></span></button>
										</span>
									</div>
									<div class="col-md-6 col-sm-4 col-xs-4">
										<input type="text" class="form-control passenger-number" id="passenger-number" data-bind="value: getSetTravelerCount, enable: false" />
                                </div>
										<div class="col-md-3 col-sm-4 col-xs-4">
											<span class="input-group-btn">
                                        <button class="btn btn-default btn-increase" type="button" data-bind="click: Increase, enable: false"><span class="glyphicon glyphicon-plus"></span></button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</script>

	<script type="text/html" id="addedTraveler-template">
		<div class="col-md-12 col-sm-12 col-xs-12 no-padding">
			<div class="row mb-10">
				<div class="col-xs-12 col-sm-12 col-xs-12 no-padding search-criterias-traveler-quantity">
					<div class="input-group">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-12">
								<h6 class="text-left"
									data-bind="text: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId()).Label"></h6>
								<div class="row">
									<div class="search-criterias-traveler-desc"
										data-bind="with: TTIModel.SearchCriteria.Helpers.getTravelerType(DataId())">
										<!-- ko if: YearsMin > 0 -->
										<!-- ko if: YearsMax >= 80 || YearsMax <= 0 -->
										more than <span data-bind="text: YearsMin"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMax < 80 -->
										from <span data-bind="text: YearsMin"></span> to
										<span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- /ko -->
										<!-- ko if: YearsMin == 0 -->
										until <span data-bind="text: YearsMax"></span> year(s) old
										<!-- /ko -->
										<!-- ko if: YearsMin == null -->
										<span>&nbsp;</span>
										<!-- /ko -->
									</div>
								</div>
							</div>
							<div class="col-md-6 col-sm-3 col-xs-12">
								<div class="row">
									<div class="input-group row">
										<div class="col-md-2 col-sm-2 col-xs-2 no-padding">
											<span class="input-group-btn">
                                            <button class="btn btn-default btn-warning" type="button" data-bind="click: Remove"><span class="glyphicon glyphicon-remove"></span></button>
											</span>
										</div>
										<div class="col-md-10 col-sm-10 col-xs-10 no-padding passengerType">
											<div class="col-md-3 col-sm-3 col-xs-3">
												<span class="input-group-btn">
                                                <button class="btn btn-default btn-decrease" type="button" data-bind="click: Decrease"><span class="glyphicon glyphicon-minus"></span></button>
												</span>
											</div>
											<div class="col-md-6 col-sm-3 col-xs-3">
												<input type="text" class="form-control passenger-number" id="" data-bind="value: TravelerCount" />
                                        </div>
												<div class="col-md-3 col-sm-3 col-xs-3">
													<span class="input-group-btn">
                                                <button class="btn btn-default btn-increase" type="button" data-bind="click: Increase"><span class="glyphicon glyphicon-plus"></span></button>
													</span>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>
	</script>

	<script type="text/html" id="addTraveler-template">
		<div class="col-md-12 col-sm-12 col-xs-12 no-padding">
			<div class="row mb-10">
				<div class="search-criterias-traveler-quantity passengerType">
					<div class="input-group row">
						<div class="col-md-12 col-sm-12 col-xs-11">
							<div class="search-criterias-add-traveler"
								data-bind="visible: Travelers().length < TTIModel.SearchCriteria.ServerConfig.TravelerTypes.Items.length">
								<div class="btn-group">
									<button type="button" class="btn dropdown-toggle btn-block" data-toggle="dropdown">
                                    <span class="glyphicon glyphicon-menu-down"></span><span data-bind="text: TTIModel.SearchCriteria.Helpers.getTravelerType(AddTraveler.DataId()).Label"></span>
                                </button>
									<ul class="dropdown-menu" role="menu" data-bind="foreach: AddTraveler.getTravelers()">
										<li>
											<a href="" data-bind="click: $root.AddTraveler.AddByDataId.bind($data, DataId)"
												class="addPassengerType"><span data-bind="text: Label"></span></a>
										</li>
									</ul>
								</div>
								<span class="input-group-btn"><button class="btn btn-primary addPassengerType" type="button" data-bind="click: AddTraveler.Add"><span class="glyphicon glyphicon-plus"></span></button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</script>

	<script type="text/html" id="currency-disabled-template">
		<div class="btn-group btn-block">
			<button type="button" class="btn btn-default  btn-block" disabled>
            <span data-bind="text: Currency().Label"></span>
        </button>
		</div>
	</script>

	<script type="text/html" id="currency-group-template">
		<div class="btn-group dropup btn-block" data-bind="visible : GetCurrencyGroups().length > 1">

			<button type="button" class="btn btn-default dropdown-toggle btn-block" data-toggle="dropdown">
            <span class="glyphicon glyphicon-menu-down"></span><span data-bind="text: getCurrencyGroupLabel(CurrencyGroup().GroupCode)"></span>
        </button>
			<ul class="dropdown-menu" role="menu" data-bind="foreach: GetCurrencyGroups()">
				<li><a href=""
						data-bind="text: $root.getCurrencyGroupLabel(GroupCode), click: $root.setCurrencyGroup.bind($data, $data)"></a>
				</li>
			</ul>
		</div>
	</script>

	<script type="text/html" id="currency-group2-template">
		<div class="btn-group btn-group-justified"
			data-bind="visible : GetCurrencyGroups().length > 1, foreach: GetCurrencyGroups()">
			<div class="btn-group">
				<button type="button" class="btn btn-default" data-bind="click: $root.setCurrencyGroup.bind($data, $data), css: { 'active': $root.CurrencyGroup().GroupCode == GroupCode }">
                <span data-bind="text: $root.getCurrencyGroupLabel(GroupCode)"></span>
            </button>
			</div>
		</div>
	</script>

	<script type="text/html" id="currency-template">
		<div data-bind="visible : getCurrencies().length > 1">
			<div class="search-criterias-currency dropup mb-10">
				<div class="input-group">
					<h6>Currency</h6>
					<button type="button" class="btn btn-default dropdown-toggle btn-block" data-toggle="dropdown" data-bind="attr: { 'data-currencyCode': Currency().Code }">
                    <span class=" glyphicon glyphicon-menu-down icon-devise"></span>
                    <span data-bind="text: Currency().Label"></span>
                </button>
					<ul class="dropdown-menu" role="menu" data-bind="foreach: getCurrencies()">
						<li><a href="" data-bind="text: Label, click: $root.Currency.bind($data, $data)"></a></li>
					</ul>
				</div>
			</div>
		</div>
	</script>

	<!-- begin: generic class filter -->
	<script type="text/html" id="genericClassFilter-template">
		<div class="margin-bottom-xs"
			data-bind="template: { name: getGenericClassFilterTemplate, if: GenericClasses().length > 0 }">
		</div>
	</script>

	<script type="text/html" id="selGenericClassFilter-template">
		<div class="btn-group dropup btn-block"
			data-bind="visible : GenericClasses().length > 1, css:{'disabled': $root.config.BookingProcessType != TTIModel.SearchCriteria.Enums.BookingProcessType.Book }">
			<button type="button" class="btn btn-default dropdown-toggle btn-block" data-toggle="dropdown">
            <span class="glyphicon glyphicon-menu-down"></span><span data-bind="text: getCurrentSelectedLabel()"></span>
        </button>
			<ul class="dropdown-menu" role="menu" data-bind="foreach: GenericClasses">

				<!-- ko if: DataId == -1 -->
				<li><a href=""
						data-bind="text: $parent.NothingSelected, click: $parent.SelectGenericClassFilter.bind($data, DataId)"></a>
				</li>
				<li role="presentation" class="divider"></li>
				<!-- /ko -->
				<!-- ko if: DataId > 0 -->
				<li><a href="" data-bind="text: Label, click: $parent.SelectGenericClassFilter.bind($data, DataId)"></a></li>
				<!-- /ko -->

			</ul>
		</div>
	</script>

	<script type="text/html" id="selGenericClassFilter2-template">
		<div class="btn-group btn-group-justified" data-bind="visible : GenericClasses().length > 1,foreach: GenericClasses">
			<div class="btn-group">
				<button type="button" class="btn btn-default" data-bind="click: $parent.SelectGenericClassFilter.bind($data, DataId), css: { 'active': $parent.DataId() == DataId }">
                <span data-bind="text: Label"></span>
            </button>
			</div>
		</div>
	</script>

	<!-- End: generic class filter -->
	<!---Btn Search---->
	<script type="text/html" id="submitSearch">
		<!-- ko if: TTIModel.SearchCriteria.ServerConfig.CurrencyGroup.Enabled ==true -->
	<div class="col-xs-12 search-criterias-currency-block margin-bottom-xs"
		data-bind="template: { name: getCurrencyGroupTemplate}"></div>
	<!-- /ko -->


	<div class="col-xs-12 search no-padding">
		<button class="btn btn-search btn-block search-criterias-submit" type="button" data-bind="click: Search, css : { 'btn-danger': !isValid().isValid, 'btn-warning': isValid().NoPassedDepartureDate }" autocomplete="off">

        </button>
	</div>
	<div class="col-xs-12 search-criterias-currency-block margin-bottom-xs">

	</div>
	</script>









	<script src="/Zenith/FrontOffice/airportsJavascript.ashx?idC=2035&c=en-GB-2035" type="text/javascript"></script>
	<script type="text/javascript" src="/Zenith/FrontOffice/Scripts/BookingEngine/SearchCriteria.JsModel.js?v=3.8.3">
	</script>
	<script type="text/javascript">
		$(document).ready(function() {
        TTIModel.SearchCriteria.ServerConfig = {"CurrencyGroup":{"CurrencyGroupList":[],"Enabled":false},"CurrencyGroupStrings":[],"DefaultCityPairId":null,"DepartureDaysToAdd":0,"ReturnDaysToAdd":0,"IsSellViaDcsAndPastDay":false,"AllowRoundTrip":true,"AllowMulticity":false,"MultiCityMaxOriginDestinations":2,"DisplayPromoCode":true,"DisplayPromoCodeFo":true,"DisplayTravelerCheckBookCode":false,"DisplayOpen":false,"AllowedTripsIndexForOpen":[],"AllowToBookOnClosedPrbd":false,"DisplayRealAvailability":false,"DisplayIncludeAddonFares":false,"CalendarDisplayType":0,"LocationDisplayType":1,"MaxTravelerCount":9,"TravelerTypes":{"DisplayItems":true,"MultiSelect":true,"DefaultSelectedIndexes":[],"Items":[{"Abr":"AD","IsLinked":false,"MaxCount":2147483647,"DefaultQuantity":1,"YearsMin":null,"YearsMax":null,"DataId":1,"Code":"AD","Label":"Adult(s)"},{"Abr":"CH","IsLinked":false,"MaxCount":2147483647,"DefaultQuantity":0,"YearsMin":2,"YearsMax":12,"DataId":2,"Code":"CHD","Label":"Child(ren)"},{"Abr":"INF","IsLinked":true,"MaxCount":2147483647,"DefaultQuantity":0,"YearsMin":0,"YearsMax":2,"DataId":3,"Code":"INF","Label":"Infant(s)"},{"Abr":"AD","IsLinked":false,"MaxCount":2147483647,"DefaultQuantity":null,"YearsMin":12,"YearsMax":null,"DataId":10,"Code":"ADMV","Label":"Maldivian National - Adult(s)"},{"Abr":"CH","IsLinked":false,"MaxCount":2147483647,"DefaultQuantity":0,"YearsMin":2,"YearsMax":12,"DataId":11,"Code":"CHMV","Label":"Maldivian National - Child(ren)"},{"Abr":"INF","IsLinked":true,"MaxCount":2147483647,"DefaultQuantity":null,"YearsMin":0,"YearsMax":2,"DataId":12,"Code":"INMV","Label":"Maldivian National - Infant(s)"}]},"PreferedTime":{"DisplayItems":false,"MultiSelect":false,"DefaultSelectedIndexes":[0],"Items":[{"StartTime":"00:00:00","EndTime":"00:00:00"},{"StartTime":"00:00:00","EndTime":"00:00:00"},{"StartTime":"00:00:00","EndTime":"00:00:00"}]},"ServiceClasses":{"DisplayItems":true,"MultiSelect":false,"DefaultSelectedIndexes":[0],"Items":[{"Description":null,"DataId":32,"Code":"C","Label":"Business class"},{"Description":null,"DataId":214,"Code":"P","Label":"Premium Economy Class"},{"Description":null,"DataId":26,"Code":"Y","Label":"Economy class"}]},"FareBasisList":{"DisplayItems":false,"MultiSelect":false,"DefaultSelectedIndexes":[],"Items":[]},"GenericClasses":{"DisplayItems":true,"MultiSelect":true,"DefaultSelectedIndexes":[0],"Items":[{"DataId":12,"Code":null,"Label":"Business Flex"},{"DataId":13,"Code":null,"Label":"Economy Light"},{"DataId":15,"Code":null,"Label":"Economy Saver"},{"DataId":17,"Code":null,"Label":"Economy Flex"},{"DataId":18,"Code":null,"Label":"Economy Value"}]},"GenericClassesFilter":[],"Currencies":{"DisplayItems":true,"MultiSelect":false,"DefaultSelectedIndexes":[12],"Items":[{"BaseCurrencyRate":0.32226600,"Symbol":"฿","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":163,"Code":"THB","Label":"Baht"},{"BaseCurrencyRate":0.00835300,"Symbol":"€","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":2,"Code":"EUR","Label":"Euro"},{"BaseCurrencyRate":0.76056900,"Symbol":"₹","SubDivision":0,"CommissionSubDivision":0,"TaxSubDivision":0,"DataId":87,"Code":"INR","Label":"Indian Rupee"},{"BaseCurrencyRate":0.04199200,"Symbol":"R","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":126,"Code":"MYR","Label":"Malaysian Ringgit"},{"BaseCurrencyRate":0.14141300,"Symbol":"ރ.","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":122,"Code":"MVR","Label":"Maldivian Rufiyaa"},{"BaseCurrencyRate":1.22006500,"Symbol":"रु","SubDivision":0,"CommissionSubDivision":0,"TaxSubDivision":0,"DataId":132,"Code":"NPR","Label":"Nepalese Rupee"},{"BaseCurrencyRate":0.00722100,"Symbol":"£","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":4,"Code":"GBP","Label":"Pound Sterling"},{"BaseCurrencyRate":0.03346000,"Symbol":"ر.ق.‏","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":142,"Code":"QAR","Label":"Qatari Rial"},{"BaseCurrencyRate":0.00352600,"Symbol":"ر.ع.‏","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":134,"Code":"OMR","Label":"Rial Omani"},{"BaseCurrencyRate":0.03444600,"Symbol":"ر.س.‏","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":147,"Code":"SAR","Label":"Saudi Riyal"},{"BaseCurrencyRate":0.01237700,"Symbol":"$","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":152,"Code":"SGD","Label":"Singapore Dollar"},{"BaseCurrencyRate":3.13080100,"Symbol":"රු.","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":105,"Code":"LKR","Label":"Sri Lanka Rupee"},{"BaseCurrencyRate":1.00000000,"Symbol":"৳","SubDivision":0,"CommissionSubDivision":0,"TaxSubDivision":0,"DataId":29,"Code":"BDT","Label":"Taka"},{"BaseCurrencyRate":0.03374400,"Symbol":"د.إ.‏","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":17,"Code":"AED","Label":"UAE Dirham"},{"BaseCurrencyRate":0.00918800,"Symbol":"$","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":3,"Code":"USD","Label":"US Dollar"},{"BaseCurrencyRate":0.06620000,"Symbol":"￥","SubDivision":2,"CommissionSubDivision":2,"TaxSubDivision":2,"DataId":51,"Code":"CNY","Label":"Yuan Renminbi"}]},"CityPairs":[{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2941.12,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":333,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2941.12,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":332,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5839.22,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":331,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5839.22,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":330,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5833.13,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":329,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5833.13,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":328,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4880.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":327,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4880.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":326,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3368.08,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":325,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3368.08,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":324,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3149.21,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":323,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3149.21,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":322,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":198.44,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":321,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":198.44,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":320,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":195.87,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":319,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":195.87,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":318,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"SHJ","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5527.04,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":317,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":11639},{"CodeDepartureAirport":"SHJ","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5527.04,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":316,"DataIdDepartureAirport":11639,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"SHJ","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3659.19,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":315,"DataIdDepartureAirport":11639,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"SHJ","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3659.19,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":314,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":11639},{"CodeDepartureAirport":"SHJ","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3709.41,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":313,"DataIdDepartureAirport":11639,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"SHJ","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3704.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":312,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":11639},{"CodeDepartureAirport":"SHJ","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3532.5,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":311,"DataIdDepartureAirport":11639,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"SHJ","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3527.0,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1.\tVaccine Certificate with QR Code / Covid test within 48 hrs. (No need below 10 Years). 2.\tFor re-entry visa holders need an approval of GDRFA to enter in UAE and an approval of ICA for others state. 3.\tOn arrival PCR test for all."}],"DataId":310,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":11639},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2691.19,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":309,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2691.19,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":308,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3310.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":307,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3310.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":306,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3038.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":305,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3038.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":304,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2700.82,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":303,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2700.82,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":302,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2899.31,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":301,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2899.31,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":300,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2816.7,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":299,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2807.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":298,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2605.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":297,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2605.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":296,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3133.29,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":295,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3133.29,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":294,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4762.7,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":293,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4762.7,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":292,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3387.75,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":291,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3387.75,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":290,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":370.45,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":283,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":370.45,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":282,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5529.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":281,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5529.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":280,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3559.07,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":279,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3559.07,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":278,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3340.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":277,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3340.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":276,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3752.26,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":275,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3752.26,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":274,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3346.64,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":273,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3346.64,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":272,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3429.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":271,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3429.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":270,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3667.27,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":269,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3667.27,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":268,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3716.6,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":267,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3720.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":266,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":389.32,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":265,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":389.32,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":264,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":215.28,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":263,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":215.28,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":262,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":483.94,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":261,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":483.94,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":260,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":96.86,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":257,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":96.86,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":256,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"MLE","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2831.78,"ApisTypes":null,"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1) Require to show 02 dose of COVID19 Vaccination Certificate. 2) In case NOT Vaccinated, require to show COVID19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":253,"DataIdDepartureAirport":9567,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"MLE","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2830.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1.\tHealth Declaration through IMUGA for All. 2.\tPCR result is not mandatory from any passenger during arrival. This applies to unvaccinated travelers as well 3.\tarriving tourists and Maldivians (residing in the Maldives) to the Maldives, other travelers are advised to do a PCR test between the 3rd and 5th day of arrival"}],"DataId":252,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":9567},{"CodeDepartureAirport":"DXB","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3540.1,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":245,"DataIdDepartureAirport":6942,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"DXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3543.0,"ApisTypes":[10],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Vaccine Certificate / Covid test within 48 hrs. (No need below 10 Years). 2) For re-entry visa holders need an approval of GDRFA to enter in UAE and an approval of ICA for others state. 3) On arrival PCR test for all."}],"DataId":244,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6942},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":434.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":241,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":434.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":240,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":387.2,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":239,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":387.2,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":238,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1189.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":237,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1189.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":236,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2602.03,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":235,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2907.24,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":232,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2907.24,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":231,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2572.7,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":226,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2572.7,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":225,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2602.03,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":224,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1462.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":221,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1462.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":220,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3651.59,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":219,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3651.59,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":218,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2189.06,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":211,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2189.06,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":210,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1594.3,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":209,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1614.0,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Vaccine Certificate / Covid test within 72 hrs. (No need below 05 Years)."}],"DataId":208,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"MAA","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1590.96,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":207,"DataIdDepartureAirport":9310,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"MAA","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1604.0,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":206,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":9310},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1813.58,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":205,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1813.58,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":204,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":350.05,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":203,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":350.05,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":202,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1612.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":201,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1612.49,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":200,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1433.02,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":199,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1433.02,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":198,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1703.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":195,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1703.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":194,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2637.79,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":193,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2637.79,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":192,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2541.21,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":191,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2541.21,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":190,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2555.06,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":189,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2555.06,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":188,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2197.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":187,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2197.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":186,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2346.08,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":185,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2346.08,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":184,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2492.45,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":183,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2492.45,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":182,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2519.3,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":181,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2519.3,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":180,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2460.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":179,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2460.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":178,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2200.36,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":177,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2207.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":176,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2179.33,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":175,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2179.33,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":174,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5549.15,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":173,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5549.15,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":172,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1590.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":171,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1590.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":170,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3039.64,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":169,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3039.64,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":168,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3247.22,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":167,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3247.22,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":166,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3164.96,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":165,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3164.96,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":164,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3055.1,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":163,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3055.1,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":162,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2904.37,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":161,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2904.37,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":160,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2585.1,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":159,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2585.1,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":158,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2789.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":157,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2789.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":156,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5258.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":153,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5258.11,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":152,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2294.14,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":151,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2294.14,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":150,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":6199.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":149,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":6199.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":148,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5891.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":147,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5891.63,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":146,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3720.79,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":145,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3720.79,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":144,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3717.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":143,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3717.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":142,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3807.54,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":141,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3807.54,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":140,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3937.05,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":139,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3937.05,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":138,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":6204.2,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":137,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":6204.2,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":136,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4130.75,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":135,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4130.75,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":134,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4042.19,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":133,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4042.19,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":132,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3746.34,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":131,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3746.34,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":130,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5473.62,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":127,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5473.62,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":126,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5164.88,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":125,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":5164.88,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":124,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4094.65,"ApisTypes":[5],"CharterType":0,"DisplayMessageType":7,"Messages":[],"DataId":123,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4097.0,"ApisTypes":[5],"CharterType":0,"DisplayMessageType":7,"Messages":[],"DataId":122,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1539.73,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":121,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1539.73,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":120,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4539.01,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":119,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":4539.01,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":118,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2899.33,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":117,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2899.33,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":116,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2928.52,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":115,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2928.52,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":114,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"SIN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2662.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":113,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2670.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":112,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1319.48,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":111,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1339.0,"ApisTypes":[4],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":110,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2758.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":109,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2758.83,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":108,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2598.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":107,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2598.85,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":106,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3056.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":105,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3056.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":104,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2872.59,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":103,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2872.59,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":102,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2494.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":101,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2494.81,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":100,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2646.29,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":97,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2646.29,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":96,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2408.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":95,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2381.43,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":94,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2607.31,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":93,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2607.31,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":92,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3120.3,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":91,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3120.3,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":90,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3053.88,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":89,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3053.88,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":88,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":350.07,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":87,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":349.0,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1.\tVaccine Certificate / Covid test within 72 hrs. (No need below 05 Years). 2. A smartphone with “Aarogyo setu” App."}],"DataId":86,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3434.5,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":85,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3434.5,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":84,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3373.1,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":83,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3373.1,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":4,"Messages":[{"ID_Language":2,"Message":"Important Note: COVID-19 PCR Test is mandatory within 72 Hours before the flight Departure (Time starts from Sample collection time). Baggage Allowance for Economy Class: One Piece for 20Kg, Two Pieces for 40Kg. Business Class: Two Pieces for 50Kg."}],"DataId":82,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3403.77,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":79,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3435.0,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"1.\tTravel date should be after 14 days of vaccinated/2nd Dose. (Arriving passengers aged 18 and less are exempted from the requirements of the vaccine). 2.\tNon-vaccinated passenger are not allowed to enter in Muscat. 3.\tNOC or New E-Visa required if outside of OMAN more than 180 Days. 4.Health insurance covering the cost of covid treatment at least one month. (Except Omani National)"}],"DataId":78,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"SIN","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2889.67,"ApisTypes":[7,13],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":77,"DataIdDepartureAirport":11692,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"SIN","Level":10,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2888.0,"ApisTypes":[7,13],"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":76,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":11692},{"CodeDepartureAirport":"MCT","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3235.98,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":75,"DataIdDepartureAirport":9376,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"MCT","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3268.0,"ApisTypes":[2],"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"1.\tTravel date should be after 14 days of vaccinated/2nd Dose. (Arriving passengers aged 18 and less are exempted from the requirements of the vaccine). 2.\tNon-vaccinated passenger are not allowed to enter in Muscat. 3.\tNOC or New E-Visa required if outside of OMAN more than 180 Days. 4.Health insurance covering the cost of covid treatment at least one month. (Except Omani National)"}],"DataId":74,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":9376},{"CodeDepartureAirport":"CAN","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2332.3,"ApisTypes":[6],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":73,"DataIdDepartureAirport":6207,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"CAN","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2335.0,"ApisTypes":[6],"CharterType":0,"DisplayMessageType":7,"Messages":[],"DataId":72,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6207},{"CodeDepartureAirport":"DOH","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3917.01,"ApisTypes":[5],"CharterType":0,"DisplayMessageType":7,"Messages":[],"DataId":71,"DataIdDepartureAirport":6865,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"DOH","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":3919.0,"ApisTypes":[5],"CharterType":0,"DisplayMessageType":7,"Messages":[],"DataId":70,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6865},{"CodeDepartureAirport":"CCU","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":235.79,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":69,"DataIdDepartureAirport":6261,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"CCU","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":239.0,"ApisTypes":[3],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Vaccine Certificate / Covid test within 72 hrs. (No need below 05 Years)."}],"DataId":68,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6261},{"CodeDepartureAirport":"BKK","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1541.0,"ApisTypes":[14],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1) Require to show 02 dose of COVID19 Vaccination Certificate. 2) In case NOT Vaccinated, require to show COVID19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":67,"DataIdDepartureAirport":5866,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"BKK","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":1566.0,"ApisTypes":[4,14],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1.Fully vaccinated passengers are not required ‘Negative’RT-PCR. 2.Non vaccinated passengers are required ‘Negative’  RT-PCR test within 72 hours of flight departure. 3.Child below 5 years do not need vaccine certification or RT-PCR test. 4.Child above 5 years to below 18 years do not need vaccine certificate or RT-PCR Test if parents are fully vaccinated. 5.If parents are not vaccinated, then Child above 5 years to below 18 years need RT-PCR test negative result within 72 hours before flight departure. 6.Port health will randomly check arrival flights for Covid19 and Monkeypox providing health beware card."}],"DataId":66,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":5866},{"CodeDepartureAirport":"KUL","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2598.26,"ApisTypes":[15],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."}],"DataId":65,"DataIdDepartureAirport":8820,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"KUL","Level":1,"IsMandatoryIdentityDocument":true,"IsMandatoryBirthDate":true,"IsNationalityMandatory":true,"IsDomestic":false,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":2633.0,"ApisTypes":[15],"CharterType":0,"DisplayMessageType":7,"Messages":[{"ID_Language":2,"Message":"1) All valid Visa holder can enter Malaysia 2) “MytravelPass” approval is not required for Valid Document holders. 3) Full Vaccinated passenger do not require quarantine (Below 17year old passenger do not required Vaccination) 4) Partially Vaccinated or nonvaccinated passenger required quarantine for 5 days. 5) Fully vaccinated and child below 12 year do not required RT­PCR test to travel"}],"DataId":64,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":8820},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":297.53,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":53,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":297.53,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":52,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":324.45,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":51,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":324.45,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":50,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":337.23,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":49,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":337.23,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":48,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":290.09,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":47,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":290.09,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":46,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":152.62,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":45,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":152.62,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":44,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":344.44,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":43,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":344.44,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":42,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":291.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":41,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":290.27,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":40,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":580.18,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":39,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":580.18,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":38,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":346.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":37,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":346.55,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":36,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":497.37,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":35,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":488.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":34,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":413.78,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":33,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":407.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":32,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":379.9,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":31,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":379.9,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":30,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":133.34,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":29,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":133.34,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":28,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":167.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":27,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":157.95,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":26,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":301.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":25,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":298.42,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":24,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":92.12,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":23,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6337},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":90.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":22,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":152.35,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":21,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":152.35,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":20,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"BZL","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":125.936,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":19,"DataIdDepartureAirport":6182,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"BZL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":116.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":18,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6182},{"CodeDepartureAirport":"RJH","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":207.424,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":17,"DataIdDepartureAirport":11336,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"RJH","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":193.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[],"DataId":16,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":11336},{"CodeDepartureAirport":"SPD","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":281.504,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":13,"DataIdDepartureAirport":11880,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"SPD","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":260.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":12,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":11880},{"CodeDepartureAirport":"CXB","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":318.544,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 1-7 JUL'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":11,"DataIdDepartureAirport":6658,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"CXB","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":310.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 1-7 JUL'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":10,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6658},{"CodeDepartureAirport":"ZYL","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":207.424,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":9,"DataIdDepartureAirport":13458,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"ZYL","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":194.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":8,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":13458},{"CodeDepartureAirport":"JSR","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":148.16,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":7,"DataIdDepartureAirport":8403,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"JSR","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":146.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":6,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":8403},{"CodeDepartureAirport":"CGP","CodeArrivalAirport":"DAC","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":228.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":5,"DataIdDepartureAirport":6337,"DataIdArrivalAirport":6707},{"CodeDepartureAirport":"DAC","CodeArrivalAirport":"CGP","Level":1,"IsMandatoryIdentityDocument":false,"IsMandatoryBirthDate":false,"IsNationalityMandatory":false,"IsDomestic":true,"APISRequiredDepartureAirport":0,"APISRequiredArrivalAirport":0,"DistanceKm":228.0,"ApisTypes":null,"CharterType":0,"DisplayMessageType":0,"Messages":[{"ID_Language":2,"Message":"ALL DOMESTIC FLIGHTS DURING 23JUL-10AUG'21 ONLY FOR INTERNATIONAL TRANSIT PASSENGERS AND SUBJECT TO INT TICKET/BOARDING PASS ONLY."}],"DataId":4,"DataIdDepartureAirport":6707,"DataIdArrivalAirport":6337}],"CityPairMessages":[{"OriginAirportCode":"SHJ","DestinationAirportCode":"CGP","Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"SHJ","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"SHJ","Message":"1.\tVaccine Certificate with QR Code / Covid test within 48 hrs. (No need below 10 Years). 2.\tFor re-entry visa holders need an approval of GDRFA to enter in UAE and an approval of ICA for others state. 3.\tOn arrival PCR test for all."},{"OriginAirportCode":"MLE","DestinationAirportCode":"DAC","Message":"1) Require to show 02 dose of COVID19 Vaccination Certificate. 2) In case NOT Vaccinated, require to show COVID19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"MLE","Message":"1.\tHealth Declaration through IMUGA for All. 2.\tPCR result is not mandatory from any passenger during arrival. This applies to unvaccinated travelers as well 3.\tarriving tourists and Maldivians (residing in the Maldives) to the Maldives, other travelers are advised to do a PCR test between the 3rd and 5th day of arrival"},{"OriginAirportCode":"DXB","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"DXB","Message":"Important Note: 1) Vaccine Certificate / Covid test within 48 hrs. (No need below 10 Years). 2) For re-entry visa holders need an approval of GDRFA to enter in UAE and an approval of ICA for others state. 3) On arrival PCR test for all."},{"OriginAirportCode":"MAA","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"MAA","Message":"Vaccine Certificate / Covid test within 72 hrs. (No need below 05 Years)."},{"OriginAirportCode":"MAA","DestinationAirportCode":"CGP","Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"CGP","DestinationAirportCode":"CCU","Message":"1.\tVaccine Certificate / Covid test within 72 hrs. (No need below 05 Years). 2. A smartphone with “Aarogyo setu” App."},{"OriginAirportCode":"MCT","DestinationAirportCode":"CGP","Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"MCT","DestinationAirportCode":"DAC","Message":"Important Note: Require to show 02 dose of COVID-­19 Vaccination Certificate. In case NOT Vaccinated, require to show COVID­-19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"CAN","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"CCU","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"CCU","Message":"Vaccine Certificate / Covid test within 72 hrs. (No need below 05 Years)."},{"OriginAirportCode":"BKK","DestinationAirportCode":"DAC","Message":"1) Require to show 02 dose of COVID19 Vaccination Certificate. 2) In case NOT Vaccinated, require to show COVID19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"BKK","Message":"1.Fully vaccinated passengers are not required ‘Negative’RT-PCR. 2.Non vaccinated passengers are required ‘Negative’  RT-PCR test within 72 hours of flight departure. 3.Child below 5 years do not need vaccine certification or RT-PCR test. 4.Child above 5 years to below 18 years do not need vaccine certificate or RT-PCR Test if parents are fully vaccinated. 5.If parents are not vaccinated, then Child above 5 years to below 18 years need RT-PCR test negative result within 72 hours before flight departure. 6.Port health will randomly check arrival flights for Covid19 and Monkeypox providing health beware card."},{"OriginAirportCode":"KUL","DestinationAirportCode":"DAC","Message":"Important Note: 1) Require to show 02 dose of COVID­19 Vaccination Certificate.  2) In case NOT Vaccinated, require to show COVID­19 PCR Negative Result within 72 Hours before the flight Departure."},{"OriginAirportCode":"DAC","DestinationAirportCode":"KUL","Message":"1) All valid Visa holder can enter Malaysia 2) “MytravelPass” approval is not required for Valid Document holders. 3) Full Vaccinated passenger do not require quarantine (Below 17year old passenger do not required Vaccination) 4) Partially Vaccinated or nonvaccinated passenger required quarantine for 5 days. 5) Fully vaccinated and child below 12 year do not required RT­PCR test to travel"}],"Airports":{"BKK":{"GeoPoint":{"Latitude":13.75,"Longitude":100.51666666666665},"CurrencyCodeIATA":"USD","ISOLanguage":null,"CurrencyCodeCountry":"THB","ISOCountry":"TH","DaylightOffsetMinutes":0,"GMTOffsetMinutes":420,"Position":-1,"DataId":5866,"Code":"BKK","Label":"Bangkok"},"BZL":{"GeoPoint":{"Latitude":22.666666666666686,"Longitude":90.3416666666667},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":6182,"Code":"BZL","Label":"Barishal"},"CAN":{"GeoPoint":{"Latitude":23.183333333333337,"Longitude":113.26666666666665},"CurrencyCodeIATA":"CNY","ISOLanguage":"zh-CN","CurrencyCodeCountry":"CNY","ISOCountry":"CN","DaylightOffsetMinutes":0,"GMTOffsetMinutes":480,"Position":-1,"DataId":6207,"Code":"CAN","Label":"Guangzhou"},"CCU":{"GeoPoint":{"Latitude":22.633333333333326,"Longitude":88.4333333333334},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-IN","CurrencyCodeCountry":"INR","ISOCountry":"IN","DaylightOffsetMinutes":0,"GMTOffsetMinutes":330,"Position":-1,"DataId":6261,"Code":"CCU","Label":"Kolkata"},"CGP":{"GeoPoint":{"Latitude":22.266666666666652,"Longitude":91.8166666666666},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":6337,"Code":"CGP","Label":"Chattogram"},"CXB":{"GeoPoint":{"Latitude":21.449999999999989,"Longitude":91.9666666666667},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":6658,"Code":"CXB","Label":"Cox's Bazar"},"DAC":{"GeoPoint":{"Latitude":23.766666666666652,"Longitude":90.383333333333326},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":6707,"Code":"DAC","Label":"Dhaka"},"DOH":{"GeoPoint":null,"CurrencyCodeIATA":"QAR","ISOLanguage":"ar-QA","CurrencyCodeCountry":"QAR","ISOCountry":"QA","DaylightOffsetMinutes":0,"GMTOffsetMinutes":180,"Position":-1,"DataId":6865,"Code":"DOH","Label":"Doha"},"DXB":{"GeoPoint":{"Latitude":25.25,"Longitude":55.333333333333371},"CurrencyCodeIATA":"AED","ISOLanguage":"ar-AE","CurrencyCodeCountry":"AED","ISOCountry":"AE","DaylightOffsetMinutes":0,"GMTOffsetMinutes":240,"Position":-1,"DataId":6942,"Code":"DXB","Label":"Dubai Intl"},"JSR":{"GeoPoint":{"Latitude":23.183333333333337,"Longitude":89.166666666666742},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":8403,"Code":"JSR","Label":"Jashore"},"KUL":{"GeoPoint":{"Latitude":3.1166666666666742,"Longitude":101.70000000000005},"CurrencyCodeIATA":"USD","ISOLanguage":"en-my","CurrencyCodeCountry":"MYR","ISOCountry":"MY","DaylightOffsetMinutes":0,"GMTOffsetMinutes":480,"Position":-1,"DataId":8820,"Code":"KUL","Label":"Kuala Lumpur"},"MAA":{"GeoPoint":{"Latitude":13.083333333333314,"Longitude":80.2833333333333},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-IN","CurrencyCodeCountry":"INR","ISOCountry":"IN","DaylightOffsetMinutes":0,"GMTOffsetMinutes":330,"Position":-1,"DataId":9310,"Code":"MAA","Label":"Chennai"},"MCT":{"GeoPoint":null,"CurrencyCodeIATA":"OMR","ISOLanguage":"ar-OM","CurrencyCodeCountry":"OMR","ISOCountry":"OM","DaylightOffsetMinutes":0,"GMTOffsetMinutes":240,"Position":-1,"DataId":9376,"Code":"MCT","Label":"Muscat"},"MLE":{"GeoPoint":{"Latitude":4.1999999999999886,"Longitude":73.483333333333348},"CurrencyCodeIATA":"USD","ISOLanguage":null,"CurrencyCodeCountry":"MVR","ISOCountry":"MV","DaylightOffsetMinutes":0,"GMTOffsetMinutes":300,"Position":-1,"DataId":9567,"Code":"MLE","Label":"Male Velana Intl"},"RJH":{"GeoPoint":{"Latitude":24.416666666666686,"Longitude":88.508333333333326},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":11336,"Code":"RJH","Label":"Rajshahi"},"SHJ":{"GeoPoint":null,"CurrencyCodeIATA":"AED","ISOLanguage":"ar-AE","CurrencyCodeCountry":"AED","ISOCountry":"AE","DaylightOffsetMinutes":0,"GMTOffsetMinutes":240,"Position":-1,"DataId":11639,"Code":"SHJ","Label":"Sharjah"},"SIN":{"GeoPoint":null,"CurrencyCodeIATA":"USD","ISOLanguage":"bn-SG","CurrencyCodeCountry":"SGD","ISOCountry":"SG","DaylightOffsetMinutes":0,"GMTOffsetMinutes":480,"Position":-1,"DataId":11692,"Code":"SIN","Label":"Singapore"},"SPD":{"GeoPoint":{"Latitude":25.766666666666652,"Longitude":88.766666666666652},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":11880,"Code":"SPD","Label":"Saidpur"},"ZYL":{"GeoPoint":{"Latitude":24.949999999999989,"Longitude":91.866666666666674},"CurrencyCodeIATA":"USD","ISOLanguage":"bn-BD","CurrencyCodeCountry":"BDT","ISOCountry":"BD","DaylightOffsetMinutes":0,"GMTOffsetMinutes":360,"Position":-1,"DataId":13458,"Code":"ZYL","Label":"Sylhet"}},"Countries":[{"RequiredAPIS":0,"ISOCountryAlpha3":"BGD","Position":-2147483648,"DataId":21,"Code":"BD","Label":"Bangladesh"},{"RequiredAPIS":0,"ISOCountryAlpha3":"CHN","Position":-2147483648,"DataId":42,"Code":"CN","Label":"China"},{"RequiredAPIS":0,"ISOCountryAlpha3":"IND","Position":-2147483648,"DataId":94,"Code":"IN","Label":"India"},{"RequiredAPIS":0,"ISOCountryAlpha3":"MYS","Position":-2147483648,"DataId":116,"Code":"MY","Label":"Malaysia"},{"RequiredAPIS":0,"ISOCountryAlpha3":"MDV","Position":-2147483648,"DataId":118,"Code":"MV","Label":"Maldives"},{"RequiredAPIS":0,"ISOCountryAlpha3":"OMN","Position":-2147483648,"DataId":139,"Code":"OM","Label":"Oman"},{"RequiredAPIS":0,"ISOCountryAlpha3":"QAT","Position":-2147483648,"DataId":23434,"Code":"QA","Label":"Qatar"},{"RequiredAPIS":0,"ISOCountryAlpha3":"SGP","Position":-2147483648,"DataId":169,"Code":"SG","Label":"Singapore"},{"RequiredAPIS":0,"ISOCountryAlpha3":"THA","Position":-2147483648,"DataId":186,"Code":"TH","Label":"Thailand"},{"RequiredAPIS":0,"ISOCountryAlpha3":"ARE","Position":-2147483648,"DataId":23411,"Code":"AE","Label":"United Arab Emirates"}],"OriginDestinations":[{"Origin":"BKK","Destinations":["CAN","CCU","CGP","DAC","DOH","DXB","JSR","KUL","MAA","MCT","MLE","SIN","SPD","ZYL"]},{"Origin":"BZL","Destinations":["CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MCT","SIN","SPD","ZYL"]},{"Origin":"CAN","Destinations":["BKK","BZL","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MAA","MCT","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"CCU","Destinations":["BKK","BZL","CAN","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MCT","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"CGP","Destinations":["BKK","BZL","CAN","CCU","CXB","DAC","DOH","DXB","JSR","KUL","MAA","MCT","MLE","RJH","SHJ","SIN","SPD","ZYL"]},{"Origin":"CXB","Destinations":["BZL","CAN","CCU","CGP","DAC","DOH","DXB","JSR","KUL","MCT","RJH","SIN","SPD","ZYL"]},{"Origin":"DAC","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DOH","DXB","JSR","KUL","MAA","MCT","MLE","RJH","SHJ","SIN","SPD","ZYL"]},{"Origin":"DOH","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","JSR","KUL","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"DXB","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","JSR","KUL","MAA","MCT","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"JSR","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","KUL","MAA","MCT","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"KUL","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","MAA","MCT","MLE","RJH","SHJ","SPD","ZYL"]},{"Origin":"MAA","Destinations":["BKK","CAN","CGP","DAC","DXB","JSR","KUL","MCT","SIN"]},{"Origin":"MCT","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DXB","JSR","KUL","MAA","MLE","RJH","SIN","SPD","ZYL"]},{"Origin":"MLE","Destinations":["BKK","CAN","CCU","CGP","DAC","DOH","DXB","JSR","KUL","MCT","SIN","SPD"]},{"Origin":"RJH","Destinations":["CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MCT","SIN","SPD","ZYL"]},{"Origin":"SHJ","Destinations":["CGP","DAC","KUL","ZYL"]},{"Origin":"SIN","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","MAA","MCT","MLE","RJH","SPD","ZYL"]},{"Origin":"SPD","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MCT","MLE","RJH","SIN","ZYL"]},{"Origin":"ZYL","Destinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MCT","RJH","SHJ","SIN","SPD"]}],"CityPairsDestinations":["BKK","BZL","CAN","CCU","CGP","CXB","DAC","DOH","DXB","JSR","KUL","MAA","MCT","MLE","RJH","SHJ","SIN","SPD","ZYL"],"Visibilities":[{"Key":0,"Value":"Public fares"},{"Key":3,"Value":"Private fares"},{"Key":4,"Value":"All fares"}],"ExtendedSearchDayCountMax":3,"CHAllowed":false,"INFAllowed":false,"IsSearchRewardVisible":false,"FOTemplateType":null,"ScheduledFlights":[],"DisplayCharter":false,"HasCharterLeg":false,"IsSearchFlightDisabled":false,"ZietSearchTypes":[0],"CanAddLegAutomatically":false,"AutoShowInboundCalendarFO":false,"AutoShowInboundAirportFO":true,"TravelDateFlexibleUncheckedByDefaultFO":false,"IsWebCheckinActivated":false,"AddReturnFlightAfterFirstBookingOnFO":false,"CanSelectClassOfService":false,"CanExchangeOWToRT":false,"DisableOuboundFlightOnExchangeOWToRT":false,"MandatoryCurrencyForNationalityOnFO":null,"NFOElementsToDisplayStraightAway":0,"IndicateCharterFlightsOnlyOnAvailabilitiesCalendar":false,"EchoToken":null,"ReceivedDateGMT":"2023-08-18T15:56:50.4831852","ProcessingTimeMs":31.247700000000002,"Warnings":[]};
        TTIModel.SearchCriteria.ServerModel = {"IsIframe":false,"BookingProcessType":0,"BookingPathArguments":null,"OriginDestinations":[{"IsOpen":false,"DataIdOrigin":6707,"DataIdDestination":6182,"DateTime":"2023-08-19T00:00:00","DisabledDate":false,"DisabledLeg":false,"SelectedDay":null,"IsUpgrade":false,"FlightNumbers":[]}],"TravelerTypes":[{"DataId":1,"TravelerCount":1},{"DataId":2,"TravelerCount":1},{"DataId":3,"TravelerCount":1}],"PromoCode":null,"Currency":{"Code":"USD"},"GenericClass":{"DataId":0},"GenericClassesFilter":[],"DisplayRealAvailability":false,"DisplayClosedPrbds":false,"TripType":0,"Visibility":0,"FareBasisDataId":null,"CabinClassDataId":null,"ExtendedSearchDayCount":3,"IsFFPRewardSearch":false,"IsTCSearch":false,"TCBookCode":null,"IsSSROnExchangedTicket":false,"IsAncillaryToExchange":false,"HasSeatingOnExchangedCoupons":false,"ZietSearchType":0,"CustomerAccountInfo":null,"UpgradeType":null,"SearchType":null,"HasRewardTicketToUpgrade":false,"SearchUpgradeOnOtherFlight":false,"IsAddingReturnFlight":false,"OriginalTripsCountForExchange":null,"VendorDateNow":"2023-08-18T21:56:50.4675561"};
        TTIModel.SearchCriteria.Strings = {"DateDepartureTitle":"Departure","DateReturnTitle":"Return","NoPassedDepartureDateTitle":"Date","NoPassedDepartureDateText":"You can\u0027t search for a past flight","RequireAtLeastOnePassengerTitle":"Passenger","RequireAtLeastOnePassengerText":"You must select at least one passenger","ExceedMaxPassengerCountTitle":"Passenger","ExceedMaxPassengerCountText":"You can\u0027t select more than {0} passengers","FareSelectionLabel":"Select a fare","CHAllowedFailed":"Children must be accompanied by an adult","INFAllowedFailed":"There can\u0027t be more infants than adults","INForCHDAllowedFailedTitle":"Invalid traveler selection","AirportsByCountryMdlTitleDeparture":"Departure airport","AirportsByCountryMdlTitleArrival":"Arrival airport","NoValidTripTitle":"No valid trip","NoValidTripText":"Please select a valid trip","SelectAnAirport":"Select","Adulte":"Adult(s)","NothingSelected":"Nothing","SalesClosed":"Sales closed","ExceedMaxPassengerPageLink":"","CalDepartureDate":"Departure date","CalReturnDate":"Return date","RequireACurrencyTitle":"Currency","RequireACurrencyText":"Please select a currency"};
        TTIModel.SearchCriteria.mode = "";
        TTIModel.SearchCriteria.Url = {
            SearchFlightsAction: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/BookingEngine/SearchFlights?__cnv=uaao7",
            GetAvailabilitySummary: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/BookingEngine/GetAvailabilitySummary",
            IndexRemoveIframe: "/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB/BookingEngine/IndexRemoveIframe",
        }
        TTIModel.SearchCriteria.Helpers.initHelpers(TTIModel.SearchCriteria.ServerConfig);

        var viewModel = new TTIModel.SearchCriteria.Model();
        viewModel.init(TTIModel.SearchCriteria.ServerModel);

        if ($("#SearchCriteria").length > 0) {
            ko.applyBindings(viewModel, $("#SearchCriteria")[0]);
        }

        if (!TTIModel.SearchCriteria.ServerConfig.TravelDateFlexibleUncheckedByDefaultFO || TTIModel.SearchCriteria.ServerModel.ExtendedSearchDayCount > 0) {
            $('#ExtendedSearchDaysNumber').click();
            $("#switchExtendedSearch").prop("checked", "checked");
        }
        else {
            $('#UnextendedSearchDaysNumber').click();
            $('#SearchCriteria').addClass('unflexible');
        }

        $("*[data-toggle='popover']").popover();


        updatePassengerCount(0);
        $(".passenger").on("click",".btn-increase",function () {
            updatePassengerCount(1);
        });

        $(".passenger").on("click",".btn-decrease",function () {
            var currentVal=$(".passenger-number", $(this).parents(".passengerType")).val();
            if (currentVal > 0) {
                currentVal = -1;
            } else {
                currentVal = 0;
            }
            updatePassengerCount(currentVal);

        });
        $(".passenger").on("click", ".addPassengerType", function() {
            updatePassengerCount(1);
        });




        // Date picker
        $("html").click(function(event) {
            if ($(".visible-xs:visible").length) {
                if (!$(event.target).hasClass("picker-open") && !$(event.target).hasClass("date-picker-hider")) {
                    $(".picker-open").hide();
                    $(".picker-open").removeClass("picker-open");
                }
            }
        });

        $("#DepartureModal01").click(function(){
            $("#DepartureModal0").toggle();
        });

        $("#ArrivalModal01").click(function () {
            $("#ArrivalModal0").toggle();
        });

        /* Check if FO is opened on mobile or on desktop*/
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(details);

        if (isMobileDevice) {
            $("#ArrivalModal0").find(".modal-content").css("margin-top", "14em");
        }

        $(".filterAirport").keydown(function(e) {

            switch (e.which)
            {
                case 13: // enter
                    var modalDialog = $(this).parents(".modal-dialog");
                    var item=$(".airport-select .airport-list.selected a", modalDialog);
                    item.click();
                    break;
                case 38: // up
                    navigateDDLAirport($(this),false);
                    break;
                case 40: // down
                    navigateDDLAirport($(this),true);
                    break;

                default:
                    return; // exit this handler for other keys
            }
            //e.preventDefault();
        });

        function navigateDDLAirport($this,isDown) {
            var modalDialog = $this.parents(".modal-dialog");
            var parent=$(".airport-select .airports-list", modalDialog);
            var item = $(".airport-list.selected", parent);
            if (isDown) {
                item = item.next();
            } else {
                item = item.prev();
            }

            if (item.length == 0) {
                item = $(".airport-list:first",parent);
            }

            $(".airport-list",parent).removeClass("selected");
            item.addClass("selected");

            var modalScroll = modalDialog.parents(".false-modal");
            modalScroll.scrollTop(0);
            modalScroll.scrollTop(item.offset().top-modalScroll.height());



        }

    });

    function currencyAdvise() {

        var message = "";
        var currency = $(".search-criterias-currency button[data-currencyCode]").attr('data-currencyCode');
        if (currency != null) {
            switch(currency.toUpperCase()) {
                case "EUR":
                    message = "Several methods of payment are available online. You can pay by credit card (Visa, Mastercard) and by mobile money, MVola and Orange Money in Ariary currency. You can book and buy your ticket online or finalize it in our points of sale within the purchase deadline. Simply write down your Passenger name record (6 alphanumeric characters).You can view and manage your booking online (if the fare conditions allow), as well as update your contact information as many times as necessary to stay informed of any changes to your flight(s).Contact our call centre for assistance.";
                    break;
                case "MGA":
                    message = "Several methods of payment are available online. You can pay by credit card (Visa, Mastercard) and by mobile money, MVola and Orange Money in Ariary currency. You can book and buy your ticket online or finalize it in our points of sale within the purchase deadline. Simply write down your Passenger name record (6 alphanumeric characters).You can view and manage your booking online (if the fare conditions allow), as well as update your contact information as many times as necessary to stay informed of any changes to your flight(s).Contact our call centre for assistance.";
                    break;
            }
            $("#modalCurrencyMessage .modal-body").html(message);
        }

        $('#modalCurrencyMessage').modal('show');
    }

    function updatePassengerCount(passengerCount) {
        setTimeout(updatePassengerCountImpl, 10)
    }

    function updatePassengerCountImpl() {
        var passengerCount = 0;
        //var $parent = $(button).parents('.passenger');
        $(".passenger .passenger-number").each(function() {
            passengerCount += parseInt($(this).val());
        });

        var passengerCountMessage;
        if(passengerCount==0) {
            passengerCountMessage='Select passenger(s)';
        }
        else {
            passengerCountMessage=passengerCount+' Passenger(s)';
        }
        $('#resume-passenger').val(passengerCountMessage);
    }







	</script>




	<script type="text/javascript">
		$(document).ready(function() {
                            });

	</script>




	<script type="text/javascript">
		setTimeout(function() { $("#expiredSession").modal('show'); }, 1000 * 60 * 29);

            $(document).on('hide.bs.modal', '#expiredSession', function(){
                window.location.href = '/Zenith/FrontOffice/(S(6f7f647c8a47489d843b14406309ff60))/usbangla/en-GB';
            });
	</script>

	<script type="text/javascript">
		window.dataLayer = window.dataLayer || [];
    $("#languages").change(function() {
        var url = $('#languages :selected').val();
        window.location.replace(url);
    });
	</script>

</body>

</html>`










const regex = /\/Zenith\/FrontOffice\/\(S\([^]{32}\)\)\/usbangla\/en-GB\/FlexibleFlightStaticAjax\/FlexibleFLightListLoadSelectionResume\?__cnv=[^]{5}/;


console.log (testString.match(regex).map(match => match.slice(1)))

console.log ('85e55a978c994627a5b185920f8070bc'.length)


