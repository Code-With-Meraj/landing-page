"use client";
import React from "react";
import ToppingCard from "./topping-card";
import { Topping } from "@/type";

const toppings = [
  {
    id: "1",
    name: "chicken",
    image: "/chicken.png",
    price: "60",
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: "/jelapeno.png",
    price: "50",
    isAvailable: true,
  },
  {
    id: "3",
    name: "cheese",
    image: "/mushroom.png",
    price: "70",
    isAvailable: true,
  },
];

type ToppingListProps = {
  selectedToppings: Topping[];
  setSelectedToppings: React.Dispatch<React.SetStateAction<Topping[]>>;
};

const ToppingList: React.FC<ToppingListProps> = ({
  selectedToppings,
  setSelectedToppings,
}) => {
  const handleCheckBoxCheck = (topping: Topping) => {
    const exists = selectedToppings.some((el) => el.id === topping.id);
    if (exists) {
      setSelectedToppings((prev) =>
        prev.filter((el) => el.id === topping.id)
      );
    } else {
      setSelectedToppings((prev) => [...prev, topping]);
    }
  };

  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {toppings.map((topping) => (
          <ToppingCard
            key={topping.id}
            topping={topping}
            selectedToppings={selectedToppings}
            handleCheckBoxCheck={handleCheckBoxCheck}
          />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;
