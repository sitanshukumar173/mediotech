import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './Pages/Homepage/HomePage';
import { NotFound } from './Pages/Error/NotFound';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  

  return (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default App
