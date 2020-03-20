import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate, Link, useParams } from '@reach/router';
import { Form, Input, Button } from 'antd';

import mutation from '../scripts/modifyBook';

export default function FormModifyBook() {
  const [form] = Form.useForm();
  const {id, title, author} = useParams();

  const [ modifyBook ] = useMutation(mutation);

  const onFinish = values => {
    modifyBook({ variables: values });
    navigate('/');
  }
  
  return (
    <div>
      <h3>Modify a Book</h3>
      <Form form = {form} onFinish={onFinish} initialValues={{title, author, id}}>
        <Form.Item name="id" label="Book ID" style={{visibility: "hidden"}}>
          <Input/>
        </Form.Item>
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