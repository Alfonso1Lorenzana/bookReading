// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const books = ''
const resolvers = {
    Query: {
      books: () => books,
    },
  };