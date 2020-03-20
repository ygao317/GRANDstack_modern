import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function ( {children} ) {
  return (
    <div>
      <Layout>
        <Header className="header"><h2>GRANDstack Modern POC</h2></Header>
        <Content style={{ padding: '0 50px' }}>
          {children}
        </Content>
      </Layout>
    </div>
  );
}

