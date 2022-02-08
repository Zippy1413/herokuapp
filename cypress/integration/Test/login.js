import LoginPage from "../PageObject/LoginPage"


describe("internet herokuapp", function () {
   // create LoginPage object login
   const login = new LoginPage();
   before(function () {
      cy.fixture('credentials').then(function (testdata) {
          this.testdata = testdata
          
      })
  })
  it("Login with valid credentials & Logout", function () {
   // call navigate() function 
   login.navigate();
   // pass Username to enterUsername()
   login.enterUsername().type(this.testdata.username)
   // pass Password to enterPassword()
   login.enterPassword().type(this.testdata.password)
   // call submit() function 
   login.submit().click();

   cy.url().should('be.equal', this.testdata.adminUrl)
   // call logout() function 
   login.Logout().click();
   cy.wait(500)
})
  it("Login with invalid credentials", function () {
   // call navigate() function 
   login.navigate();
   // pass Username to enterUsername()
   login.enterUsername().type('toms');
   // pass Password to enterPassword()
   login.enterPassword().type('SuperSecret');
   // call submit() function 
   login.submit().click();
   cy.get('.flash').should('contain', 'Your username is invalid!')

})
it("Login with invalid Username", function () {
   // call navigate() function 
   login.navigate();
   // pass Username to enterUsername()
   login.enterUsername().type('toms');
   // pass Password to enterPassword()
   login.enterPassword().type('SuperSecretPassword!');
   // call submit() function 
   login.submit().click();
   cy.get('.flash').should('contain', 'Your username is invalid!')
})
it("Login with invalid Password", function () {
   // call navigate() function 
   login.navigate();
   // pass Username to enterUsername()
   login.enterUsername().type('tomsmith');
   // pass Password to enterPassword()
   login.enterPassword().type('SuperSecret');
   // call submit() function 
   login.submit().click();
   cy.get('.flash').should('contain', 'Your password is invalid!')
})
})