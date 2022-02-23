describe('API GET producer by id with products', () => {
  let prodProductsFx = {}
  beforeEach(() => {
    cy.request('GET', 'http://localhost:3000/api/producer/products/1').as('producerWithProducts')
    cy.fixture('producerProducts').then((producerProductsFx) => {
      prodProductsFx = producerProductsFx
    })
  })

  it('deberia devolver un json', () => {
    cy.get('@producerWithProducts')
      .its('headers')
      .its('content-type')
      .should((response) => {
        expect(response.includes('application/json')).to.be.true
      })
  })

  it('deberia retornar status 200 y el productor segun id con sus productos', () => {
    cy.get('@producerWithProducts').should((response) => {
      const { body, status } = response
      expect(status).to.eq(200)
      expect(body).to.deep.equal(prodProductsFx)
    })
  })

  it('deberia retornar status 204 si no hay productor', () => {
    cy.request('GET', 'http://localhost:3000/api/producer/products/1231231').as('producerWithProducts')
    cy.get('@producerWithProducts').should((response) => {
      const { status, statusText } = response
      expect(status).to.eq(204)
      expect(statusText).to.eq('No Content')
    })
  })
})
