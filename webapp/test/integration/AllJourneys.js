jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSalesOrderLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/scn/demo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/scn/demo/test/integration/pages/App",
	"com/scn/demo/test/integration/pages/Browser",
	"com/scn/demo/test/integration/pages/Master",
	"com/scn/demo/test/integration/pages/Detail",
	"com/scn/demo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.scn.demo.view."
	});

	sap.ui.require([
		"com/scn/demo/test/integration/MasterJourney",
		"com/scn/demo/test/integration/NavigationJourney",
		"com/scn/demo/test/integration/NotFoundJourney",
		"com/scn/demo/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});
