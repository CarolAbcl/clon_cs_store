describe('Debe ir a catalogo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })
  it('deberia mostrar el carrito de compras', () => {
    cy.get('.jsx-3178849743').should('be.visible')
  })
  it('deberia aparecer la cantidad de producto en carrito al apretar boton +', () => {
    cy.contains('+').click()
    cy.get('.jsx-2579785080').should('be.visible', '1')
  })
  it('deberia aparecer la cantidad de producto en carrito al ingresar cantidad al input y disminuir al apretar el boton, si es 0 deberia desaparecer el contenedor', () => {
    cy.get('#quantity').type('3')
    cy.get('.jsx-2579785080').should('be.visible', '3')
    cy.contains('-').click()
    cy.get('.jsx-2579785080').should('be.visible', '2')
    cy.contains('-').dblclick()
    cy.get('.jsx-2579785080').should('not.exist')
  })
  it('al eliminar la cantidad del input debería retornar 0', () => {
    cy.get('#quantity').clear()
    cy.get('#quantity').should('be.visible', '0')
  })
  it('deberia aumentar o disminuir la cantidad en el input al ingresar cantidad o cliquear botones + o -', () => {
    cy.get('#quantity').type('2')
    cy.get('#quantity').should('be.visible', '2')
    cy.contains('-').click()
    cy.get('#quantity').should('be.visible', '1')
    cy.contains('+').click()
    cy.get('#quantity').should('be.visible', '2')
    cy.contains('-').dblclick()
    cy.get('#quantity').should('be.visible', '0')
  })
})
