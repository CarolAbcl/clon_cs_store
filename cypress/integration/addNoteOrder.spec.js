describe('Prueba agregando nota al pedido', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })

  it('se prueba funcionalidad de boton agregar nota al pedido', () => {
    cy.get('.ProductCard:nth-child(2) .containerInfoProduct div #quantity').type('30', { force: true })
    cy.get('[data-test-id="total-items-card"]').click({ force: true })
    cy.get('.containerTotalDesktop > :nth-child(2) > .textAddNoteOrder').type('se agrega nota al pedido', {
      force: true,
    })
    cy.get('.containerTotalDesktop > :nth-child(2) > .textAddNoteOrder').should(
      'be.visible',
      'se agrega nota al pedido'
    )
    cy.get('.containerTotalDesktop > :nth-child(2) > .btnsContainer > .btnClose > .material-icons').click({
      force: true,
    })
    cy.get('.containerTotalDesktop > :nth-child(2) > .textAddNoteOrder').should('not.exist')
    cy.get('.containerTotalDesktop > :nth-child(2) > .btnsContainer > .btnAddNoteOrder').click({ force: true })
    cy.get('.containerTotalDesktop > :nth-child(2) > .textAddNoteOrder').should('be.visible')
    cy.get('.containerTotalDesktop > :nth-child(2) > .btnsContainer > .btnAddNoteOrder').click({ force: true })
    cy.get('.containerTotalDesktop > :nth-child(2) > .textAddNoteOrder').should('not.exist')
  })
})
