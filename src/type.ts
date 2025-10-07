export interface Topping {
  id: string;
  name: string;
  price: string;
  image: string;
  isAvailable: boolean;
}

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  height?: number;
  width?: number;
};

export type Beverager = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  height?: number;
  width?: number;
};


export type CartItem = {
  product: Product;
  size?: string;   
  crust?: string;  
  toppings?: Topping[]; 
};

export type ProductCardProps = {
  product: Product;
  type: "pizza" | "beverage"; 
};

export type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};
