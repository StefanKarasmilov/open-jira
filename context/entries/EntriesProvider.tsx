import { EntriesContext } from './EntriesContext'
import { ReactNode, useEffect, useReducer } from 'react'
import { entriesReducer } from './entriesReducer'
import { Entry } from '../../interfaces'
import { entriesApi } from '../../api'
import { useSnackbar } from 'notistack'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

interface Props {
  children: ReactNode
}

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    refreshEntries()
  }, [])

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] Entry-Refresh', payload: data })
  }

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] Add-Entry', payload: data })
  }

  const updateEntry = async ({ description, status, _id }: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })
      dispatch({ type: '[Entry] Entry-Updated', payload: data })

      if (showSnackbar) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    } catch (e) {
      console.log({ e })
    }
  }

  return (
    <EntriesContext.Provider
      value={{ ...state, addNewEntry, updateEntry }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
