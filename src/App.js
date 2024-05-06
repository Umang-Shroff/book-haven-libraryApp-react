import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Bookid from './components/BooksCard/BookData/Bookid';
import Books from './components/BooksCard/Books';
import Navbar from './Navbar/Navbar';

function App() {
  return (
  <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/id" element={<Bookid/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
