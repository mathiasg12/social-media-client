describe("test that users can log in and visit their profile", () => {
  it("users can log in", () => {
    cy.visit("index.html").wait(3000);
    cy.get("#registerForm > .modal-footer > .btn-outline-success")
      .click()
      .wait(1500);
    cy.get("#loginEmail").type("test12345@noroff.no", { delay: 100 });
    cy.get("#loginPassword").type("abc12345", { delay: 100 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.intercept("/?view=profile&name=JS2TEST2").as("profilePage");
    cy.wait("@profilePage");
    cy.url().should("include", "/?view=profile&name=JS2TEST2", () => {
      expect(localStorage.getItem("token").to.exist());
    });
  });
});
