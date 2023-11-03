describe("users can not submit the login form with invalid credentials and is shown a message", () => {
  it("stops the form from being submitted when given a wrong email format and shows a message", () => {
    cy.visit("index.html").wait(8000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginEmail").type("test12345@gmail.no", { delay: 100 });
    cy.get("#loginPassword").type("abc12345", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.get("#loginForm > .modal-body").within(() => {
      cy.get("input:invalid").should("have.length", 1);
    });
  });
  it("stops the form from being submitted when given no email and shows a message", () => {
    cy.visit("index.html").wait(2000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginPassword").type("abc12345", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.get("#loginForm > .modal-body").within(() => {
      cy.get("input:invalid").should("have.length", 1);
    });
  });
  it("stops the form from being submitted when given no password and shows a message", () => {
    cy.visit("index.html").wait(2000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginEmail").type("test12345@noroff.no", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.get("#loginForm > .modal-body").within(() => {
      cy.get("input:invalid").should("have.length", 1);
    });
  });
});
