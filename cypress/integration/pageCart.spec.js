describe('Pàgina carrito cuando està vacio ', () => {
  before(() => {
    cy.visit('http://localhost:3000/carrito')
  })
  it('si no existe productos agregados al carrito deberia mostrar carrito vacio', () => {
    cy.get('a.jsx-1631026639 > .material-icons > span.jsx-3167726488').should('not.exist')
    cy.get('.containerEmptyCart').should('be.visible')
  })
})
describe('Pàgina carrito cuando tiene productos ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })
  it('se agrega dos veces el mismo producto debe aparecer en el carrito', () => {
    cy.get(
      ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(5) > div.jsx-69787f2591a0f36 > :nth-child(3)'
    ).dblclick({ force: true })
    cy.get('a.jsx-3167726488').click({ force: true })
    cy.get('.QtyAddCart > div.jsx-69787f2591a0f36 > #quantity').should('be.visible', '2')
  })
  it('se agrega dos productos distintos, deben aparecer por separado en carrito', () => {
    cy.get(
      ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(5) > div.jsx-69787f2591a0f36 > :nth-child(3)'
    ).click({ force: true })
    cy.get(
      ':nth-child(2) > .generalInfoProduct > .ProductCardInfo > :nth-child(5) > div.jsx-69787f2591a0f36 > :nth-child(3)'
    ).click({ force: true })

    cy.get('a.jsx-3167726488').click({ force: true })
    cy.get('.containerCardDesktop').children().should('be.visible', 2)
  })
})
