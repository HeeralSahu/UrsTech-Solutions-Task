import React from 'react';
import { BellIcon, SearchIcon, CalendarIcon } from '@heroicons/react/outline';
import StatsCard from './StatsCard';
import { ShoppingCartIcon, CurrencyDollarIcon, ClipboardListIcon } from '@heroicons/react/outline';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        {/* Search Bar */}
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm w-1/3">
          <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search a product"
            className="outline-none flex-1 text-gray-700"
          />
        </div>

        {/* Icons: Notification, Date Picker, Profile */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-gray-600" />
            <span className="text-gray-600">Tue, 6 Apr 2022</span>
          </div>
          <BellIcon className="h-6 w-6 text-gray-600" />
          <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white">
            H
          </div>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Sales Today"
          value="$120"
          increase={+2.18}
          icon={<ShoppingCartIcon className="h-6 w-6 text-gray-600" />}
        />
        <StatsCard
          title="Total Earning"
          value="$81,020"
          increase={+8.26}
          icon={<CurrencyDollarIcon className="h-6 w-6 text-gray-600" />}
        />
        <StatsCard
          title="Total Orders"
          value="102"
          increase={+3.06}
          icon={<ClipboardListIcon className="h-6 w-6 text-gray-600" />}
        />
      </div>

      {/* Product Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Sell</th>
              <th>View</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>1</td>
              <td>👕</td>
              <td>T-SHIRT OWN THE RUN</td>
              <td>$46.52</td>
              <td className="text-green-500">Available</td>
              <td>128</td>
              <td>12,308</td>
              <td>$5,954</td>
            </tr>
            <tr className="border-t">
              <td>2</td>
              <td>👕</td>
              <td>T-SHIRT BOXY ADICOLOR CLASSIC</td>
              <td>$48.76</td>
              <td className="text-red-500">Out of stock</td>
              <td>102</td>
              <td>14,120</td>
              <td>$4,973</td>
            </tr>
            <tr className="border-t">
              <td>3</td>
              <td>👕</td>
              <td>T-SHIRT ESSENTIALS 3-STRIPES</td>
              <td>$48.00</td>
              <td className="text-red-500">Out of stock</td>
              <td>80</td>
              <td>10,285</td>
              <td>$3,840</td>
            </tr>
            <tr className="border-t">
              <td>4</td>
              <td>👕</td>
              <td>TOKYO PACK SHORT SLEEVE TEE</td>
              <td>$48.76</td>
              <td className="text-green-500">Available</td>
              <td>72</td>
              <td>12,008</td>
              <td>$3,510</td>
            </tr>
            <tr className="border-t">
              <td>5</td>
              <td>👕</td>
              <td>JERSEY JUVENTUS AWAY 21/22</td>
              <td>$66.18</td>
              <td className="text-red-500">Out of stock</td>
              <td>60</td>
              <td>11,092</td>
              <td>$3,970</td>
            </tr>
            <tr className="border-t">
              <td>6</td>
              <td>👕</td>
              <td>T-SHIRT OWN THE RUN</td>
              <td>$48.76</td>
              <td className="text-green-500">Available</td>
              <td>58</td>
              <td>14,380</td>
              <td>$3,760</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
