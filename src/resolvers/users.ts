/* Local dependencies */
import { users } from '../data/users';

// (parent: any, args: any, context: any, info: any)

export const usersResolvers = {
  Query: {
    listUsers: () => users,
    getUser: ({ id }: any) => {
      return users.find((user) => user.id === id);
    },
  },
  Mutation: {
    createUser: (parent: any, args: any, context: any, info: any) => {
      console.log(args);

      return users[0];
    },
  },
};
