import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface ContextProps {
  entries: Entry[]
  updateEntry: (entry: Entry, showSnackbar: boolean) => void
  addNewEntry: (description: string) => void
}

export const EntriesContext = createContext({} as ContextProps)
