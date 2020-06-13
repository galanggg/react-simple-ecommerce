import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
const client = new ApolloClient({
  uri: "https://api.8base.com/ck60m4g2n000208l85eticfqh"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
