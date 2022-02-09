describe('Prueba de página descripción de producto', function () {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })

  it('se ingresa a una carta y se espera que contenga la información del producto', () => {
    cy.get('.ProductCardInfo').each((element, index) => {
      if (index === 0) {
        const h2 = element[0].children[0].children[0]
        const priceElement = element[0].children[4].children[0].children[0].children[0]
        const productName = h2.innerText
        const price = priceElement.innerText
        console.log(price, productName)
        h2.click()
        cy.wait(6000)
        cy.contains(productName).should('exist')
        cy.contains(price).should('exist')
      }
    })
  })
})
