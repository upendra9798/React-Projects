import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    // as extenTheme is not working so we are using this (box-for bg-white ang text-black)
    <Box bg="white" color="black" minH="100vh"> 
    <Dashboard/>
    </Box>
  )
}

export default App
