import Alert from '@/interfaces/Alert';
import { useEffect, useState } from 'react';

export default function AlertComponent({ message, variant, ...props }: Omit<Alert, 'id'>) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      {...props}
      className={`p-4 rounded-lg shadow-xl text-white transition-all duration-300 ease-in-out transform 
      ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'} 
      ${variant === 'success' ? 'bg-emerald-700' : 'bg-red-700'}`}
    >
      {message}
    </div>
  );
}