import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// HTTP link cho queries và mutations
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
});

// Link xác thực
const authLink = setContext((_, { headers }) => {
  const accessToken = localStorage.getItem("accessToken");
  
  // Nếu có token, gửi kèm Bearer token
  if (accessToken) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
  
  return {
    headers: {
      ...headers,
    },
  };
});

// Link xử lý lỗi
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Operation: ${operation.operationName}`
      );

      // Kiểm tra nếu lỗi liên quan đến xác thực và xử lý phù hợp
      if (message.includes("Unauthorized") || message.includes("JWT")) {
        localStorage.removeItem("accessToken");
        // Redirect to login page if needed
        // window.location.href = "/login";
      }
    });
  }
  if (networkError) {
    console.log('Network error:', networkError);
  }
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

// Khởi tạo Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

