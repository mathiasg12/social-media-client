describe("test that users can log out with the log out button", () => {
  it("users can log in and then press the logout button to log out", () => {
    cy.visit("index.html").wait(1000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginEmail").type("test12345@noroff.no", { delay: 100 });
    cy.get("#loginPassword").type("abc12345", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.intercept(
      "https://nf-api.onrender.com/api/v1/social/profiles/JS2TEST2?&_followers=true&_posts=true&_following=true",
    ).as("apiResp");
    cy.wait("@apiResp");
    cy.window().its("localStorage.token").should("exist");
    cy.get(".btn-outline-warning").click();
    cy.wait(3000);
    cy.window().its("localStorage.token").should("not.exist");
    cy.get("#registerModal").should("be.visible");
  });
});
