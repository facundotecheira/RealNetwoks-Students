import './App.css';
import Home from './pages/Home';
import RegisterStudents from './components/RegisterStudents';
import ListStudents from './components/ListStudents';
import EditStudent from './components/EditStudent';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (


   <BrowserRouter>
   
   <Routes>
     
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<RegisterStudents/>}/>
    <Route path='/list' element={<ListStudents/>}/>
    <Route path='/editstudent/:id' element={<EditStudent/>}/>

   </Routes>

   </BrowserRouter>
  )
}

export default App;
