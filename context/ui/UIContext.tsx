import { createContext } from 'react'

interface ContextProps {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  setIsAddingEntry: (value: boolean) => void
  startDragging: () => void
  endDragging: () => void
  openSideMenu: () => void
  closeSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps)
