var TempSms = require("nativescript-temp-sms").TempSms;
var tempSms = new TempSms();

describe("greet function", function() {
    it("exists", function() {
        expect(tempSms.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(tempSms.greet()).toEqual("Hello, NS");
    });
});