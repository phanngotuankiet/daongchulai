import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';

module.exports = {
  overwrite: true,
  schema: endpoint,
  documents: "src/graphql/*.graphql",
  generates: {
    "src/generated/graphql-admin.ts": {
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
