import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { Box } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    // as extenTheme is not working so we are using this (box-for bg-white ang text-black)
    <Box bg="white" color="black" minH="100vh"> 
     <RouterProvider router={router} />
    </Box>
  )
}

export default App
