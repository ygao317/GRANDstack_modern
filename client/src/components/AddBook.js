import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate, Link } from '@reach/router';
import { Form, Input, Button } from 'antd';

import mutation from '../scripts/addBook';
import query from '../scripts/books';

export default function FormAddBook () {
  const [form] = Form.useForm();

  const [addBook ] = useMutation(mutation, { 
    update: (cache, {data: { addBook }}) => {
      const {books} = cache.readQuery({query});

      cache.writeQuery({query,
        data: {books: books.concat([addBook])}
      });
    } 
  });

  const onFinish = values => {
    addBook({ variables: values });
    navigate('/');
  }
  
  return (
    <div>
      <h3>Create a New Book</h3>
      <Form form = {form} onFinish={onFinish}>
        <Form.Item name="title" label="Book Title" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Form.Item name="author" label="Book Author" rules={[{required: true}]}>
          <Input/>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <br/><Link to="/">back</Link>
      </Form>
    </div>
  );
};