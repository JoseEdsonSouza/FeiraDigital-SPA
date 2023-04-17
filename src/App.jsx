import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Conta from './pages/conta/Conta'
import Detalhes from './pages/detalhes/detalhes'

export default function App() {

  return (

     <div className = "App">
       <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home />}/>
            <Route path = '/register' element = {<Conta />}/>
            <Route path = '/produto/:id' element = {<Detalhes />}/> {/* verificar a rota correta */}
          </Routes>
       </BrowserRouter>
     </div>
  )

}

