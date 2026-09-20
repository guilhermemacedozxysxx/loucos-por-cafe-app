import { CoffeeShop } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface CoffeeShopCategoriesProps {
  coffeeshop: CoffeeShop;
}

const CoffeeShopCategories = ({coffeeshop}: CoffeeShopCategoriesProps) => {
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
          <h2 className="font-lufga font-semibold text-lg">{coffeeshop.name}</h2>
          <p className="font-lufga font-normal text-[secondary] opacity-40 text-sm">Cafeteria</p>
        </div>

        <div className="w-16 h-6 ml-14 mt-2 border border-neutral-200 bg-white rounded-full flex px-3 gap-1">
          <div className="bg-[--primary]"><i className="fi fi-sr-star"></i></div>
          <div className="font-lufga font-medium">5.0</div>
        </div>
      </div>

        <div className="m-5 -mt-2 font-lufga text-[--primary] flex gap-1 items-center text-sm">
          <ClockIcon size={16}/>
          <p>Aberto até as 23:00</p>
        </div>
    </div>
   );
}

export default CoffeeShopCategories;