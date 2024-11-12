import React from 'react';
import { FiPackage } from 'react-icons/fi';
import { BiBell } from 'react-icons/bi';

interface EmptyStateProps {
  type: 'notifications' | 'orders';
  orderType?: 'ongoing' | 'completed';
}

const EmptyState: React.FC<EmptyStateProps> = ({ type, orderType }) => {
  const content = {
    notifications: {
      icon: <BiBell size={60} className="text-gray-300" />,
      title: "You haven't gotten any notifications yet!",
      description: "We'll alert you when something cool happens.",
    },
    orders: {
      icon: <FiPackage size={60} className="text-gray-300" />,
      title: orderType === 'completed' ? "No Completed Orders!" : "No Ongoing Orders!",
      description: orderType === 'completed' 
        ? "You do not have any completed orders at this time."
        : "You do not have any ongoing orders at this time.",
    },
  };

  return (
    <div className="w-full py-12">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        {content[type].icon}
        <h3 className="text-xl font-semibold">{content[type].title}</h3>
        <p className="text-gray-500">{content[type].description}</p>
      </div>
    </div>
  );
};

export default EmptyState