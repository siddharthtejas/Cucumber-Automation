Feature: Verify the Add affiliate page

  Background: Background Section
    Given User on the login page

  Scenario Outline: Login with valid credentials
    Given User enetrs valid Username "<username>" and Password "<password>"
    And Clicks on Login
    And Click on Menu icon
    Then Click on Marketing icon
    And Click on Affiliates
    Then Click on Add New
    Then Enter First Name "<firstname>", Last Name "<lastname>", E-Mail "<email>", Telephone "<telephone>", Tracking Code "<trackingcode>", Password "<password>", Confirm "<confirm>", Address 1 "<addressone>", City "<city>", Country "<country>" and State "<state>"
    Then Click on Payment details
    And Enter the Cheque Payee Name "<chequepayeename>"
    And Click on Save

    Examples: 
      | username | password  | affiliatename | firstname | lastname | email           | telephone | trackingcode  | password | confirm | addressone       | city  | country | state | chequepayeename |
      | admin    | Admin@123 | Mr code Man   | Neeraj    | Chopra   | rohit@gmail.com |   6789373 | 62b9873eb00bf |   123456 |  123456 | Abcd Place India | Delhi | Inida   | Delhi | Mr coder        |
