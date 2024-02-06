
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project2.controller.View2", {
        onInit: function () {
            // Initialize the model
            var oModel = new JSONModel({
                countries: [
                    { key: "US", text: "United States" },
                    { key: "DE", text: "Germany" },
                    { key: "IN", text: "India" }
                    // Add more countries as needed
                ],
                selectedCountry: "US" // Default selected country
            });

            // Set the model to the view
            // const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onClicking: function () {
            console.log("I am getting clicked");
        }
    });
});
