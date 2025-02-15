'use client';

import NotificationComponent from '@/components/molecules/Notification';
import Notification from '@/interfaces/Notification';
import { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextType {
  addNotification: ({ message, variant }: Omit<Notification, 'id'>) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = ({ message, variant }: Omit<Notification, 'id'>) => {
    const id = Date.now();
    setNotifications((prev) => {
      const newNotifications = [...prev, { id, message, variant }];
      const notificationDuration = newNotifications.length * 4000;
      
      setTimeout(() => {
        setNotifications((current) => current.filter((notif) => notif.id !== id));
      }, notificationDuration);
      
      return newNotifications;
    });
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {notifications.map(({ id, message, variant }) => (
          <NotificationComponent key={id} message={message} variant={variant} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}

export { NotificationProvider, useNotification };
