import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AuthProvider from './components/auth/AuthProvider';
import PrivateRoute from './components/auth/PrivateRoute';
import ImageList from './components/images/ImageList';
import Upload from './components/admin/upload'
import LogInPage from './components/auth/LogInPage';
import SignupPage from './components/auth/SignupPage';
import './App.css';
import AddEvent from './components/admin/AddEvent';
import Update from './components/admin/Update';
import UpdateEvent from './components/admin/UpdateEvent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route
            exact path='/'
            component={ImageList}
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
            component={Upload}
          />
          <PrivateRoute
            exact path='/event'
            component={AddEvent}
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
