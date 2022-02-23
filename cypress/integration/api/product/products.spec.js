describe('API GET products', () => {
  beforeEach(() => {
    cy.request('GET', 'http://localhost:3000/api/product/products').as('products')
  })

  it('deberia devolver un json', () => {
    cy.get('@products')
      .its('headers')
      .its('content-type')
      .should((response) => {
        expect(response.includes('application/json')).to.be.true
      })
  })

  it('deberia retornar status 200 y productos ', () => {
    cy.get('@products').should((response) => {
      const { body, status } = response
      expect(body.data.length).to.be.greaterThan(0)
      expect(status).to.eq(200)
    })
  })
})

describe('API GET product by id', () => {
  let prodFx = {}
  beforeEach(() => {
    cy.request('GET', 'http://localhost:3000/api/product/1').as('products')
    cy.fixture('product').then((productFx) => {
      prodFx = productFx
    })
  })

  it('deberia devolver un json', () => {
    cy.get('@products')
      .its('headers')
      .its('content-type')
      .should((response) => {
        expect(response.includes('application/json')).to.be.true
      })
  })

  it('deberia retornar status 200 y el producto segun id', () => {
    cy.get('@products').should((response) => {
      const { body, status } = response
      expect(status).to.eq(200)
      expect(body).to.deep.equal(prodFx) // modificar to.deep.equal
    })
  })

  it('deberia retornar status 204 si no hay producto', () => {
    cy.request('GET', 'http://localhost:3000/api/product/1231231').as('products')
    cy.get('@products').should((response) => {
      const { status, statusText } = response
      expect(status).to.eq(204)
      expect(statusText).to.eq('No Content')
    })
  })
})
