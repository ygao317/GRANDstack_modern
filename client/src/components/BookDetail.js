import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from '@reach/router';
import { Card } from 'antd';

import query from '../scripts/getBook';

export default function () {

  const params = useParams();

  const { loading, error, data } = useQuery(query, {
    variables: { id: params.id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { title, author } = data.getBook;
  
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Book Detail" bordered={false} style={{ width: 300 }}>
        <p><b>Title:</b> {title}</p>
        <p><b>Author:</b> {author}</p>
      </Card>
      <Link to="/">back</Link> 
    </div>
  );
};