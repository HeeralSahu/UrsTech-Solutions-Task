import React from 'react';

const StatsCard = ({ title, value, increase, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6">
      <div className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-600">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${increase > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {increase > 0 ? `+${increase}%` : `${increase}%`} more than usual
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
