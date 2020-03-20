import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';
import { List } from 'antd';

import query from '../scripts/books';
import RemoveBookLink from './RemoveBook';

export default function () {

  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data.books}
        renderItem={item => (
          <List.Item actions={[<RemoveBookLink id={item.id} />]}>
            <List.Item.Meta
              title={<Link to={`book/${item.id}`}>{item.title}</Link>} 
            />
          </List.Item>
        )}
      />
      <Link to="addBook">Add Book</Link>
    </div>
  )
};
