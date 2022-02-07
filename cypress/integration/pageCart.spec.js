describe('Pàgina carrito ', () => {
  before(() => {
    cy.visit('http://localhost:3000/carrito')
  })
})
it('deberia mostrar el carrito de compras', () => {
  cy.get('[data-test-id="icon-card"]').should('be.visible')
})
