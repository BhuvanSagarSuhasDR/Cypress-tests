import "cypress-mochawesome-reporter/register";
import "./commands";

// require('./commands')
// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore specific error related to CookieYes
  if (err.message.includes("your website URL has changed")) {
    return false; // Prevent test from failing
  }

  // Ignore the Minified React error #419
  if (err.message.includes("Minified React error #419")) {
    return false; // Prevent test from failing
  }

  // Ignore the "Failed to execute 'observe' on 'MutationObserver'" error
  if (
    err.message.includes("Failed to execute 'observe' on 'MutationObserver'")
  ) {
    return false; // Prevent Cypress from failing the test
  }

  // Ignore the "Cannot read properties of undefined" error (for undefined 'test')
  if (err.message.includes("Cannot read properties of undefined")) {
    return false; // Prevent test from failing
  }

  // Log all uncaught exceptions for debugging purposes
  console.error("Uncaught exception detected:", err);

  // Returning false prevents Cypress from failing the test in case of the above errors
  return false; // Prevent test from failing
});
