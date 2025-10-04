import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.VITE_HASURA_ENDPOINT || 'http://localhost:8080/v1/graphql';
const adminSecret = process.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET;

module.exports = {
  overwrite: true,
  schema: {
    [endpoint]: {
      headers: {
        "x-hasura-admin-secret": adminSecret,
      },
    },
  },
  documents: "src/graphql/hasura-*.graphql",
  generates: {
    "src/generated/graphql-hasura-admin.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        skipTypename: false,
        withComponent: false,
        withHOC: false,
      },
    },
  },
};
