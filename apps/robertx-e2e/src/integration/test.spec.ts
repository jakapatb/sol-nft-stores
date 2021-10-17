describe('My First Test', () => {
  before(() => {
    cy.visit('/iframe.html?id=test-3d--main&viewMode=story')
  })
  it('Does not do much!', () => {
    const x = cy.get('#box')
    cy.wait(3000)
    x.screenshot()
  })
})
