"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ToppingList from "./topping-list";
import { ShoppingCart } from "lucide-react";

import type { Product, Topping } from "@/type";
import { useCart } from "../../components/context/cart-context";

type ProductCardProps = {
  product: Product;
  type: "pizza" | "beverager";
};

const ProductCard = ({ product, type }: ProductCardProps) => {
  const { addToCart } = useCart();

  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("thin");
  const [toppings, setToppings] = useState<Topping[]>([]);

  const handleAddToCart = () => {
    addToCart({
      product,
      size,
      crust,
      toppings,
    });
  };

  return (
    <Card className="w-64 h-80 border-none rounded-xl flex flex-col justify-between">
      <CardHeader className="flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-contain"
        />
      </CardHeader>

      <CardContent className="flex-1">
        <div className="text-center">
          <h2 className="text-lg font-bold line-clamp-1">{product.name}</h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <p>
          <span>From</span>
          <span className="font-bold ml-1">₹{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-4 py-2 rounded-full shadow hover:shadow-lg transition">
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <DialogTitle className="sr-only">{product.name}</DialogTitle>

            <div className="flex items-center">
              <div className="w-1/3 bg-white rounded p-4 flex items-center justify-center h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain"
                />
              </div>

              <div className="w-2/3 p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1 text-gray-600">{product.description}</p>

                {type === "pizza" && (
                  <>
                    <div>
                      <h4 className="mt-4">Choose the size</h4>
                      <RadioGroup
                        defaultValue="small"
                        onValueChange={setSize}
                        className="grid grid-cols-3 gap-2 mt-2"
                      >
                        {["small", "medium", "large"].map((value) => (
                          <div key={value}>
                            <RadioGroupItem
                              value={value}
                              id={value}
                              className="peer sr-only"
                              aria-label={value}
                            />
                            <Label
                              htmlFor={value}
                              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                            >
                              {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h4 className="mt-6">Choose the crust</h4>
                      <RadioGroup
                        defaultValue="thin"
                        onValueChange={setCrust}
                        className="grid grid-cols-3 gap-2 mt-2"
                      >
                        {["thin", "thick"].map((value) => (
                          <div key={value}>
                            <RadioGroupItem
                              value={value}
                              id={value}
                              className="peer sr-only"
                              aria-label={value}
                            />
                            <Label
                              htmlFor={value}
                              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                            >
                              {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <ToppingList
                      selectedToppings={toppings}
                      setSelectedToppings={setToppings}
                    />
                  </>
                )}

                <div className="flex items-center justify-between mt-12">
                  <span className="font-bold">₹{product.price}</span>
                  <Button onClick={handleAddToCart}>
                    <ShoppingCart size={20} />
                    <span className="ml-1">Add to cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
