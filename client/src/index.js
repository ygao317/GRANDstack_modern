import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from "@reach/router";

import './style/App.css';

import App from './components/App';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import ModifyBook from './components/ModifyBook';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  }),
});

function Root() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <App path="/">
          <BookList default />
          <BookDetail path="book/:id" />
          <AddBook path="addBook"/>
          <ModifyBook path="modifybook/:id/:author/:title" />
        </App>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
