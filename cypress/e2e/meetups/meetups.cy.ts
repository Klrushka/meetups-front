/// <reference types="cypress" />

describe('GET /login', () => {
  it('login', () => {
    cy.visit('http://localhost:3002/meetups-front/#/login')

    cy.get('input').should('have.value', '')
    cy.get('button').should('have.text', 'Log in')
    cy.get('a').should('have.text', 'Sign up')

    cy.get('[type="email"]')
      .type('japad41926@abudat.com')
      .should('have.value', 'japad41926@abudat.com')

    cy.get('[type="password"]')
      .type('admin')
      .should('have.value', 'admin')

    cy.get('[type="submit"]')
      .click()
      .url().should('include', 'meetups')
  })


  it('sign up button from login page', () => {
    cy.visit('http://localhost:3002/meetups-front/#/login')

    cy.get('a').click()
    cy.url().should('include', 'registration')
  })

  it('registration page', () => {
    const random = Date.now()

    cy.get('[name="name"]')
      .type('fake')
      .should('have.value', 'fake')

    cy.get('[name="surname"]')
      .type('abudat')
      .should('have.value', 'abudat')

    cy.get('[name="password"]')
      .type('password')
      .should('have.value', 'password')

    cy.get('[name="email"]')
      .type(`${random}@abudat.com`)
      .should('have.value', `${random}@abudat.com`)

    cy.get('[name="telephone"]')
      .type('+375296566381')
      .should('have.value', '+375296566381')

    cy.get('[type="submit"]')
      .click()
      .url().should('include', 'login')
  })



  it('sign up button from login page', () => {
    cy.visit('http://localhost:3002/meetups-front/#/registration')
    cy.get('a').click()
    cy.url().should('include', 'login')
  })


  it('meetups page', () => {

    cy.visit('http://localhost:3002/meetups-front/#/login')

    cy.get('input').should('have.value', '')
    cy.get('button').should('have.text', 'Log in')
    cy.get('a').should('have.text', 'Sign up')

    cy.get('[type="email"]')
      .type('japad41926@abudat.com')
      .should('have.value', 'japad41926@abudat.com')

    cy.get('[type="password"]')
      .type('admin')
      .should('have.value', 'admin')

    cy.get('[type="submit"]')
      .click()
      .url().should('include', 'meetups')


    cy.get('[name="searchInput"]')
      .type('123')
      .should('have.value', '123')


    cy.get('[name="newMeetup"]')
      .click()

    cy.get('[name="title"]')
      .type('1234')
      .should('have.value', '1234')

    cy.get('[name="descriptionInput"]')
      .type('1234')
      .should('have.value', '1234')

    cy.get('[name="tags"]')
      .type('12 34')
      .should('have.value', '12 34')

    cy.get('[name="location"]')
      .type('12 34')
      .should('have.value', '12 34')

    cy.get('[name="time"]')
      .type('2017-06-01T08:30')
      .should('have.value', '2017-06-01T08:30')

    cy.get('[type="submit"]')
      .click()
    
    cy.get('[href="#/csv"]')
      .click()
      .url()
      .should('include', 'csv')

      
    cy.get('[href="#/pdf"]')
    .click()
    .url()
    .should('include', 'pdf')

    cy.get('[id="pdfLink"]')
      .click()
    
  })
})