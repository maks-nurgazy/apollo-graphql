/* External dependencies */
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { ApolloServer } from 'apollo-server';
import { authorsResolvers } from './resolvers/authors';

/*Local dependencies */
import { booksResolvers } from './resolvers/books';
import { usersResolvers } from './resolvers/users';

const server = new ApolloServer({
  typeDefs: loadSchemaSync('src/schemas/**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: [booksResolvers, authorsResolvers, usersResolvers],
});

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`);
});
