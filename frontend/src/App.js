import './App.css';
import Home from './pages/Home';
import RegisterStudents from './components/RegisterStudents';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (


   <BrowserRouter>
   
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<RegisterStudents/>}/>

   </Routes>

   </BrowserRouter>
  )
}

export default App;
