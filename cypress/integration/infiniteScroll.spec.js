describe('Prueba scroll infinito', () => {
  before(() => {
    cy.visit('http://localhost:3000/catalogo')
  })
  it('debera renderizar el maximo de productos (12)', () => {
    cy.get('.generalInfoProduct')
      .each((value, index, collection) => {
        if (index === 0) {
          return collection
        }
      })
      .then((collection) => {
        expect(collection.length).to.eq(12)
      })
  })

  // it('debera renderizar mas productos al desplazarse hacia abajo y mensaje "cargando..."', () => {
  //   cy.scrollTo('bottom')
  //   cy.contains('cargando').then((element) => {
  //     const { innerText } = element[0]
  //     expect(innerText).to.eq('cargando')
  //   })
  //   cy.wait(3000)
  //   cy.get('.generalInfoProduct')
  //     .each((value, index, collection) => {
  //       if (index === 0) {
  //         return collection
  //       }
  //     })
  //     .then((collection) => {
  //       expect(collection.length).to.be.greaterThan(12)
  //     })
  // })
})
