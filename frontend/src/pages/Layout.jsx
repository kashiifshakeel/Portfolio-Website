import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'styled-components'

const theme = {
  bg: "#121212",
  text_primary: "#ffffff",
  primary: "#007BFF",
  card_light: "#242424"
}

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Outlet/>
    </ThemeProvider>
  )
}

export default Layout