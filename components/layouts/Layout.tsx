import { Box } from '@mui/material'
import { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar, Sidebar } from '../ui'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'OpenJira' }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
}

