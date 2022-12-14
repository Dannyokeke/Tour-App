import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Contact from './pages/Contact';

function App() {
  return (
  <BrowserRouter>
    <SearchAppBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/tour' element={<Tour/>}/>
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;

