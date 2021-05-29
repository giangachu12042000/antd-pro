import React from 'react';

import { Form, Row } from 'antd';

import FilterCollection from './FilterCollection';

const FilterGenerator = ({ filterSchema }) => {
  return (
    <Form labelAlign="left" layout="inline">
      <Row gutter={32} style={{ width: '100%' }}>
        <FilterCollection filterSchema={filterSchema} />
      </Row>
    </Form>
  );
};

export default FilterGenerator;
