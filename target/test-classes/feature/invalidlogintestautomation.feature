Feature: Verify the login page with invalid credentials

  Background: Background Section
    Given User on the login page

  @TestTest
  Scenario Outline: Login with valid credentials
    Given User enetrs valid Username "<username>" and Password "<password>"
    And Clicks on Login

    Examples: 
      | username | password |
      | abcd     | xyz      |
