import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ProductDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDrawer = ({ open, onOpenChange }: ProductDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[90dvh] bg-white">
        <DrawerTitle className="sr-only">
          Detalhes do produto
        </DrawerTitle>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;