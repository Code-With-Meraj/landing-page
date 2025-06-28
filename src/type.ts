
export interface Topping {
  id: string;
  name: string;
  price: string;
  image: string;
  isAvailable: boolean;
}

export type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type PropTypes = {
  product: Product;
};