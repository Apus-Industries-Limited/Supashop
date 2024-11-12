import React from 'react';
import { Card, Button, Divider } from '@nextui-org/react';
import { FiTruck } from 'react-icons/fi';
import { Order }  from '@/types/index';
import  EmptyState   from '../Empty/EmptyStates';


interface OrderListProps {
  orders: Order[];
  activeTab: 'ongoing' | 'completed';
}

export const OrderList: React.FC<OrderListProps> = ({ orders, activeTab }) => {
  const filteredOrders = orders.filter(order => 
    activeTab === 'ongoing' ? order.status === 'in-transit' : order.status === 'delivered'
  );

  if (filteredOrders.length === 0) {
    return <EmptyState type="orders" orderType={activeTab} />;
  }

  return (
    <Card className="border-none">
      {filteredOrders.map((order) => (
        <div key={order.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
              <div>
                <p className="font-semibold">{order.productName}</p>
                <p className="text-sm text-gray-500">{order.description}</p>
                <p className="font-semibold mt-1">${order.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="inline-flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
                <FiTruck />
                {order.status}
              </span>
              <Button
                size="sm"
                color="primary"
                variant="flat"
                className="font-semibold"
              >
                Track order
              </Button>
            </div>
          </div>
          <Divider className="mt-4" />
        </div>
      ))}
    </Card>
  );
};
export default OrderList