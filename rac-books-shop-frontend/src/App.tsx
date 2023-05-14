import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
