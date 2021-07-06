import { useContext, useEffect } from 'react';
import '../styles/App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavLinks from './partials/NavBar';
import { authContext } from '../providers/AuthProvider';

function App() {
  return (
    <div className='App'>
      <NavLinks></NavLinks>
      <Router>
        <div>
          <Route path='/' component={HomePage} exact />
        </div>
      </Router>
    </div>
  );
}

export default App;
