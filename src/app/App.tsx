import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterForm from './Page/Register';
import Login from './pages/Login/Login';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>Hallo</p>
        </Route>

        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <RegisterForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
