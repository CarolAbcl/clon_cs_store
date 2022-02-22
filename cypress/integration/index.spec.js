describe('Pàgina carrito cuando està vacio ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('si el botón en hero contiene el texto "Ingresa al catálogo" y lleva a este', () => {
    cy.get('.hero button')
      .contains('Ingresa al catálogo')
      .click({ force: true })
      .then((e) => {
        cy.contains('CATÁLOGO').should('exist')
      })
  })
  it('si el botón en la sección "te invitamos" contiene el texto "ver productos" y lleva al catálogo', () => {
    cy.get('.te-invitamos button')
      .contains('ver productos')
      .click({ force: true })
      .then(() => {
        cy.contains('CATÁLOGO').should('exist')
      })
  })
  it('si el botón whatsapp existe', () => {
    cy.get('.consulta .whatsapp-btn').should('exist')
  })
})
