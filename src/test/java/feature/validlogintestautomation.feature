Feature: Verify the login page with valid credentials

  Background: Background Section
    Given User on the login page

@TestTest
  Scenario Outline: Login with valid credentials
    Given User enetrs valid Username "<username>" and Password "<password>"
    And Clicks on Login
    #And Click on Menu icon
    #Then Click on Marketing icon
    #And Click on Affiliates
   

    Examples: 
      | username | password  |
      | admin    | Admin@123 |
      
   #Scenario Outline: Login with invalid credentials
   # Given User enetrs invalid Username "<username>" and Password "<password>"
    #And Clicks on Login

    #Examples: 
     # | username | password  |
      #| abcd     | xyz       |
 
    