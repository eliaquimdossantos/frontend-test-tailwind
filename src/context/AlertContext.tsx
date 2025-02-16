'use client';

import AlertComponent from '@/components/molecules/Alert';
import Alert from '@/interfaces/Alert';
import { createContext, useContext, useState, ReactNode } from 'react';

interface AlertContextType {
  addAlert: ({ message, variant }: Omit<Alert, 'id'>) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

function AlertProvider({ children }: AlertProviderProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = ({ message, variant }: Omit<Alert, 'id'>) => {
    const id = Date.now();
    setAlerts((prev) => {
      const newAlerts = [...prev, { id, message, variant }];
      const alertDuration = newAlerts.length * 4000;
      
      setTimeout(() => {
        setAlerts((current) => current.filter((alert) => alert.id !== id));
      }, alertDuration);
      
      return newAlerts;
    });
  };

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {alerts.map(({ id, message, variant }) => (
          <AlertComponent key={id} message={message} variant={variant} />
        ))}
      </div>
    </AlertContext.Provider>
  );
}

function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider');
  }
  return context;
}

export { AlertProvider, useAlert };
