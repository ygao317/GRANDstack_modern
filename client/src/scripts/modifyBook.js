import { gql } from "apollo-boost";

export default gql`
  mutation ModifyBook($id: String, $author: String, $title: String){
    modifyBook(id: $id, author: $author, title: $title) {
      id
      title
      author
    }
  }
`;