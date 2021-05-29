import React from 'react';

import { Input, Form, Col } from 'antd';

import style from './style.less';

const FilterInput = ({ lable, onchange }) => {
  return (
    <Col>
      <Form.Item>
        <Input
          placeholder={lable}
          className={style.customFormInput}
          onChange={(e) => onchange(e)}
        />
      </Form.Item>
    </Col>
  );
};

export default FilterInput;
