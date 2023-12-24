
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './componets/Layout';
import Home from './componets/Home';
import About from './componets/About'
import Contact from './componets/Contact';
import Proyect from './componets/Proyect';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="proyect" element={<Proyect/>} />
       
        </Route>
      </Routes>

      
      
   </>
  )
}

export default App;
