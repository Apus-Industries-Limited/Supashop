export interface AccountItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    link: string;
    color?: string;
  }

export default interface Address {
    id: string;
    nickname: string;
    fullAddress: string;
    isDefault: boolean;
  }

  export interface Notification {
    id: string;
    title: string;
    description: string;
    timestamp: Date;
    type: 'promotion' | 'alert' | 'info';
  }
  
  export interface Order {
    id: string;
    productName: string;
    description: string;
    price: number;
    status: 'in-transit' | 'delivered' | 'processing';
  }