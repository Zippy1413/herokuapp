import LoginPage from "../PageObject/LoginPage"


describe("internet herokuapp", function () {
   it("Login with valid credentials", function () {
      // create LoginPage object login
      const login = new LoginPage();
      // call navigate() function 
      login.navigate();
      // pass Username to enterUsername()
      login.enterUsername().type('tomsmith');
      // pass Password to enterPassword()
      login.enterPassword().type('SuperSecretPassword!');
      // call submit() function 
      login.submit().click();
   })
})