import prisma from '../../../../prisma/client'
describe('API GET products', () => {
  beforeEach(() => {
    console.log(prisma)
    cy.request('GET', 'http://localhost:3000/api/product/1').as('products')
  })

  it('deberia devolver un json', () => {
    // cy.get('@products')
    //   .its('headers')
    //   .its('content-type')
    //   .should((response) => {
    //     expect(response.includes('application/json')).to.be.true
    //   })
  })

  it('deberia retornar status 200 y productos  ', () => {
    // cy.get('@products').should((response) => {
    //   const { body, status } = response
    //   expect(body.data.length).to.be.greaterThan(0)
    //   expect(status).to.eq(200)
    // })
  })
})
