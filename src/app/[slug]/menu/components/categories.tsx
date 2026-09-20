import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

type CoffeeShopWithCategories = Prisma.CoffeeShopGetPayload<{
  include: {
    menuCategories: true;
  };
}>;

interface CoffeeShopCategoriesProps {
  coffeeshop: CoffeeShopWithCategories;
}

const CoffeeShopCategories = ({ coffeeshop }: CoffeeShopCategoriesProps) => {
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl pt-1 bg-white">
      <div className="flex items-center gap-3 m-5">
        <div className="flex justify-center w-14 h-14 bg-[--primary] rounded-xl">
          <Image
            src="/images/LOGO.svg"
            alt="Loucos por Café"
            width={100}
            height={100}
            priority
          />
        </div>

        <div>
          <h2 className="font-lufga font-semibold text-lg">
            {coffeeshop.name}
          </h2>
          <p className="font-lufga font-normal text-[secondary] opacity-40 text-sm">
            Cafeteria
          </p>
        </div>

        <div className="w-16 h-6 ml-14 mt-2 border border-neutral-200 bg-white rounded-full flex px-3 gap-1">
          <div className="mt-[2px]">
            <i className="fi fi-sr-star text-[--primary]"></i>
          </div>
          <div className="font-lufga font-medium">5.0</div>
        </div>
      </div>

      <div className="m-5 -mt-2 font-lufga text-[--primary] flex gap-1 items-center text-sm">
        <ClockIcon size={16} />
        <p>Aberto até as 23:00</p>
      </div>

      <ScrollArea className="font-lufga font-semibold text-[--muted-foreground] w-full">
        <div className="flex w-max gap-4 p-5 -mt-4">
          {coffeeshop.menuCategories.map((category) => (
            <Button
              key={category.id}
              variant="secondary"
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CoffeeShopCategories;
