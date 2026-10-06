"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import Products from "./products";

type CoffeeShopWithCategories = Prisma.CoffeeShopGetPayload<{
  include: {
    menuCategories: {
      include: {
        products: {
          include: {
            optionGroups: {
              include: {
                group: {
                  include: {
                    options: true;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}>;

interface CoffeeShopCategoriesProps {
  coffeeshop: CoffeeShopWithCategories;
}

const CoffeeShopCategories = ({ coffeeshop }: CoffeeShopCategoriesProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    coffeeshop.menuCategories[0]?.id,
  );

  const selectedCategory = coffeeshop.menuCategories.find(
    (category) => category.id === selectedCategoryId,
  );

  if (!selectedCategory) {
    return null;
  }

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white pt-1">
      <div className="m-5 flex items-center gap-3">
        <div className="flex h-14 w-14 justify-center rounded-xl bg-[--primary]">
          <Image
            src="/images/LOGO.svg"
            alt="Loucos por Café"
            width={100}
            height={100}
            priority
          />
        </div>

        <div>
          <h2 className="font-lufga text-lg font-semibold">
            {coffeeshop.name}
          </h2>

          <p className="font-lufga text-sm font-normal opacity-40">Cafeteria</p>
        </div>

        <div className="ml-14 mt-2 flex h-6 w-16 gap-1 rounded-full border border-neutral-200 bg-white px-3">
          <div className="mt-[2px]">
            <i className="fi fi-sr-star text-[--primary]" />
          </div>

          <div className="font-lufga font-medium">5.0</div>
        </div>
      </div>

      <div className="m-5 -mt-2 flex items-center gap-1 font-lufga text-sm text-[--primary]">
        <ClockIcon size={16} />
        <p>Aberto até as 23:00</p>
      </div>

      <ScrollArea className="w-full font-lufga font-semibold text-[--muted-foreground]">
        <div className="-mt-4 flex w-max gap-4 p-5">
          {coffeeshop.menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              variant={
                selectedCategoryId === category.id ? "default" : "secondary"
              }
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="mb-4 px-6 font-lufga text-lg font-semibold">
        {selectedCategory.name}
      </h3>

      <Products products={selectedCategory.products} coffeeshop={coffeeshop} />
    </div>
  );
};

export default CoffeeShopCategories;
