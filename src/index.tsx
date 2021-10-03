import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Characters from './Pages/GetCharacters';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/home" component={App} exact />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/rickandmorty" render={() => <Characters />} exact />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
