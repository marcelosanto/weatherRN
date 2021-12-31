import React from 'react'
import Home from './src/screens/Home'
import { ThemeProvider } from 'styled-components'
import { useColorScheme } from 'react-native'

import themes from './src/themes/index.js'

const App = () => {
  //dark, light, null
  const deviceTheme = useColorScheme()
  const theme = themes[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
