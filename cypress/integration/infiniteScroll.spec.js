describe('Prueba scroll infinito', () => {
  it('.-.', () => {})
  // before(() => {
  //   cy.visit('http://localhost:3000/catalogo')
  // })
  // it('debera renderizar el maximo de productos (9)', () => {
  //   cy.get('.generalInfoProduct')
  //     .each((value, index, collection) => {
  //       if (index === 0) {
  //         return collection
  //       }
  //     })
  //     .then((collection) => {
  //       expect(collection.length).to.eq(9)
  //     })
  // })

  // it('debera renderizar 9 productos mas al desplazarse hacia abajo y mensaje "cargando..."', () => {
  //   cy.scrollTo('bottom')
  //   cy.contains('Cargando...').then((element) => {
  //     const { innerText } = element[0]
  //     expect(innerText).to.eq('Cargando...')
  //   })
  //   cy.wait(3000)
  //   cy.get('.generalInfoProduct')
  //     .each((value, index, collection) => {
  //       if (index === 0) {
  //         return collection
  //       }
  //     })
  //     .then((collection) => {
  //       expect(collection.length).to.eq(10)
  //     })
  // })
})
