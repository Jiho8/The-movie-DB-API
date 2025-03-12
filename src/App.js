import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {

  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/tv' element={<Tv/>}/>
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
