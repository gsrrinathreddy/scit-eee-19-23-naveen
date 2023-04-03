import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hobbies from './Pages/Hobbies';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Aboutus from './Pages/Aboutus';
import Qualification from './Pages/Qualification';
import Contact from './Pages/Contact';
import Certifications from './Pages/Certifications';
import Projects from './Pages/Projects';
import Workshops from './Pages/Workshops';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
           <Route path='Aboutus' element={<Aboutus/>}/>
           <Route path='Hobbies' element={<Hobbies/>}/>
           <Route path='Qualification' element={<Qualification/>}/>
           <Route path='Experience' element={<Experience/>}/>
           <Route path='Skills' element={<Skills/>}/>
           <Route path='Contact' element={<Contact/>}/>
           <Route path='Projects' element={<Projects/>}/>
           <Route path='Certifications' element={<Certifications/>}/>
           <Route path='Workshops' element={<Workshops/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
