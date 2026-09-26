import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const ProductDrawer = () => {
  return (
    <Drawer>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Detalhes do produto</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;