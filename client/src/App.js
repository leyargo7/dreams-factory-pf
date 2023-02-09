import { Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Categories from './components/Categories/Categories.jsx';
import Favorites  from "./components/Favorites/Favorites.jsx"
import Detail from './components/Detail/Detail.jsx';
import CategorySelector from "./components/CategorySelector/CategorySelector.jsx";
import Footer from './components/Footer/Footer.jsx'
import s from "./App.module.css";
import Terms from './components/Terms/Terms.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import About from './components/About/About.jsx';
import MyOrders from './components/MyOrders/MyOrders.jsx';
import Login from './components/Login/Login.jsx';
import ErrorLogin from './components/ErrorLogin/ErrorLogin.jsx';
import LoginSuccess from './components/GoogleLogin/LoginSuccess.jsx';
import MyAccount from './components/MyAccount/MyAccount.jsx';
import Admin from './components/Admin/Admin.jsx';
import ViewUsers from './components/Admin/ViewUsers/ViewUsers.jsx';
import DeleteUsers from './components/Admin/DeleteUsers/DeleteUsers.jsx';
import ShoppingHistory from './components/Admin/ShoppingHistory/ShoppingHistory.jsx';
import AddProducts from './components/Admin/AddProducts/AddProducts.jsx';
import Acordeon from './components/Acordeon/Acordeon.jsx';




function App() {
  return (
    <div className={s.app} >
      <Route path="/" component={Navbar} />
      <Route path="/" component={CategorySelector} />
      <Route exact path="/" component={Home} />
      <Route exact path="/myaccount" component={MyAccount} /> 
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/users" component={ViewUsers} />
      <Route exact path="/admin/deletedusers" component={DeleteUsers} />
      <Route exact path="/admin/shoppinghistory" component={ShoppingHistory} />
      <Route exact path="/admin/addproduct" component={AddProducts} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/myorders" component={MyOrders} />
      <Route exact path="/loginuser" component={Login} />
      <Route exact path="/login/success" component={LoginSuccess}/>
      <Route exact path="/login/error" component={ErrorLogin}/>
      <Route exact path="/product/:id" component={Detail} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/privacy" component={Privacy}/>
      <Route exact path="/faqs" component={Acordeon}/>
      <Route exact path="/about" component={About}/>
      <Footer />
    </div>
  );
}

export default App;
