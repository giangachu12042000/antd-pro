import React from 'react';

import FilterGenerator from '../FilterGenerator';
import ActionGenerator from '../ActionGenerator';

import style from './style.less';

const PageAction = ({ filterSchema, actionSchema, title }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.title}>{title}</span>
        <div>
          {filterSchema && Object.keys(filterSchema).length > 0 && (
            <FilterGenerator filterSchema={filterSchema} />
          )}
        </div>
        <div>
          {actionSchema && Object.keys(actionSchema).length > 0 && (
            <ActionGenerator actionSchema={actionSchema} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageAction;
