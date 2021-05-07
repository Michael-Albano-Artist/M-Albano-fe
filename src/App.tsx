import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AuthProvider from './components/auth/AuthProvider';
import PrivateRoute from './components/auth/PrivateRoute';
import LogInPage from './components/auth/LogInPage';
import SignupPage from './components/auth/SignupPage';
import './App.css';
import AddEvent from './components/admin/AddEvent';
import Update from './components/admin/Update';
import UpdateEvent from './components/admin/UpdateEvent';
import AddImage from './components/admin/AddImage';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import ImageDetail from './components/images/ImageDetail';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route
            exact path='/'
            component={HomePage}
          />
          <Route
            exact path='/detail/:linkId'
            component={ImageDetail}
          />
          <Route
            exact path='/login'
            component={LogInPage}
          />
          <Route  
            exact path='/signup'
            component={SignupPage}
          />
          <PrivateRoute
            exact path='/admin'
            component={AdminPage}
          />
          <PrivateRoute
            exact path='/event'
            component={AddEvent}
          />
          <PrivateRoute
            exact path='/image'
            component={AddImage}
          />
          <PrivateRoute
            exact path='/update/:updateId'
            component={Update}
          />
           <PrivateRoute
            exact path='/update/event/:updateId'
            component={UpdateEvent}
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
