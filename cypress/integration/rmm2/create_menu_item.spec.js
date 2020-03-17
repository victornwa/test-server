import fake from '../../support/fake'

const createMenuItem = (amount) => {
  let index = 0
  // eslint-disable-next-line no-plusplus
  for (index = 0; index < amount; index++) {
    const newItemName = `${fake()}`
    cy.get('[data-cy=createBtn]').click()
    // required fields
    cy.get('#MenuItemForm-name').type(newItemName)
    cy.get('#MenuItemForm-price').type('200')
    cy.get('#mui-component-select-menuGroupUUID').click()
    cy.contains('Mains').click()
    cy.get('#mui-component-select-course').click()
    cy.contains('Course 1').click()
    cy.get('[data-cy=save]').click()
    cy.contains(`${newItemName} has been saved`)
  }
}

describe('Menu Items', () => {
    context('Create', () => {
      it('Create menu item successfully', () => {
        cy.loginLocal()
        // cy.visit('http://localhost:9002/menus/menu-items')
        cy.contains('Menu Items').click()
        createMenuItem(301)
      })
    })
  })