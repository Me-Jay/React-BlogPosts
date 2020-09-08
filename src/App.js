import React, { useState, useContext } from 'react';
import './App.css';
import AuthPage from './pages/Auth';
import RegisterPage from './pages/Register';
import MainLayout from './layout/MainLayout';
import AllPosts from './pages/Main/AllPosts';
import AddPost from './pages/Main/AddPost';
import Post from './pages/Main/Post'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './context/auth-context';

function App() {
  const [token, setToken] = useState(null);

  const login = token => {
    setToken(token);
  }

  const logout = () => {
    setToken(null);
  }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ token: token, login: login, logout: logout }}>
          <div className="App">
            <Switch>
              {
                !token && <Redirect path="/" to="/auth" exact />
              }
              {
                token && <Redirect path="/auth" to="/home" exact />
              }
              {
                !token && <Redirect path="/home" to="/auth" exact />
              }
              {
                !token && <Redirect path="/post/" to="/auth" exact />
              }
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/home" render={() => (
                <MainLayout>
                  <AllPosts />
                </MainLayout>
              )} />
              <Route exact path="/post/add" render={() => (
                <MainLayout>
                  <AddPost />
                </MainLayout>
              )} />
              <Route exact path="/post/:postId" render={() => (
                <MainLayout>
                  <Post />
                </MainLayout>
              )} />
              <Route exact path="/auth" component={AuthPage} />
            </Switch>
          </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
