import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Admin from './Components/Admin/Admin'
import Home from './Components/Home/Home'
import Detalle from './Components/Detalle/Detalle'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/detalle/:productId' element={<Detalle/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
