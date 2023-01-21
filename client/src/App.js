import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from './components/Categories/Categories.jsx';
import Favorites from './components/Favorites/Favorites.js';
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/favorites" component={Favorites} />
    </div>
  );
}

export default App;

