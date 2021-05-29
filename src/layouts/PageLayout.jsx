/* eslint-disable no-unused-vars*/
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

export default ({ children }) => {
  const intl = useIntl();
  return <PageHeaderWrapper>{children}</PageHeaderWrapper>;
};
