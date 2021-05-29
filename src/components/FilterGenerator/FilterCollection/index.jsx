import React from 'react';

// import { Col, Form } from 'react';

import FilterInput from './FilterInput';

const filterCollection = {
  FilterInput,
};

const FilterCollection = ({ filterSchema }) => {
  const setOfFields = Object.keys(filterSchema);
  return (
    <>
      {setOfFields.length > 0 &&
        setOfFields.map((field) => {
          return (
            <>
              {React.createElement(filterCollection[filterSchema[field].type], {
                ...filterSchema[field].props,
              })}
            </>
          );
        })}
    </>
  );
};

export default FilterCollection;
