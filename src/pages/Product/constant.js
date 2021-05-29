import { Link } from 'react-router-dom';

export const PRODUCT_COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'id',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'id',
  },
  {
    title: 'Donate',
    dataIndex: 'totalDonate',
    key: 'id',
  },
  {
    title: 'Edit',
    dataIndex: 'id',
    /* eslint-disable react/react-in-jsx-scope */
    render: (id) => <Link to={`/product/edit/${id}`}> Edit </Link>,
  },
];

export const MOCK_DATA_PRODUCT_COLUMNS = [
  {
    id: '1',
    name: 'A3',
    totalDonate: 300,
  },
  {
    id: '2',
    name: 'A4',
    totalDonate: 300,
  },
  {
    id: '3',
    name: 'A56',
    totalDonate: 300,
  },
];
