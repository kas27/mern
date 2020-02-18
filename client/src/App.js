import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import userRoutes from './routes';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import "./app.scss";

function App() {
  const {token, login, logOut, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = userRoutes(isAuthenticated);

  if (!ready) return <Loader />;

  return (
    <AuthContext.Provider value={{
      token, login, logOut, userId, isAuthenticated
    }}>
      <Router>
        {
          isAuthenticated && <Navbar/>
        }
        <div className="app">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
