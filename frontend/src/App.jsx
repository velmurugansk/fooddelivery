import { ThemeProvider } from '@emotion/react'
import { muitheme } from './utilis/theme'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <ThemeProvider theme={muitheme}>
      <Navbar />
    </ThemeProvider>
  )
}

export default App
