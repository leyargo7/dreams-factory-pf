import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;

