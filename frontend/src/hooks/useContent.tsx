import { useContext } from 'react'
import { ContentContext } from '@/context/ContentProvider'

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
