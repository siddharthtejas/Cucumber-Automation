package testrunner;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)

@CucumberOptions(
        features = "src/test/java/feature/verifydeletebyautomation.feature",
        glue ={"stepdefinition"},
        monochrome=true,
        dryRun= false,
        plugin={"pretty","html:reports/htmlreport","json:reports/jsonreport.json","junit:reports/xmlreport.xml"}
        )


public class runner {

}
