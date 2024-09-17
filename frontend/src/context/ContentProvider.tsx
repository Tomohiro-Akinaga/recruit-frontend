'use client'

import { createContext, useReducer } from 'react'

type CountContextType = {
  state: any
  dispatch: any
}

export const ContentContext = createContext<CountContextType | null>(null)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET':
      return { ...state, contents: action.payload }
    case 'DELETE':
      return { ...state, contents: state.contents.filter((v: any) => v.id !== action.payload) }
    case 'CREATE':
      return { ...state, contents: [...state.contents, action.payload] }
    default:
      return state
  }
}

export const ContentProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, { contents: [] })

  return <ContentContext.Provider value={{ state, dispatch }}>{children}</ContentContext.Provider>
}
