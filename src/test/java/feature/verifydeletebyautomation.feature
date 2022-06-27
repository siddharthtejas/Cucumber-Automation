Feature: Verify the delete functionality

  Background: Background Section
    Given User on the login page

  Scenario Outline: Login with valid credentials
    Given User enetrs valid Username "<username>" and Password "<password>"
    And Clicks on Login
    And Click on Menu icon
    Then Click on Marketing icon
    And Click on Affiliates
    Then Select the checkbox
    And Click on delete button

    Examples: 
      | username | password  |  |
      | admin    | Admin@123 |  |
