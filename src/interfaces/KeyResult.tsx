import Delivery from './Delivery';

interface KeyResult {
  createdAt: string;
  name: string;
  deliveries: Delivery[];
  id: string;
  orkId: string;
}

export default KeyResult;