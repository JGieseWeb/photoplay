import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Button/Button.stories';
import RegisterForm from './Page/Register';

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
