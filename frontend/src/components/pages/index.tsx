'use client'

import React, { useEffect, useState, useReducer } from 'react'
import HomeTemplate from '@/components/templates/Home'

type ContentsType = {
  id: number
  title: string
  body: string
}[]

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'READ_CONTENTS':
      return { ...state, contents: action.payload }
    default:
      return state
  }
}

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, { contents: [] })

  useEffect(() => {
    const fetchContents = async () => {
      const response = await fetch('api/GET')
      const data = await response.json()
      dispatch({ type: 'READ_CONTENTS', payload: data.data })
    }
    fetchContents()
  }, [])

  return <HomeTemplate contents={state.contents} />
}

export default HomePage
