import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'antd';

import mutation from '../scripts/removeBook';
import query from '../scripts/books';

export default function ({id}) {
  const [ removeBook ] = useMutation(mutation, { 
    update: (cache, {data: { removeBook }}) => {
      const {books} = cache.readQuery({query});
      cache.writeQuery({query,
        data: {books: books.filter(function(value){ return value.id !== removeBook.id;})}
      }
      );
    }
  });
  
  return (<Button type="link" onClick={(e) => {
      e.preventDefault();
      removeBook({variables: {id}});
    }}>delete</Button>);
};