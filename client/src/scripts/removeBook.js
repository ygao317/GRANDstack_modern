import { gql } from "apollo-boost";

export default gql`
  mutation RemoveBook($id: String){
    removeBook(id: $id) {
      id
      title
      author
    }
  }
`;