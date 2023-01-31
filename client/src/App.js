import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from './components/Categories/Categories.jsx';
import Favorites  from "./components/Favorites/Favorites.js"
import Detail from './components/Detail/Detail.jsx';
import CategorySelector from "./components/CategorySelector/CategorySelector.jsx";
import Footer from './components/Footer/Footer.jsx'
import s from "./App.module.css";
import Terms from './components/Terms/Terms.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import MyOrders from './components/MyOrders/MyOrders.jsx';
import Login from './components/Login/Login.jsx';



function App() {
  return (
    <div className={s.app} >
      <Route path="/" component={Navbar} />
      <Route path="/" component={CategorySelector} />
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/myorders" component={MyOrders} />
      <Route exact path="/loginuser" component={Login} />
      <Route exact path="/product/:id" component={Detail} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/privacy" component={Privacy}/>
      <Footer />
    </div>
  );
}

export default App;

