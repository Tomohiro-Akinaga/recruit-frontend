/// <reference types="cypress" />

describe('Blog App', () => {
  const SIDE_BAR_SEL = 'body > div > main > div > div.SideBar_wrapper__RpJdu > ul'
  const SIDE_BAR_EDIT_BUTTON_SEL = 'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button'
  const SIDE_BAR_NEW_PAGE_BUTTON_SEL =
    'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-secondary__Ke1RC.Button_is-create___CIKr'
  const SIDE_BAR_DONE_BUTTON_SEL =
    'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-secondary__Ke1RC.Button_is-done__LIc02'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.scrollTo('bottom')
  })

  it('ページを追加した際にサイドバーに新しいページが追加されていること', () => {
    cy.get(SIDE_BAR_EDIT_BUTTON_SEL).click()
    cy.get(SIDE_BAR_NEW_PAGE_BUTTON_SEL).click()
    cy.get(SIDE_BAR_DONE_BUTTON_SEL).click()
    cy.get(SIDE_BAR_SEL).children().last().should('have.text', 'タイトル')
  })
})
