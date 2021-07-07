import { BoutiquesContext } from 'contexts/BoutiquesContext'
import { useContext } from 'react'

export function useBoutiques() {
  return useContext(BoutiquesContext)
}
