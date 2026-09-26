"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  return (
    <div className="space-y-3 px-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => setSelectedProduct(product)}
          className="flex items-center justify-between gap-4"
        >
          {/* TEXTO */}
          <div className="flex-1">
            <h3 className="font-lufga text-sm">
              {product.name}
            </h3>

            <p className="line-clamp-2 font-lufga text-sm text-[--muted-foreground]">
              {product.description}
            </p>

            <p className="mt-3 font-lufga text-md font-semibold text-[--secondary] mb-3">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>

          {/* IMAGEM */}
          <div className="relative h-[82px] w-[82px] shrink-0 mb-6">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;