
"use client";

import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { CoffeeShop, Prisma } from "@prisma/client";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

const ProductDrawer = ({ open, onOpenChange, product }: ProductDrawerProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previousQuantity) => Math.max(1, previousQuantity - 1));
  };

  const totalPrice = (product?.price ?? 0) * quantity;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="flex h-[90dvh] max-h-[90dvh] flex-col overflow-hidden rounded-t-[32px] border-0 bg-white">
        <DrawerTitle className="sr-only">Detalhes do produto</DrawerTitle>

        {product && (
          <>
            <div className="min-h-0 flex-1 overflow-y-auto">
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

                        {group.required &&
                          (group.options.some(
                            (option) => option.id === selectedOption,
                          ) ? (
                            <Check
                              className="h-5 w-5 text-green-500"
                              strokeWidth={3}
                            />
                          ) : (
                            <div className="flex h-5 w-[86px] items-center justify-center rounded-sm bg-black uppercase">
                              <span className="font-lufga text-[10px] font-semibold text-white">
                                OBRIGATÓRIO
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* OPÇÕES */}
                    <div className="py-7">
                      {group.options.map((option) => (
                        <label
                          key={option.id}
                          className="flex cursor-pointer items-center justify-between py-3"
                        >
                          <p className="font-lufga text-lg font-medium">
                            {option.name}
                          </p>

                          <input
                            type="radio"
                            name={`option-${group.id}`}
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={() => setSelectedOption(option.id)}
                            className="h-5 w-5 cursor-pointer border-[--muted-foreground] accent-[--primary]"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RODAPÉ FIXO */}
            <div className="z-20 flex shrink-0 items-center justify-between gap-4 border-t border-gray-100 bg-white px-6 py-8">
              {/* CONTROLE DE QUANTIDADE */}
              <div className="flex shrink-0 items-center gap-4">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  aria-label="Diminuir quantidade"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>

                <span className="font-lufga text-lg font-medium text-black">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Aumentar quantidade"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[--primary] text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* BOTÃO ADICIONAR */}
              <button
                type="button"
                className="flex h-[53px] min-w-0 flex-1 items-center justify-center gap-3 rounded-2xl bg-[--primary] px-4 font-lufga text-md font-semibold text-white"
              >
                <span>Adicionar</span>

                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice)}
                </span>
              </button>
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDrawer;
