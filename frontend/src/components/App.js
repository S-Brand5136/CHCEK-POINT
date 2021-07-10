import '../styles/App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Partials
import NavLinks from './partials/NavBar';
import Footer from './partials/Footer';

// Pages
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import BrowsePage from './pages/BrowsePage';
import UserPage from './pages/UserPage';
import AddToListPage from './pages/AddToListPage';
import CreateListPage from './pages/CreateListPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavLinks />
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/games/:id' component={GamePage} exact />
          <Route path='/games' component={BrowsePage} exact />
          <Route path='/users/:id' component={UserPage} exact />
          <Route path='/browse/:tag' component={BrowsePage} />
          <Route path='/lists' component={AddToListPage} />
          <Route path='/createList' component={CreateListPage} exact />
          <Route path='/collections' component={HomePage} exact />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
