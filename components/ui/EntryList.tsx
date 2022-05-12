import { List, Paper } from '@mui/material'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '../../interfaces'
import { DragEvent, useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList = ({ status }: Props) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(entry => entry._id === id)!
    entry.status = status

    updateEntry(entry)
    endDragging()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper sx={{ height: '100vh', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 3px' }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3' }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}

