'use client'

import React, { useEffect, useState, useReducer, useContext } from 'react'
import HomeTemplate from '@/components/templates/Home'
import { useContent } from '@/hooks/useContent'

const HomePage = () => {
  const { state, dispatch } = useContent()
  const [contentId, setContentId] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchContents = async () => {
      const response = await fetch('/api/GET')
      const contents = await response.json()
      dispatch({ type: 'SET', payload: contents.data })
      setContentId(contents.data[0]?.id)
    }
    fetchContents()
  }, [dispatch])

  return <HomeTemplate contents={state.contents} contentId={contentId} setContentId={setContentId} />
}

export default HomePage
