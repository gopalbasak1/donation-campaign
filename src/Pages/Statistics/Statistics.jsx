import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import useDonationData from '../../Hooks/useDonationData';
import UseLocalStorage from '../../Hooks/UseLocalStorage';

const Statistics = () => {

    const {data:donationData} = useDonationData();
    const {localData} = UseLocalStorage();
    console.log("Local Data:", localData);
console.log("Donation Data:", donationData);

    const data = [
        { name: 'Your Donation', value: localData.length},
        { name: 'Available Donation', value: donationData.length - localData.length },
        
      ];

      const COLORS = ['#00C49F','#FF444A'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" 
        style={{backgroundColor: "#fff",
        border: "1px solid #AAAAa",
        padding: "5px"
    }}  
        >
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

    return (
        <div style={{
            width: "100%",
            height: "80vh"
            }}>
             <ResponsiveContainer >
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;

