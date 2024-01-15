
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AddPages from './pages/AddPages'
import Wishlist from './pages/Wishlist'
import Detail from './pages/Detail'

export function App() {

  return (
    <>
       <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/addpages" element={<AddPages></AddPages>} /> 
        <Route path="/wishlist" element={<Wishlist></Wishlist>} /> 
        <Route path="/detail/:id" element={<Detail></Detail>} /> 



        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
