
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './componets/Layout';
import Home from './componets/Home';
import About from './componets/About'
import Contact from './componets/Contact';
import Proyect from './componets/Proyect';
import Games from './componets/Games';
import Brain from './componets/Brain';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="proyect" element={<Proyect/>} />
          <Route path="games" element={<Games/>} />
          <Route path="brain" element={<Brain/>} />
       
        </Route>
      </Routes>

      
      
   </>
  )
}

export default App;
