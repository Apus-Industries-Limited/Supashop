import { useState } from 'react';
import OrderList from '../components/Orders/OrderList';
import { Order } from '@/types/index';
import OrderNavBar from '../components/Orders/OrderNavBar'

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');

  return (
    <div className="max-w-2xl mx-auto p-4">
          <div>
            <OrderNavBar/>
        </div>
      <div className="w-full">
        {/* Tab Header */}
        <div className="flex w-full mb-4">
          <div className="flex w-full">
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex-1 py-3 px-4 text-center font-bold ${
                activeTab === 'ongoing'
                  ? 'text-orange-500 bg-orange-50 rounded-l-lg'
                  : 'bg-gray-100 text-gray-500 rounded-l-lg'
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-3 px-4 text-center font-bold ${
                activeTab === 'completed'
                  ? 'text-orange-500 bg-orange-50 rounded-r-lg'
                  : 'bg-gray-100 text-gray-500 rounded-r-lg'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Order List */}
        <OrderList orders={orders} activeTab={activeTab} />
      </div>
    </div>
  );
}