import { useContext } from 'react'
import { ContentContext } from '@/context/ContentProvider'

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) throw new Error('Error')

  return context
}
