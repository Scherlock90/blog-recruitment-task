import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';

const uri = 'https://localhost:5123/graphql';

const link: ApolloLink = createHttpLink({
  uri,
});

export const cache: InMemoryCache = new InMemoryCache();

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});
