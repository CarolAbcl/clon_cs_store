describe('Deberia ir atras y mostrar el producto seleccionado', () => {
  before(() => {
    cy.visit('http://localhost:3000/catalogo')
  })
  it('deberia hacer scroll seleccionar un producto, volver atras y posicionarse en el producto seleccionado', () => {
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.get(':nth-child(26) > .generalInfoProduct > .ProductCardInfo > .ProductName > a:nth-child(1)').each(
      (element, index) => {
        if (index === 0) {
          const tittleProduct = element[0].innerText
          element[0].click()
          cy.wait(8000)
          cy.go('back')
          cy.get(':nth-child(26) > .generalInfoProduct > .ProductCardInfo > .ProductName > a:nth-child(1)').should(
            'be.visible',
            'tittleProduct'
          )
        }
      }
    )
  })
})
