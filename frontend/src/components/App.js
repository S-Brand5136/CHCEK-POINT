import '../styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Route path='/' component={HomePage} exact />
        </div>
      </Router>
    </div>
  );
}

export default App;
