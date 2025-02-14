import { Delivery } from './Delivery';

export interface ResultKeys {
  createdAt: string;
  name: string;
  deliveries: Delivery[];
  id: string;
  orkId: string;
}