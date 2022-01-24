describe('API GET categories', () => {
  it('deberia retornar status 200 y categories  ', () => {
    cy.request('GET', 'http://localhost:3000/api/category/categories').as('categories')
    cy.get('@categories').should((response) => {
      const { body, status } = response
      expect(body.data).to.have.length(14)
      expect(status).to.eq(200)
    })
  })
})
