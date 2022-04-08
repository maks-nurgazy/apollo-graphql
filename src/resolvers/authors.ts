import { authors, books } from '../data/books';

export const authorsResolvers = {
  Query: {
    authors: () => authors,
    author: ({ id }: any) => {
      return authors.find((author) => author.id === id);
    },
  },
  Author: {
    books: (author: any) => {
      return books.filter((book) => book.authorId === author.id);
    },
  },
};
