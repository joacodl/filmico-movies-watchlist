import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesProvider from './Store/moviesProvider';

import Homepage from './components/Home/Homepage';
import Nav from './components/Nav/Nav';
import Watchlist from './components/Movies/Watchlist';
import Watched from './components/Movies/Watched'
import AddMovie from './components/Movies/AddMovie';
import Footer from './components/Footer/Footer';

import styles from './App.css'

function App() {
  return (
    <MoviesProvider className={styles.app}>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<AddMovie />} />
        </Routes>
        <Footer />
      </Router>  
    </MoviesProvider> 
  );
}

export default App;
