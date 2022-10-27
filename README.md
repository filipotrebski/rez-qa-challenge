# rez-qa-challenge

To run project run command:
` npm run cy `

As a QA Engineer we are expected to write automation for features completed by the development team. It is our task to automate both stories One and Two, ensuring we have the proper test coverage before releasing this product. 

QA Directives:
  *	Use Cypress.io at the latest version
    *	https://www.cypress.io/
  *	Use CSS to select elements (no XPATH)
  *	Each story should have their own test suite
  *	Automated tests should be committed to a public repo
    *	The branch name should be your <firstname>-<lastname>-challenge. 
    *	You can use either, your personal account, or create a ‘burner’ account for this commit.
    *	Anyone accessing your branch should have sufficient documentation to run both suites. 
    *	Do not include the node_modules in your commit.
  *	Visual Studio Code is the preferred IDE and can be downloaded for free
    *	https://code.visualstudio.com/Download
    *	You are free to commit any IDE settings you think are relevant to other engineers running your tests
    
---

Story One:

As a user I want the ability to save properties I’m looking at so they can be reviewed at a later time.

Acceptance Criteria:
  *	Each property on the [hub](https://www.rezfusionhubdemo.com/hub-test-vacation-rentals) should have an easy Favorite on/off button indicating that this property has been saved.
  *	The hub should have an indicator on the number of properties selected as saved.
    *	This indicator should show the total count of saved properties.
    *	When the indicator is clicked the hub should only display saved properties.
    *	I can un-save a property from the filtered view.
  *	When a property is selected; there should be an indicator showing the property has been saved.
    *	This indicator can be toggled on or off from the property detail’s view
    *	This change (saved/un-saved) should reflect correctly on the total saved count on the main hub

Story Artifacts:

Main Hub is at https://www.rezfusionhubdemo.com/hub-test-vacation-rentals
      
---

Story Two:

As a user I want the ability to filter properties based on the number of bedrooms and bathrooms.

Acceptance Criteria:
  *	The Filters selection should allow the user to select the number of either bedrooms and/or bathrooms.
    *	The selection should limit the value to an integer with a lower value of 0 (zero). 
  *	The Clear Filters button should reset both filters to their lower value.
  *	The View Results button should close the Filter Results page and display properties on the [hub](https://www.rezfusionhubdemo.com/hub-test-vacation-rentals) meeting the criteria.


Story Artifacts:

Main Hub is at https://www.rezfusionhubdemo.com/hub-test-vacation-rentals

