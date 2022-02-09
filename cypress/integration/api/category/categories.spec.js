describe('API GET categories', () => {
<<<<<<< HEAD
  it('.-.', () => {})
  // beforeEach(() => {
  //   cy.request('GET', 'http://localhost:3000/api/category/categories').as('categories')
  // })

  // it('deberia devolver un json', () => {
  //   cy.get('@categories')
  //     .its('headers')
  //     .its('content-type')
  //     .should((response) => {
  //       expect(response.includes('application/json')).to.be.true
  //     })
  // })

  // it('deberia devolver status 200 y categorias ', () => {
  //   cy.get('@categories').should((response) => {
  //     const { body, status } = response
  //     expect(body.data.length).to.be.greaterThan(0)
  //     expect(status).to.eq(200)
  //   })
  // })
=======
  beforeEach(() => {
    cy.request('GET', 'http://localhost:3000/api/category/categories').as('categories')
  })
  it('deberia devolver un json', () => {
    cy.get('@categories')
      .its('headers')
      .its('content-type')
      .should((response) => {
        expect(response.includes('application/json')).to.be.true
      })
  })

  it('deberia devolver status 200 y categorias ', () => {
    cy.get('@categories').should((response) => {
      const { body, status } = response
      expect(body.data.categories.length).to.be.greaterThan(0)
      expect(status).to.eq(200)
    })
  })
>>>>>>> 8c5f655b6935df7160c95253e618c7e26328381f
})
