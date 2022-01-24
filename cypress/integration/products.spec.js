describe('API GET products', () => {
  it('deberia retornar status 200 y productos  ', () => {
    cy.request('GET', 'http://localhost:3000/api/product/products').as('products')
    cy.get('@products').should((response) => {
      const { body, status } = response
      expect(body.data).to.have.length(6)
      expect(status).to.eq(200)
    })
  })
})
