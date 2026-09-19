import { prisma } from "@/lib/prisma";

import CoffeeShopCategories from "./components/categories";
import CoffeeShopHeader from "./components/header";

const MenuCategory = async () => {
  const coffeeShop = await prisma.coffeeShop.findFirst();

  if (!coffeeShop) {
    return null;
  }

  return (
    <div>
      <CoffeeShopHeader />
      <CoffeeShopCategories coffeeshop={coffeeShop}/>
    </div>
  );
};

export default MenuCategory;