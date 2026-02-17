
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'health' | 'shopping' | 'pet' | 'leisure';
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
