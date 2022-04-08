/* Local dependencies */
import { authors, books } from '../data/books';

// (parent: any, args: any, context: any, info: any)

export const booksResolvers = {
  Query: {
    books: () => books,
    book: ({ id }: any) => {
      return books.find((book) => book.id === id);
    },
  },
  Book: {
    author: (book: any) => {
      return authors.find((author) => author.id === book.authorId);
    },
  },
  Mutation: {
    createBook: ({ newBook }: any) => {
      const createdBook = { id: books.length + 1, ...newBook };
      books.push(createdBook);
      return createdBook;
    },
  },
};
