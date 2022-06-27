$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/filteraffiliateautomation.feature");
formatter.feature({
  "name": "Verify the affiliate filter page",
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
  "name": "Enter Affiliate Name \"\u003caffiliatename\u003e\" and Email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on filter",
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
        "email"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123",
        "0 Man",
        "lagcdehgh@gmail.com"
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
  "name": "Enter Affiliate Name \"0 Man\" and Email \"lagcdehgh@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "logintest.enter_Affiliate_Name_and_Email(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on filter",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/invalidlogintestautomation.feature");
formatter.feature({
  "name": "Verify the login page with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestTest"
    }
  ]
});
formatter.step({
  "name": "User enetrs valid Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks on Login",
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
        "password"
      ]
    },
    {
      "cells": [
        "abcd",
        "xyz"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestTest"
    }
  ]
});
formatter.step({
  "name": "User enetrs valid Username \"abcd\" and Password \"xyz\"",
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
formatter.uri("file:src/test/java/feature/validlogintestautomation.feature");
formatter.feature({
  "name": "Verify the login page with valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestTest"
    }
  ]
});
formatter.step({
  "name": "User enetrs valid Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks on Login",
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
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestTest"
    }
  ]
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
formatter.uri("file:src/test/java/feature/verifydeletebyautomation.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027form-affiliate\u0027]/div/table/tbody/tr[2]/td[1]/input\"}\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IBM-BH082F3\u0027, ip: \u0027192.168.65.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\003P5F~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58325}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56f09883ceebbbe384d2a36c9589f2f2\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027form-affiliate\u0027]/div/table/tbody/tr[2]/td[1]/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinition.logintest.select_the_checkbox(logintest.java:93)\r\n\tat ✽.Select the checkbox(file:src/test/java/feature/verifydeletebyautomation.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.click_on_delete_button()"
});
formatter.result({
  "status": "skipped"
});
});