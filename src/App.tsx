import './reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import SignIn from './pages/sign-in'
import { Header } from './components/header'
import { Home } from './pages/home'
import { Comics } from './pages/comics'
import { Characters } from './pages/characters'
import { Creators } from './pages/creators'
import { cookies } from './components/cookies-config'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = cookies.get('theme') || 'light';
    setTheme(storedTheme)
  }, [])

  const changeTheme = (mode: string) => {
    setTheme(mode)
    cookies.set('theme', mode)
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
          <div>
            <Header changeTheme={changeTheme} theme={theme}/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/signin' element={<SignIn/>}/>
              <Route path='/characters' element={<Characters/>}/>
              <Route path='/creators' element={<Creators/>}/>
              <Route path='/comics' element={<Comics/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
