describe('Prueba de filtros', function () {
  it('se marcan los filtros', () => {
    cy.visit('http://localhost:3000/catalogo')
    cy.wait(2000)
    cy.get('.check_container input').check({ force: true })

    cy.get('.check_container input').should('be.checked')
  })
  it('se desmarcan los filtros', () => {
    cy.get('.check_container input').uncheck({ force: true })
    cy.get('.check_container input').should('not.to.be.checked')
  })
})

describe('test filters on mobile viewport', () => {
  it('check all filters', () => {
    cy.viewport('iphone-6')
    cy.wait(1000)
    cy.get('.header-catalogo .filter-button').click({ multiple: true, force: true })
    cy.get('.filters.mobile .filters label').each((e) => {
      e.click()
    })
    cy.get('.filters.mobile .filters label input').should('be.checked')
  })
  it('uncheck all filters', () => {
    cy.viewport('iphone-6')
    cy.get('.check_container input').uncheck({ force: true })
    cy.get('.filters.mobile .filters label input').should('not.be.checked')
  })
  it('clear filters', () => {
    cy.viewport('iphone-6')
    cy.get('.check_container input').check({ force: true })
    cy.get('.action-buttons:nth-child(2) button:nth-child(2)').click({ force: true, multiple: true })
    cy.get('.filters.mobile .filters label input').should('not.be.checked')
  })
})
