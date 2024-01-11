// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/')
//   })
// })

describe('test_cypress', () => {
  beforeEach('visit',()=>{
    cy.visit('http://localhost:5173/');
  })
  // it('test de connexion et de déconnexion', () => {
  //   cy.wait(100).get('input').first().wait(100).type('fleury.sharlene@hotmail.fr')
  //   cy.wait(100).get('input').eq(1).type('RJ&malo80')
  //   cy.wait(100).get('button').click()
  //   cy.wait(1000).scrollTo(0, 500)
  //   cy.get('button').click()
  //   cy.wait(1000)
  //   })
    // it('navigation non connecté', () => {
    //   cy.get('a').eq(1).click()
    //   cy.wait(1000)
    //   cy.get('a').eq(2).click()
    //   cy.wait(1000)
    //   cy.get('a').eq(0).click()
    //   cy.wait(1000)
    //   })
    it('lien connexion', () => {
    cy.wait(100).get('input').first().wait(100).type('fleury.sharlene@hotmail.fr')
    cy.wait(100).get('input').eq(1).type('RJ&malo80')
    cy.wait(100).get('button').click()
      })
  })

