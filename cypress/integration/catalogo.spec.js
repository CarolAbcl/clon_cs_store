describe('Catalogo desktop', () => {
  it('.-.', () => {})
  // before(() => {
  //   cy.visit('http://localhost:3000/catalogo')
  // })

  // it('deberia permitir visitar catalogo', () => {
  //   cy.contains('CATÁLOGO')
  // })

  // it('deberia mostrar boton go up al bajar scroll', () => {
  //   cy.scrollTo(0, 4)
  //   cy.get('.go-up').should('be.visible')
  // })

  // it('deberia ser visible el navbar', () => {
  //   cy.scrollTo(0, 4)
  //   cy.get('.navbar').should('be.visible')
  // })

  // it('deberia ser visible el navbar', () => {
  //   cy.scrollTo(0, 4)
  //   cy.get('.navbar').should('be.visible')
  // })

  // it('deberia ocultar boton go up al subir scroll a la posicion incial (y = 0)', () => {
  //   cy.scrollTo(0, -4)
  //   cy.get('.go-up').should('not.be.visible')
  // })

  // it('deberia mostrar buscador', () => {
  //   cy.get('input[type="search"]').should('be.visible')
  // })

  // it('deberia mostrar logo ComeS', () => {
  //   cy.get('[alt="logo"]').should('be.visible')
  // })

  // it('deberia mostrar card button', () => {
  //   cy.get('[data-test-id="icon-card"]').should('be.visible')
  // })

  // it('deberia aumentar la cantidad de producto', () => {
  //   // button +
  //   cy.get(
  //     ':nth-child(2) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > :nth-child(3)'
  //   ).click({ force: true })

  //   // Input qty
  //   cy.get(
  //     ':nth-child(2) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).should('have.value', '1')
  // })

  // it('deberia disminuir la cantidad de producto', () => {
  //   // setea el input #quantity con 1
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).type('1', { force: true })

  //   // button -
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > :nth-child(1)'
  //   ).click({ force: true })

  //   // Input qty
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).should('have.value', '0')
  // })

  // it('deberia mostrar informacion de precios del producto', () => {
  //   // button i (info)
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-5822a8528987c621 > button.jsx-5822a8528987c621 > .material-icons'
  //   ).click({ force: true })

  //   // contenedor con la info
  //   cy.get('.containerDetailsProduct').should('be.visible')
  // })

  // it('deberia ocultar informacion de precios del producto', () => {
  //   // button i (info) con la info anterior mente desplegada
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-5822a8528987c621 > button.jsx-5822a8528987c621 > .material-icons'
  //   ).click({ force: true })

  //   // el containerDetailsProduct ya no existe
  //   cy.get('.containerDetailsProduct').should('not.exist')
  // })
})

describe('Catalogo mobile', () => {
  it('.-.', () => {})
  // beforeEach(() => {
  //   cy.viewport(414, 736)
  // })

  // before(() => {
  //   cy.visit('http://localhost:3000/catalogo')
  // })

  // it('deberia permitir visitar catalogo', () => {
  //   cy.contains('CATÁLOGO')
  // })

  // it('deberia mostrar boton go up al bajar scroll', () => {
  //   cy.scrollTo(0, 4)
  //   cy.get('.go-up').should('be.visible')
  // })

  // it('deberia ser visible el navbar', () => {
  //   cy.scrollTo(0, 4)
  //   cy.get('.navbar').should('be.visible')
  // })

  // it('deberia ocultar boton go up al subir scroll a la posicion incial (y = 0)', () => {
  //   cy.scrollTo(0, -4)
  //   cy.get('.go-up').should('not.be.visible')
  // })

  // it('deberia mostrar buscador', () => {
  //   cy.get('input[type="search"]').should('be.visible')
  // })

  // it('deberia mostrar logo ComeS', () => {
  //   cy.get('[alt="logo"]').should('be.visible')
  // })

  // it('deberia mostrar card button', () => {
  //   cy.get('[data-test-id="icon-card"]').should('be.visible')
  // })

  // it('deberia aumentar la cantidad de producto', () => {
  //   // button +
  //   cy.get(
  //     ':nth-child(2) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > :nth-child(3)'
  //   ).click({ force: true })

  //   // Input qty
  //   cy.get(
  //     ':nth-child(2) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).should('have.value', '1')
  // })

  // it('deberia disminuir la cantidad de producto', () => {
  //   // setea el input #quantity con 1
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).type('1', { force: true })

  //   // button -
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > :nth-child(1)'
  //   ).click({ force: true })

  //   // Input qty
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-69787f2591a0f36 > #quantity'
  //   ).should('have.value', '0')
  // })

  // it('deberia mostrar informacion de precios del producto', () => {
  //   // button i (info)
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-5822a8528987c621 > button.jsx-5822a8528987c621 > .material-icons'
  //   ).click({ force: true })

  //   // contenedor con la info
  //   cy.get('.containerDetailsProduct').should('be.visible')
  // })

  // it('deberia ocultar informacion de precios del producto', () => {
  //   // button i (info) con la info anterior mente desplegada
  //   cy.get(
  //     ':nth-child(1) > .generalInfoProduct > .ProductCardInfo > :nth-child(4) > div.jsx-5822a8528987c621 > button.jsx-5822a8528987c621 > .material-icons'
  //   ).click({ force: true })

  //   // el containerDetailsProduct ya no existe
  //   cy.get('.containerDetailsProduct').should('not.exist')
  // })

  // it('deberia mostrar boton para ver filtros', () => {
  //   cy.get('.header-catalogo > .filters-container > .filter-button').should('be.visible')
  // })

  // it('deberia mostrar boton menu hamburguesa', () => {
  //   cy.get('.burger_container').should('be.visible')
  // })

  // it('deberia desplegar sidebar menu', () => {
  //   cy.get('.burger_container').click()
  //   cy.get('.content').should('be.visible')
  // })

  // it('deberia cerrar sidebar menu', () => {
  //   cy.get('.burger_container').click()
  //   cy.get('.content').should('not.be.visible')
  // })
})
