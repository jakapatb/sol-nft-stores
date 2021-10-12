describe('My First Test', () => {
  before(() => {
    cy.visit('/iframe.html?id=readme--page&args=&viewMode=story')
  })
  it('Does not do much!', () => {
    cy.get('#docs-root').screenshot()
  })
})
