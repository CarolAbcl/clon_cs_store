describe('Catalogo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })

  it('deberia permitir visitar catalogo', () => {
    cy.contains('CATÁLOGO')
  })

  it('deberia mostrar buscador', () => {
    cy.get('input[type="search"]').should('be.visible')
  })

  it('deberia mostrar menu hamburguesa', () => {
    cy.get('.burger_line').should('be.visible')
  })

  it('deberia mostrar logo ComeS', () => {
    cy.get('[alt="logo"]').should('be.visible')
  })

  it('deberia mostrar card button', () => {
    cy.get('[data-test-id="icon-card"]').should('be.visible')
  })

  it('deberia desplegar sidebar menu', () => {
    cy.get('.burger_line').click()
    cy.get('.content').should('be.visible')
    cy.get('.background').should('be.visible')
  })

  it('deberia aumentar la cantidad de producto', () => {
    cy.contains('+').click()
    cy.get('#quantity').should('have.value', '1')
  })

  it('deberia mostrar informacion de precios del producto', () => {
    cy.contains('info').click()
    cy.get('.containerDetailsProduct').should('be.visible')
  })
})
