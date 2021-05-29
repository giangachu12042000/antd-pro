import React, { useEffect, useState } from 'react';

import { useRequest } from '@umijs/hooks';
import { history } from 'umi';

// component
import { Form, Input, Button, InputNumber, message } from 'antd';
import { createProduct, getProductById, editProductService } from '../services';

const FormProduct = ({ match }) => {
  const [form] = Form.useForm();

  const [onEdit, setEdit] = useState(null);

  console.log(match, 'uie');
  const { id } = match.params;
  const createProductAction = useRequest(createProduct, {
    manual: true,
    onSuccess: (result) => {
      message.success('This is a success message');
      form.resetFields();
    },
  });
  const product = useRequest(getProductById, {
    manual: true,
    onSuccess: () => {
      setEdit(1);
    },
  });
  const editProduct = useRequest(editProductService, {
    manual: true,
    onSuccess: () => {
      message.success('This is a success message');
      history.push('/product/list');
    },
  });

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
  };

  const onFinish = (data) => {
    if (data.id) {
      editProduct.run(data);
    } else {
      console.log(data, 'uiie');

      createProductAction.run(data);
    }
  };

  useEffect(() => {
    if (product.data) {
      form.setFieldsValue(product.data.data);
    }
  }, [product.data]);

  useEffect(() => {
    if (id) {
      product.run(id);
    }
  }, []);

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
      loading={editProduct.loading}
    >
      {onEdit === 1 && (
        <Form.Item label="id" name="id" hidden={true}>
          <InputNumber
            style={{
              width: 200,
            }}
          />
        </Form.Item>
      )}
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="link image"
        name="avatar"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="total pay"
        name="totalDonate"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <InputNumber
          style={{
            width: 200,
          }}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={createProduct.loading || editProduct.loading}
        >
          Submit
        </Button>
        <Button
          type="danger"
          style={{
            marginLeft: '20px',
          }}
          onClick={() => history.push('/product/list')}
        >
          back
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormProduct;
