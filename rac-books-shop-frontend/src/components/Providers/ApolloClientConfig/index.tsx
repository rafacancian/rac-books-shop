import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ReactElement } from 'react';

const client = new ApolloClient({
    uri: 'http://localhost:9000/graphql',
    cache: new InMemoryCache()
  });

type Props = {
   children : ReactElement
}  
    
const ApolloClientConfig = ( {children} : Props) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
 

}

export default ApolloClientConfig