describe('Debe ir a catalogo', () => {
  before(() => {
    cy.visit('http://localhost:3000/catalogo')
  })

  it('deberia mostrar el carrito de compras', () => {
    cy.get('[data-test-id="icon-card"]').should('be.visible')
  })

  it('deberia aparecer la cantidad de producto en carrito al apretar boton +', () => {
    cy.get(
      '.ProductCard:first-child .containerInfoProduct div button:nth-of-type(2)'
    ).click({ force: true })

    cy.get('[data-test-id="total-items-card"]').should('be.visible', '1')
  })

  it('deberia aparecer la cantidad de producto en carrito al ingresar cantidad al input y disminuir al apretar el boton, si es 0 deberia desaparecer el contenedor', () => {
    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct div #quantity'
    ).type('3', { force: true })

    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct div #quantity'
    ).should('be.visible', '3')

    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct > div:nth-child(2) button:nth-of-type(1)'
    ).click({ force: true })
    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct > div:nth-child(2) button:nth-of-type(1)'
    ).click({ force: true })
    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct > div:nth-child(2) button:nth-of-type(1)'
    ).click({ force: true })

    cy.get(
      '.ProductCard:nth-child(2) .containerInfoProduct div #quantity'
    ).should('be.visible', '0')
  })

  it('al eliminar la cantidad del input debería retornar 0', () => {
    cy.get('#quantity').clear({ force: true })
    cy.get('#quantity').should('be.visible', '0')
  })
})
