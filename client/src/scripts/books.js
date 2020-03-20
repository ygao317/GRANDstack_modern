import { gql } from "apollo-boost";

export default gql`
  {
    books {
      id
      title
      author
    }
  }
`;