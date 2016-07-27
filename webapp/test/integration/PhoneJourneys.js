jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/scn/demo/test/integration/NavigationJourneyPhone",
		"com/scn/demo/test/integration/NotFoundJourneyPhone",
		"com/scn/demo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

