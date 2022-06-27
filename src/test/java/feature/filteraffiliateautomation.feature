Feature: Verify the affiliate filter page

  Background: Background Section
    Given User on the login page

  
  Scenario Outline: Login with valid credentials
    Given User enetrs valid Username "<username>" and Password "<password>"
    And Clicks on Login
    And Click on Menu icon
    Then Click on Marketing icon
    And Click on Affiliates
    Then Enter Affiliate Name "<affiliatename>" and Email "<email>"
    And Click on filter

    Examples: 
      | username | password  | affiliatename | email               |
      | admin    | Admin@123 | 0 Man         | lagcdehgh@gmail.com |
