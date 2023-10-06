import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} exact/>
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App;
