import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './MonthlyLineGraph.css';

// Sample data for 2023, 2024, and 2025
const data = [
  { month: 'Jan', '2023': 120, '2024': 130, '2025': 140 },
  { month: 'Feb', '2023': 150, '2024': 160, '2025': 170 },
  { month: 'Mar', '2023': 180, '2024': 190, '2025': 200 },
  { month: 'Apr', '2023': 200, '2024': 210, '2025': 220 },
  { month: 'May', '2023': 190, '2024': 200, '2025': 210 },
  { month: 'Jun', '2023': 170, '2024': 180, '2025': 190 },
  { month: 'Jul', '2023': 160, '2024': 170, '2025': 180 },
  { month: 'Aug', '2023': 150, '2024': 160, '2025': 170 },
  { month: 'Sep', '2023': 140, '2024': 150, '2025': 160 },
  { month: 'Oct', '2023': 130, '2024': 140, '2025': 150 },
  { month: 'Nov', '2023': 120, '2024': 130, '2025': 140 },
  { month: 'Dec', '2023': 110, '2024': 120, '2025': 130 },
];

const COLORS = {
  '2023': '#8884d8',
  '2024': '#82ca9d',
  '2025': '#ff7300',
};

const MonthlyLineGraph: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400, padding: '20px' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="2023"
            stroke={COLORS['2023']}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="2024"
            stroke={COLORS['2024']}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="2025"
            stroke={COLORS['2025']}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyLineGraph; 