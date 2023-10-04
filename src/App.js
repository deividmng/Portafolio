
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './componets/Layout';
import Home from './componets/Home';
import About from './componets/About'

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
         
        </Route>
      </Routes>
   </>
  )
}

export default App;
