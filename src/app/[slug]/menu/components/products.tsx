import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3 px-6">
      {products.map((product) => (
        <div
          key={product.id}
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

            <p className="mt-3 font-lufga text-lg font-semibold text-[--secondary]">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>

          {/* IMAGEM */}
          <div className="relative h-[82px] w-[82px] shrink-0">
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