import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logOutHandler = (e) => {
    e.preventDefault();
    auth.logOut();
    history.push('/')
  };

  return (
    <nav className="nav-bar">
      <span className="nav-login">Сокращение ссылок</span>
      <ul className="nav-list">
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/links">List</NavLink></li>
        <li><a href="/" onClick={logOutHandler}>Log Out</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;