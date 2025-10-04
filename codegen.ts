module.exports = {
  overwrite: true,
  schema: {
    "http://localhost:8080/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "adminsecret123",
      },
    },
  },
  documents: "src/graphql/admin/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        skipTypename: false,
      },
    },
  },
};
