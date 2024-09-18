/// <reference types="cypress" />

describe('Blog App', () => {
  const SIDE_BAR_SEL = 'body > div > main > div > div.SideBar_wrapper__RpJdu > ul'
  const SIDE_BAR_EDIT_BUTTON_SEL = 'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button'
  const SIDE_BAR_NEW_PAGE_BUTTON_SEL =
    'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-secondary__Ke1RC.Button_is-create___CIKr'
  const SIDE_BAR_DONE_BUTTON_SEL =
    'body > div > main > div > div.SideBar_wrapper__RpJdu > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-secondary__Ke1RC.Button_is-done__LIc02'
  const TITLE_EDIT_BUTTON_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_titleArea__g0MRK > button'
  const TITLE_INPUT_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_titleArea__g0MRK > input'
  const SAVE_TITLE_BUTTON_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_titleArea__g0MRK > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-small__4paEj.Button_is-primary__bQVp3.Button_is-save__m1jyJ'
  const TEXT_EDIT_BUTTON_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_textArea__h_ejC > button'
  const TEXT_INPUT_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_textArea__h_ejC > textarea'
  const SAVE_TEXT_BUTTON_SEL =
    'body > div > main > div > div.Content_wrapper__ux63x > div > div.Content_textArea__h_ejC > div > button.Button_button__vMoud.Button_has-icon__vIdOA.Button_is-small__4paEj.Button_is-primary__bQVp3.Button_is-save__m1jyJ'
  const DELETE_BUTTON_SEL = 'body > div > main > div > div.SideBar_wrapper__RpJdu > ul > li > button'

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.scrollTo('bottom')
  })

  it('ページの追加と編集ができること', () => {
    // ページの追加が確認できること
    cy.get(SIDE_BAR_EDIT_BUTTON_SEL).click()
    cy.get(SIDE_BAR_NEW_PAGE_BUTTON_SEL).click()
    cy.get(SIDE_BAR_DONE_BUTTON_SEL).click()
    cy.get(SIDE_BAR_SEL).children().last().should('have.text', 'タイトル')
  })

  it('ページの編集ができること', () => {
    // ページの編集が確認できること
    cy.get(SIDE_BAR_SEL).children().last().click()
    cy.get(TITLE_EDIT_BUTTON_SEL).click()
    cy.get(TITLE_INPUT_SEL).clear().type('夏目漱石')
    cy.get(SAVE_TITLE_BUTTON_SEL).click()
    cy.get(TEXT_EDIT_BUTTON_SEL).click()
    cy.get(TEXT_INPUT_SEL).clear().type('本文を編集しました')
    cy.get(SAVE_TEXT_BUTTON_SEL).click()
    cy.get(SIDE_BAR_SEL).children().last().should('have.text', '夏目漱石')
    cy.reload()
    cy.get(SIDE_BAR_SEL).children().last().click()
    cy.get(TITLE_INPUT_SEL).should('have.value', '夏目漱石')
    cy.get(TEXT_INPUT_SEL).should('have.text', '本文を編集しました')
  })

  it('ページの削除ができること', () => {
    // ページの削除が確認できること
    cy.get(SIDE_BAR_SEL).children().last().click()
    cy.get(SIDE_BAR_EDIT_BUTTON_SEL).click()
    cy.get(DELETE_BUTTON_SEL).last().click()
    cy.get(SIDE_BAR_SEL).children().should('not.exist')
  })
})
