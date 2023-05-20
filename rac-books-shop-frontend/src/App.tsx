import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ApolloClientConfig from './components/Providers/ApolloClientConfig';

const queryClient = new QueryClient()

function App() {
  return (
    <ApolloClientConfig>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloClientConfig>
  );
}

export default App;
