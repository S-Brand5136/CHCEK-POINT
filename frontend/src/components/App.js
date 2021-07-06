import { useContext, useEffect } from 'react';
import '../styles/App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Partials
import NavLinks from './partials/NavBar';
import Footer from './partials/Footer';

// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <NavLinks></NavLinks>
      <Router>
        <div>
          <Route path='/' component={HomePage} exact />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
