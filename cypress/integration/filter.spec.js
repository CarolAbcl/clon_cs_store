describe('Prueba de filtros', function () {
  it('se hace check a los filtros', () => {
    cy.visit('http://localhost:3000/catalogo')
    cy.get('.filters label').each((e) => {
      e.click()
    })
    cy.get('.filters label input').should('be.checked')
  })
  it('se descheckean los filtros', () => {
    cy.get('.filters label').each((e) => {
      e.click()
    })
    cy.get('.filters label input').should('not.to.be.checked')
  })
})

describe('test filters on mobile viewport', () => {
  it('click to all filters', () => {
    cy.viewport('iphone-6')
    cy.wait(1000)
    cy.get('.header-catalogo .filter-button').click({ multiple: true })
    cy.get('.filters.mobile .filters label').each((e) => {
      e.click()
    })
    cy.get('.filters.mobile .filters label input').should('be.checked')
  })
})
