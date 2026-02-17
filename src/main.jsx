import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css';

import HomePage from './home.jsx';
import ProductCard from './card.jsx';
import Navbar from './navbar.jsx';
import ContactForm from './contact.jsx';
import Footer from './footer.jsx';

import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <Footer></Footer>
  // <HomePage></HomePage>
  //  <ProductCard></ProductCard>
  // <ContactForm></ContactForm>
  // <Navbar></Navbar>

  <BrowserRouter>
     <App></App>
  </BrowserRouter>
)
