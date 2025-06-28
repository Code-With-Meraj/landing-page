'use client';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import { CircleCheck } from 'lucide-react';
import { PropType } from "@/type"; 

const ToppingCard = ({ topping, selectedToppings, handleCheckBoxCheck }: PropType) => {
    const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id);

    return (
        <Button
            variant={"outline"}
            onClick={() => handleCheckBoxCheck(topping)}
            className={cn("flex flex-col h-36 relative", isCurrentSelected ? " border-primary" : "")}
        >
            <img src={topping.image} width={80} height={80} alt={topping.name} />
            <h4>{topping.name}</h4>
            <p>&#8377;{topping.price}</p>
            {isCurrentSelected && <CircleCheck className=" absolute top-1 right-1 text-primary" />}
        </Button>
    );
};

export default ToppingCard;
