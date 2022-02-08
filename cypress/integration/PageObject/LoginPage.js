class LoginPage {
    navigate() {
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    enterUsername() {
        return cy.get('#username')
    }

    enterPassword() {
        return cy.get('#password')

    }

    submit() {
        return cy.get('button[type="submit"]')
    }
    Logout(){
        return cy.get('.button')
    }
}
export default LoginPage