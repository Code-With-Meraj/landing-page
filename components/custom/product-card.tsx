"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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



const ProductCard = ({ product }: { product: Product }) => {
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
    <Card className="border-none rounded-xl">
      <CardHeader className="flex items-center justify-center">
        <img
          src={"/pizza-main.png"}
          alt="pizza-main"
          width={150}
          height={150}
        />
      </CardHeader>

      <CardContent>
        <div className="text-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From</span>
          <span className="font-bold ml-1">₹{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 p-2 rounded-full shadow hover:shadow-lg outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <div className="flex items-center">
              <div className="w-1/3 bg-white rounded p-4 flex items-center justify-center h-full">
                <img
                  src={"/pizza-main.png"}
                  alt={product.name}
                  width={150}
                  height={150}
                />
              </div>

              <div className="w-2/3 p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>

                {/* Size */}
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

                {/* Crust */}
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

                {/* Toppings */}
                <ToppingList
                  selectedToppings={toppings}
                  setSelectedToppings={setToppings}
                />

                {/* Add to cart */}
                <div className="flex items-center justify-between mt-12">
                  <span className="font-bold">₹400</span>
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
