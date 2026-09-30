import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductDrawerProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDrawer = ({
  open,
  onOpenChange,
  product,
}: ProductDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85dvh] overflow-hidden rounded-t-[32px] border-0 bg-white">
        <DrawerTitle className="sr-only">
          Detalhes do produto
        </DrawerTitle>

        {product && (
          <div className="relative h-64 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute bottom-5 left-6 z-10">
              <div className="flex h-16 items-center rounded-full bg-white px-5 shadow-md">
                <div className="flex flex-col">
                  <h3 className="font-lufga text-sm font-semibold text-black">
                    Loucos por café ®
                  </h3>

                  <p className="font-lufga text-xs text-gray-400">
                    Cafeteria · 15 - 20 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;