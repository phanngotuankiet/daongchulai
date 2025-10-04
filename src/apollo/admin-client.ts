import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// HTTP link cho admin queries và mutations
const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

// Link xác thực cho admin
const adminAuthLink = setContext((_, { headers }) => {
  const adminToken = localStorage.getItem("admin_token");
  
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': 'adminsecret123',
      ...(adminToken && { Authorization: `Bearer ${adminToken}` }),
    },
  };
});

// Link xử lý lỗi cho admin
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[Admin GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Operation: ${operation.operationName}`
      );

      // Kiểm tra nếu lỗi liên quan đến xác thực và xử lý phù hợp
      if (message.includes("Unauthorized") || message.includes("JWT")) {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
        // Redirect to admin login page
        window.location.href = "/admin/login";
      }
    });
  }
  if (networkError) {
    console.log('Admin Network error:', networkError);
  }
});

const link = ApolloLink.from([errorLink, adminAuthLink, httpLink]);

// Khởi tạo Apollo Client cho admin
const adminClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default adminClient;
