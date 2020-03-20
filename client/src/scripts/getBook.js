import { gql } from "apollo-boost";

export default gql`
  query GetBook($id: String!){
    getBook(id: $id) {
      id
      title
      author
    }
  }
`;