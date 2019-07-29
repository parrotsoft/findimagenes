import React, { Component } from 'react';
import logo from '../assets/images/bulbasaur.svg';
import '../assets/css/components.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Contacto from '../pages/Contacto';


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
          <Router>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo}></img>
                </a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacto" href="#">Contanto</Link>
                  </li>
                </ul>
              </div>
            </nav>

              <Route path="/" exact Component={Home} />
              <Route path="/" Component={Contacto} />
            </div>
          </Router>
         );
    }
}
 
export default NavBar;