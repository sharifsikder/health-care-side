
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="*">
       <NotFound></NotFound>
      </Route>

      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
