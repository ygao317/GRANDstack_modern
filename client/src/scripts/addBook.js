import { gql } from "apollo-boost";

export default gql`
  mutation AddBook($title: String, $author: String){
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;