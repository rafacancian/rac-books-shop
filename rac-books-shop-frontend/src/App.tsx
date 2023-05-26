import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ApolloClientConfig from './components/Providers/ApolloClientConfig';
import ShoppingCartProvider from './components/ContextApi';

const queryClient = new QueryClient()

function App() {
  return (
    <ApolloClientConfig>
      <ShoppingCartProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MyRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ShoppingCartProvider>
    </ApolloClientConfig>
  );
}

export default App;
