import React from 'react';
import { HomeIcon, ChartBarIcon, ShoppingBagIcon, UserGroupIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Backing</h1>
      <ul className="space-y-6">
        <li className="flex items-center space-x-3">
          <HomeIcon className="h-6 w-6" />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-3">
          <ChartBarIcon className="h-6 w-6" />
          <span>Sales</span>
        </li>
        <li className="flex items-center space-x-3">
          <ShoppingBagIcon className="h-6 w-6" />
          <span>Products</span>
        </li>
        <li className="flex items-center space-x-3">
          <UserGroupIcon className="h-6 w-6" />
          <span>Customers</span>
        </li>
        <li className="flex items-center space-x-3">
          <CogIcon className="h-6 w-6" />
          <span>Settings</span>
        </li>
        <li className="flex items-center space-x-3 text-red-400 mt-10">
          <LogoutIcon className="h-6 w-6" />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
