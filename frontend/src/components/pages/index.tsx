'use client'

import React, { useEffect, useState, useReducer, useContext } from 'react'
import HomeTemplate from '@/components/templates/Home'
import { useContent } from '@/hooks/useContent'

const HomePage = () => {
  const { state, dispatch } = useContent()

  useEffect(() => {
    const fetchContents = async () => {
      const response = await fetch('/api/GET')
      const contents = await response.json()
      dispatch({ type: 'SET', payload: contents.data })
    }
    fetchContents()
  }, [dispatch])

  return <HomeTemplate contents={state.contents} />
}

export default HomePage
