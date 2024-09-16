'use client'

import React, { createContext, ReactNode, useReducer } from 'react'

type CountContextType = {
  state: any
  dispatch: any
}

const initialState: any = { count: 0 }

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const CountContext = createContext<CountContextType | null>(null)

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>
}
