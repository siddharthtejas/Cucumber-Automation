$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/verifydeletebyautomation.feature");
formatter.feature({
  "name": "Verify the delete functionality",
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
  "name": "Select the checkbox",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on delete button",
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
        ""
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123",
        ""
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
  "name": "Select the checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.select_the_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_delete_button()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Success: You have modified affiliates!]\u003e but was:\u003c[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepdefinition.logintest.click_on_delete_button(logintest.java:108)\r\n\tat ✽.Click on delete button(file:src/test/java/feature/verifydeletebyautomation.feature:13)\r\n",
  "status": "failed"
});
});