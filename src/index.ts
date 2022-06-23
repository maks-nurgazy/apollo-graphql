/* External dependencies */
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { ApolloServer } from 'apollo-server';

/*Local dependencies */
import { usersResolvers } from './resolvers/users';

const server = new ApolloServer({
  typeDefs: loadSchemaSync('src/schemas/**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: [usersResolvers],
});

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
