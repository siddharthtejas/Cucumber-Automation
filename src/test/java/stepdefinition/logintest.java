package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class logintest {
	
	WebDriver driver;
	
	@Given("User on the login page")
	public void user_on_the_login_page() throws InterruptedException {
		 System.setProperty("webdriver.chrome.driver",".//lib//chromedriver.exe");
			
			driver = new ChromeDriver();
			
			driver.get("http://retailm1.upskills.in/admin/index.php?route=common/login");
			Thread.sleep(2000);
			
	}

	@Given("User enetrs valid Username {string} and Password {string}")
	public void user_enetrs_valid_Username_and_Password(String string, String string2) {
	    
		driver.findElement(By.xpath("//*[@id='input-username']")).sendKeys(string);
		driver.findElement(By.xpath("//*[@id='input-password']")).sendKeys(string2);
		
	}

	@And("Clicks on Login")
	public void clicks_on_Login() throws InterruptedException {
	   
		driver.findElement(By.xpath("//*[@id='content']/div/div/div/div/div[2]/form/div[3]/button")).click();
		
	}
	
	@Given("Click on Menu icon")
	public void click_on_Menu_icon() throws InterruptedException {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//a[@id='button-menu']/i")).click();
		//driver.findElement(By.xpath("//a[@id='button-menu']/i")).click();
		
	}
	
	@Given("User enetrs invalid Username {string} and Password {string}")
	public void user_enetrs_invalid_Username_and_Password(String string, String string2) throws InterruptedException {
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id='input-username']")).sendKeys(string);
		driver.findElement(By.xpath("//*[@id='input-password']")).sendKeys(string2);
		
	}
	
	@Then("Click on Marketing icon")
	public void click_on_Marketing_icon() throws InterruptedException {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@id='menu-marketing']/a/span")).click();
	}
	
	@Then("Click on Affiliates")
	public void click_on_Affiliates() throws InterruptedException {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@id='menu-marketing']/ul/li[2]/a")).click();
		
	}
	

@Then("Enter Affiliate Name {string} and Email {string}")
public void enter_Affiliate_Name_and_Email(String string, String string2) throws InterruptedException {
      Thread.sleep(2000);
	  driver.findElement(By.xpath("//*[@id='input-name']")).sendKeys(string);
	  driver.findElement(By.xpath("//*[@id='input-email']")).sendKeys(string2);
	  
	//*[@id="input-name"]
	
}

@Then("Click on filter")
public void click_on_filter() {
    
	driver.findElement(By.xpath("//*[@id='button-filter']")).click();
}

@Then("Select the checkbox")
public void select_the_checkbox() throws InterruptedException {
	
    Thread.sleep(2000);
	driver.findElement(By.xpath("//*[@id='form-affiliate']/div/table/tbody/tr[2]/td[1]/input")).click();
}

@Then("Click on delete button")
public void click_on_delete_button() throws InterruptedException {

	Thread.sleep(2000);
	driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button")).click();
	Thread.sleep(1000);
	driver.switchTo().alert().accept();
	Thread.sleep(2000);
	
	/*
	 I Assert Code to verify the Deletion Success, If not 
	 deleted successfully then it will “org.junit.ComparisonFailure” exception.
	 */
	
	String ActualTitle = driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]/i")).getText();
	System.out.println(ActualTitle);
	String ExpectedTitle = "Success: You have modified affiliates!";
	Assert.assertEquals(ExpectedTitle, ActualTitle);		
}

@Then("Click on Add New")
public void click_on_Add_New() {
	driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/a/i")).click();
}

@Then("Enter First Name {string}, Last Name {string}, E-Mail {string}, Telephone {string}, Tracking Code {string}, Password {string}, Confirm {string}, Address {int} {string}, City {string}, Country {string} and State {string}")
public void enter_First_Name_Last_Name_E_Mail_Telephone_Tracking_Code_Password_Confirm_Address_City_Country_and_State(String string, String string2, String string3, String string4, String string5, String string6, String string7, Integer int1, String string8, String string9, String string10, String string11) throws InterruptedException {
	driver.findElement(By.xpath("//*[@id='input-firstname']")).sendKeys(string);
	driver.findElement(By.xpath("//*[@id='input-lastname']")).sendKeys(string2);
	driver.findElement(By.xpath("//*[@id='input-email']")).sendKeys(string3);
	driver.findElement(By.xpath("//*[@id='input-telephone']")).sendKeys(string4);
	driver.findElement(By.xpath("//*[@id='input-code']")).sendKeys(string5);
	driver.findElement(By.xpath("//*[@id='input-password']")).sendKeys("12345");
	driver.findElement(By.xpath("//*[@id='input-confirm']")).sendKeys("12345");
	driver.findElement(By.xpath("//*[@id='input-address-1']")).sendKeys(string8);
	driver.findElement(By.xpath("//*[@id='input-city']")).sendKeys(string9);
	
	Select dropcountry= new Select(driver.findElement(By.xpath("//*[@id='input-country']")));
	dropcountry.selectByVisibleText("India");
	Thread.sleep(1000);
	
	Select dropstate= new Select(driver.findElement(By.xpath("//*[@id='input-zone']")));
	dropstate.selectByVisibleText("Delhi");
	
	
	
	/*driver.findElement(By.xpath("//*[@id='input-city']")).sendKeys(string9);
	driver.findElement(By.xpath("//*[@id='input-city']")).sendKeys(string9);*/
	
}



@Then("Click on Payment details")
public void click_on_Payment_details() throws InterruptedException {
    
	
	driver.findElement(By.xpath("//*[@id='form-affiliate']/ul/li[2]/a")).click();
	Thread.sleep(1000);
	
}

@Then("Enter the Cheque Payee Name {string}")
public void enter_the_Cheque_Payee_Name(String string) {
	driver.findElement(By.xpath("//*[@id='input-cheque']")).sendKeys(string);
}

@Then("Click on Save")
public void click_on_Save() {
	driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button/i")).click();
}
}
