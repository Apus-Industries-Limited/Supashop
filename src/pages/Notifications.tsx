import { useState } from 'react';
import { NotificationList } from '../components/Notifications/NotificationList';
import { Notification } from '@/types/index';
import NotificationNavBar from '../components/Notifications/NotificationNavBar';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <div>
        <NotificationNavBar/>
     <div className='mt-40 border-none'>
        <NotificationList notifications={notifications} />
    </div>    
    </div>
  );
}