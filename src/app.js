import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingProvider from './context/Context';
import ToDo from './components/todo';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './components/Header';
import SettingsForm from './components/Settings.js';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth';
import Auth from './components/auth/Auth';

const Delete = () => {
  return (
    <Auth capability="delete">
    </Auth>
  );
};

const Update = () => {
  return (
    <Auth capability="update">
    </Auth>
  );
};



function App() {
  const contextCondition = useContext(AuthContext);


  return (
    <>
      <Header />
      <If condition={contextCondition.loggedIn}>
        <Then>
          <Router>
            <Switch>
              <SettingProvider>
                <Route exact path='/settings' >
                  <SettingsForm />
                </Route>
                <Route exact path='/'>
                  <Update />
                  <Delete />
                  <ToDo />
                </Route>
              </SettingProvider>
            </Switch>
          </Router>
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
    </>
  )
}

export default App;