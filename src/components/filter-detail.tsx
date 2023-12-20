import { Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

interface FilterDetailProps {
  filterName: string;
}

const FilterDetail: React.FC<FilterDetailProps> = ({ filterName }) => {
  return (
    <Paragraph
      style={{
        border: '1px solid #D8D8D8',
        borderRadius: '10px',
        padding: '0px 10px',
        color: 'gray',
        fontSize: '12px',
      }}
    >
      {filterName}
    </Paragraph>
  );
};

export default FilterDetail;
