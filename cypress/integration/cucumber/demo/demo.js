import { Given } from "cypress-cucumber-preprocessor/steps";
 
const url = 'https://google.com'
Given('I open site', () => {
  cy.visit(url)
})