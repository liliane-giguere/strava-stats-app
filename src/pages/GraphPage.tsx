import React from 'react';
import MonthlyLineGraph from '../components/MonthlyLineGraph';

const GraphPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Monthly Data Comparison (2023-2025)</h1>
      <MonthlyLineGraph />
    </div>
  );
};

export default GraphPage; 