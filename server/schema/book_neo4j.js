const { gql } = require('apollo-server');
const neo4j = require('neo4j-driver');
const uuidv4 = require('uuid/v4');

// This is the neo4j login info
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'test'));

// GraphQL typedefs
const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  # --- Query type ---
  type Query {
    books: [Book],
    getBook(id: String): Book
  }

  # -- Mutation Type ---
  type Mutation {
    addBook(title: String, author: String): Book
    modifyBook(id: String, title: String, author: String): Book
    removeBook(id: String): Book
  }
`;

const resolvers = {
    Query: {
        books: () => {
            let session = driver.session();
            let query = `match (n:Book) return n`;
            return session
                .run(query)
                .then(result => result.records.map(record => record.get(0).properties))
                .catch(error => console.log(error))
                .finally(() => session.close());
        },
        getBook: (_, {id}) => 
        {
          let session = driver.session();
          let query = `match (book: Book {id: $id}) return book`;

          return session.run(query, {id})
                        .then(result => result.records[0].get('book').properties)
                        .catch(error => { console.log(error); })
                        .finally(() => session.close());
        }      
    },

    Mutation: {
      addBook(_, {title, author}) {
        let session = driver.session();
        let query = `CREATE (book: Book {id: $id, title: $title, author: $author}) return book`;

        let id = uuidv4(); // Generate UUID
        return session.run(query, {id, title, author})
                      .then(result => result.records[0].get('book').properties)
                      .catch(error => { console.log(error); })
                      .finally(() => session.close());
      },
      modifyBook(_, {id, title, author}) {
        let session = driver.session();
        let query = `MATCH (book: Book { id: $id }) SET book.title = $title, book.author = $author return book`;

        return session.run(query, {id, title, author})
                      .then(result => result.records[0].get('book').properties)
                      .catch(error => { console.log(error); })
                      .finally(() => session.close());
      },
      removeBook(_, {id}) {
        let session = driver.session();
        let query = 'match (book: Book {id: $id}) with book, book.id as id, book.title as title, book.author as author delete book return id, title, author';

        console.info("enter this funciton:", id);
        return session.run(query, {id})
                      .then(result => {
                        return {
                          title: result.records[0].get('title'),
                          author: result.records[0].get('author'),
                          id: result.records[0].get('id')
                        }})
                      .catch(error => { console.log(error); })
                      .finally(() => session.close());
      }
    }
};

module.exports = { typeDefs, resolvers }