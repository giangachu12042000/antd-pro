import React from 'react';

import { Table } from 'antd';

import PageAction from '../PageAction';

const QueryDataTable = ({ columns, dataSource, filterSchema, actionSchema, title, ...rest }) => {
  console.log({ ...rest }, '===================>>?rest');
  return (
    <div>
      <PageAction filterSchema={filterSchema} actionSchema={actionSchema} title={title} />
      <Table columns={columns} dataSource={dataSource} rowKey="id" {...rest} />
    </div>
  );
};

export default QueryDataTable;
