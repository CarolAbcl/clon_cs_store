describe('Prueba de página descripción de producto', function () {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/catalogo')
  })

  it('se ingresa a una carta y se espera que contenga la información del producto', () => {
    cy.get('.ProductCardInfo').each((element, index) => {
      if (index === 0) {
        const h2 = element[0].children[0].children[0]
        const priceElement = element[0].children[4].children[0].children[1].children[0]
        const productName = h2.innerText
        const price = priceElement.innerText
        h2.click()
        cy.wait(10000)
        cy.get('.short-info > div > h1').then(el => expect(el[0].innerText).to.eq(productName))
        cy.get('.price-element:nth-child(1) > .secondary.impact').then(el => expect(el[0].innerText).to.eq(price))
      }
    })
  })
})
