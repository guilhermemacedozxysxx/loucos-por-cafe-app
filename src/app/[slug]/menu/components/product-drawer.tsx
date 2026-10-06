import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { CoffeeShop, Prisma } from "@prisma/client";
import Image from "next/image";

type ProductWithOptions = Prisma.ProductGetPayload<{
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
}>;

interface ProductDrawerProps {
  product: ProductWithOptions | null;
  coffeeshop: CoffeeShop;
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
      <DrawerContent className="max-h-[90dvh] overflow-hidden rounded-t-[32px] border-0 bg-white">
        <DrawerTitle className="sr-only">
          Detalhes do produto
        </DrawerTitle>

        {product && (
          <div className="h-full overflow-y-scroll">
            {/* IMAGEM */}
            <div className="relative h-80 w-full shrink-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* CARD DA CAFETERIA */}
              <div className="absolute bottom-5 left-6 z-10">
                <div className="flex h-12 w-72 items-center gap-3 rounded-full bg-white px-2">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[--primary]">
                    <Image
                      src="/images/LOGO.svg"
                      alt="Logo Loucos por Café"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-lufga text-xs font-medium text-black">
                      Loucos por café ®
                    </h3>

                    <p className="font-lufga text-[10px] text-gray-400">
                      Cafeteria · 15 - 20 min
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div className="relative z-10 -mt-3 w-full rounded-t-xl bg-white px-6 py-8">
              <h1 className="mb-1 font-lufga text-lg font-semibold">
                {product.name}
              </h1>

              <p className="font-lufga text-sm text-[--muted-foreground]">
                {product.description}
              </p>

              <span className="mt-4 block font-lufga text-lg font-semibold text-[--secondary]">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </span>

              {/* GRUPOS DE OPÇÕES */}
              {product.optionGroups.map(({ group }) => (
                <div key={group.id} className="mt-8 space-y-4">
                  <div>
                    <h2 className="font-lufga text-lg font-semibold text-[--muted-foreground]">
                      {group.name}
                    </h2>

                    <div className="flex w-full items-center justify-between">
                      <p className="font-lufga text-sm text-[--muted-foreground]">
                        Escolha {group.maxSelect}{" "}
                        {group.maxSelect === 1 ? "opção" : "opções"}
                      </p>

                      {group.required && (
                        <div className="flex h-5 w-[86px] items-center justify-center rounded-sm bg-black uppercase">
                          <span className="font-lufga text-[10px] font-semibold text-white">
                            OBRIGATÓRIO
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* OPÇÕES */}
                  <div className="rounded-xl bg-gray-100 p-4">
                    {group.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between py-3"
                      >
                        <p className="font-lufga text-sm">
                          {option.name}
                        </p>

                        <p className="font-lufga text-sm">
                          +{" "}
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(option.price)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;