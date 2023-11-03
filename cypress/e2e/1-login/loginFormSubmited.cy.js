describe("users is shown a message if they type the right format but wrong password or email", () => {
  it("gives the user an error message when submiting wrong email or password", () => {
    cy.visit("index.html").wait(8000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginEmail").type("test12345@noroff.no", { delay: 100 });
    cy.get("#loginPassword").type("notAPassword", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.intercept("https://nf-api.onrender.com/api/v1/social/auth/login").as(
      "apiRequest",
    );
    cy.wait("@apiRequest");
    cy.on("window:alert", (errorMessage) => {
      expect(errorMessage).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
