// '/App'
// Définition des routes , Header et Footer

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Learning from './pages/learning/Learning';
import SongList from './pages/songList/SongList';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/learning/:songId" element={<Learning/>}/>
        <Route path="/songList" element={<SongList/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
