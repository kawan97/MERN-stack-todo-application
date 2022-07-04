import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { postActionCreator } from "./state/index"
import { userActionCreator } from "./state/index"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Signup from './components/Signup';
import Create from './components/Create';
import Edit from './components/Edit';


function App() {


  const dispatch = useDispatch();

  const { fetch } = bindActionCreators(postActionCreator, dispatch);
  const { getLocalStrorage,setLogout } = bindActionCreators(userActionCreator, dispatch);
  const user = useSelector((state) => state.user);

  useEffect(function(){
    fetch()
    getLocalStrorage()
  },[])

  return (
    <div className="App">


      <BrowserRouter>
      {true && <Link to="/">Home |</Link>}
      {!user.auth && <Link to="/login">Login |</Link>} 
      {!user.auth && <Link to="/Signup">sign up |</Link>}
      {user.auth && <Link to="/create">Create |</Link>}
      {user.auth && <button onClick={setLogout}>Logout </button>}

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/create" component={Create}></Route>
          <Route exact path="/edit/:id" component={Edit}></Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
