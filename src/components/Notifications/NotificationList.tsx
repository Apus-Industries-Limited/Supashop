import React from 'react';
import { Card, Divider } from '@nextui-org/react';
import { BiTag } from 'react-icons/bi';
import { Notification } from '@/types/index';
import  EmptyState  from '../Empty/EmptyStates';

interface NotificationListProps {
  notifications: Notification[];
}

export const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  if (notifications.length === 0) {
    return <EmptyState type="notifications" />;
  }

  return (
    <Card className=" border-none">
      <div className="p-4">
        <h4 className="text-lg font-semibold">Notifications</h4>
      </div>
      <Divider />
      {notifications.map((notification) => (
        <div key={notification.id} className="p-4 hover:bg-gray-50">
          <div className="flex items-start gap-3">
            <BiTag className="text-xl text-primary mt-1" />
            <div>
              <p className="font-semibold">{notification.title}</p>
              <p className="text-sm text-gray-500">{notification.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};
