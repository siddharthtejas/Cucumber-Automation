$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/addaffiliateautomation.feature");
formatter.feature({
  "name": "Verify the Add affiliate page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enetrs valid Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Menu icon",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Marketing icon",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Affiliates",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Add New",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter First Name \"\u003cfirstname\u003e\", Last Name \"\u003clastname\u003e\", E-Mail \"\u003cemail\u003e\", Telephone \"\u003ctelephone\u003e\", Tracking Code \"\u003ctrackingcode\u003e\", Password \"\u003cpassword\u003e\", Confirm \"\u003cconfirm\u003e\", Address 1 \"\u003caddressone\u003e\", City \"\u003ccity\u003e\", Country \"\u003ccountry\u003e\" and State \"\u003cstate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Payment details",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the Cheque Payee Name \"\u003cchequepayeename\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Save",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "affiliatename",
        "firstname",
        "lastname",
        "email",
        "telephone",
        "trackingcode",
        "password",
        "confirm",
        "addressone",
        "city",
        "country",
        "state",
        "chequepayeename"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123",
        "Mr code Man",
        "Neeraj",
        "Chopra",
        "rohit@gmail.com",
        "6789373",
        "62b9873eb00bf",
        "123456",
        "123456",
        "Abcd Place India",
        "Delhi",
        "Inida",
        "Delhi",
        "Mr coder"
      ]
    }
  ]
});
formatter.background({
  "name": "Background Section",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "logintest.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enetrs valid Username \"admin\" and Password \"Admin@123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "logintest.user_enetrs_valid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Menu icon",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Marketing icon",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.click_on_Marketing_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Affiliates",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_Affiliates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add New",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.click_on_Add_New()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter First Name \"Neeraj\", Last Name \"Chopra\", E-Mail \"rohit@gmail.com\", Telephone \"6789373\", Tracking Code \"62b9873eb00bf\", Password \"Admin@123\", Confirm \"123456\", Address 1 \"Abcd Place India\", City \"Delhi\", Country \"Inida\" and State \"Delhi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.enter_First_Name_Last_Name_E_Mail_Telephone_Tracking_Code_Password_Confirm_Address_City_Country_and_State(String,String,String,String,String,String,String,Integer,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Payment details",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.click_on_Payment_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Cheque Payee Name \"Mr coder\"",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.enter_the_Cheque_Payee_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Save",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_Save()"
});
formatter.result({
  "status": "passed"
});
});