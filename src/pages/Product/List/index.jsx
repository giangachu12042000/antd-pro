import React from 'react';

import { useRequest } from '@umijs/hooks';

// component
import Table from '../../../components/QueryDataTable';
import { PRODUCT_COLUMNS } from '../constant';
import { fetchAllProductService } from '../services';

// import style from './style.less';

const ProductList = () => {
  const products = useRequest(fetchAllProductService);
  console.log(products.data, 'uu');
  const search = (data) => {
    console.log(data.target.value, '============>data');
  };

  const schema = {
    product: {
      type: 'FilterInput',
      props: {
        lable: 'search product',
        onchange: search,
      },
    },
  };

  return (
    <div>
      <Table
        title="Show list product"
        columns={PRODUCT_COLUMNS}
        dataSource={products?.data?.data || []}
        filterSchema={schema}
        pagination={false}
        loading={products.loading}
      />
    </div>
  );
};

export default ProductList;
