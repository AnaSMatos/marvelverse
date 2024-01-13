import './reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/sign-in'
import { Header } from './components/header'
import { Home } from './pages/home'
import { Comics } from './pages/comics'
import { Characters } from './pages/characters'
import { Creators } from './pages/creators'

function App() {

  return (
    <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/creators' element={<Creators/>}/>
            <Route path='/comics' element={<Comics/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
