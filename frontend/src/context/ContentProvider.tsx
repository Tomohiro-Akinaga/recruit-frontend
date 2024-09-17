'use client'

import { createContext, useReducer, Dispatch, PropsWithChildren } from 'react'

type Content = {
  id: number
  title: string
  body: string
}

type State = {
  contents: Content[]
}

type Action =
  | { type: 'SET'; payload: Content[] }
  | { type: 'DELETE'; payload: number }
  | { type: 'CREATE'; payload: Content }
  | { type: 'UPDATE_TITLE'; payload: { id: number; title: string } }
  | { type: 'UPDATE_BODY'; payload: { id: number; body: string } }

type ContentContextType = {
  state: State
  dispatch: Dispatch<Action>
}

export const ContentContext = createContext<ContentContextType | null>(null)

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET':
      return { ...state, contents: action.payload }
    case 'DELETE':
      return { ...state, contents: state.contents.filter((v) => v.id !== action.payload) }
    case 'CREATE':
      return { ...state, contents: [...state.contents, action.payload] }
    case 'UPDATE_TITLE':
      return {
        ...state,
        contents: state.contents.map((v) => (v.id === action.payload.id ? { ...v, title: action.payload.title } : v)),
      }
    case 'UPDATE_BODY':
      return {
        ...state,
        contents: state.contents.map((v) => (v.id === action.payload.id ? { ...v, body: action.payload.body } : v)),
      }
    default:
      return state
  }
}

export const ContentProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { contents: [] })

  return <ContentContext.Provider value={{ state, dispatch }}>{children}</ContentContext.Provider>
}
