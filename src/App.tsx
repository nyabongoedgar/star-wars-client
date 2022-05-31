import React from 'react';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  );
}

export default App;
