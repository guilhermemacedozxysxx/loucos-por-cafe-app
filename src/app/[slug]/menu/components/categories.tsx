import { CoffeeShop } from "@prisma/client";
import Image from "next/image";

interface CoffeeShopCategoriesProps {
  coffeeshop: CoffeeShop;
}

const CoffeeShopCategories = ({coffeeshop}: CoffeeShopCategoriesProps) => {
  return ( 
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="flex items-center gap-3">
        <Image
          src="/images/LOGO.svg"
          alt="Loucos por Café"
          width={45}
          height={45}
          priority
        />

        <div>
          <h2>{coffeeshop.name}</h2>
        </div>
      </div>
    </div>
   );
}
 
export default CoffeeShopCategories;