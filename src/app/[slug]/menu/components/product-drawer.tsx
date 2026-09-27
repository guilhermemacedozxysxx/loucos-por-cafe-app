import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductDrawerProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDrawer = ({ open, onOpenChange, product }: ProductDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85dvh] bg-white rounded-t-[32px] overflow-hidden border-0">
        <DrawerTitle className="sr-only">Detalhes do produto</DrawerTitle>

        {product && (
          <div className="relative h-64 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;
