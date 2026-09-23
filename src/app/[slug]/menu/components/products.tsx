import { Product } from "@prisma/client";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3 px-6">
      {products.map((product) => (
        <div key={product.id}>
          <h3 className="font-lufga text-sm">{product.name}</h3>

          <p className="font-lufga text-sm text-[--muted-foreground] line-clamp-2">
            {product.description}
          </p>
          <p className="font-lufga font-semibold text-lg text-[--secondary] mt-3">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>
        </div>
      ))}

      <div className="relative min-h-[82px] min-w-[120px]">

      </div>
    </div>
  );
};

export default Products;
