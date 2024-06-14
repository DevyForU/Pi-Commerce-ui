interface Car {
  id?: number;
  price: number;
  status: 'pending' | 'validated' | 'rejected' | 'archived';
  type: string;
  brand: string;
  model: string;
  color: string;
  engine: string;
  place_number: number;
  power: number;
  images: { 
    id: string;
    url: string; 
  }[];
}

export type { Car };