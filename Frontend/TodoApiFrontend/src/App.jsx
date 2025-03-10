import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Instructions from './pages/Instructions/Instructions';
import Footer from './components/Footer/Footer';

/*------------------------------------------------------*/

/*#################
### FUNCIÓN APP ###
#################*/

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
