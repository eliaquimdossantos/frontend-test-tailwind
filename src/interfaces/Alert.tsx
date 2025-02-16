interface Alert {
  id: number;
  message: string;
  variant: 'success' | 'error';
}

export default Alert;