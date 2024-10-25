import './App.css'
import { Myprovider } from './context/UserContext'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { Home } from './pages/HomeComponent'
import { FormComponent } from './pages/components/FormComponent'
import { Book } from './pages/components/BookComponent'

function App() {

  return (
    <>
      <Myprovider>
      <BrowserRouter basename="/Kodigo-Music-App/">
          <Routes>
            <Route index path='/' element={ <Home />} />
            <Route index path='/appointment' element={ <FormComponent />} />
            <Route index path='/book' element={ <Book />} />
          </Routes>
      </BrowserRouter>
      </Myprovider>
    </>
  )
}

export default App
