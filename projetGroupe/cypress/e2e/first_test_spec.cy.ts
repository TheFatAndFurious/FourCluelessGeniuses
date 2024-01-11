// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/')
//   })
// })

describe('test_cypress', () => {
  beforeEach('visit',()=>{
    cy.visit('http://localhost:5173/');
  })
  it('test de connexion ', () => {
    cy.get('a').eq(2).click()
    cy.get('input').first().type('fleury.sharlene@hotmail.fr')
    cy.get('input').eq(1).type('RJ&malo80')
    cy.get('button').eq(1).click()
    cy.url()

  })
})