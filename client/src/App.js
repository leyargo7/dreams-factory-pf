import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from './components/Categories/Categories.jsx';
import Detail from './components/Detail/Detail.jsx'
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/product/:id" component={Detail} />

    </div>
  );
}

export default App;

