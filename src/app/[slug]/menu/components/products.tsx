import { Product } from "@prisma/client";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3">
      {products.map((product) => (
        <div key={product.id}>
          <h3 className="font-lufga text-sm">
            {product.name}
          </h3>

          <p className="font-lufga text-sm text-[--muted-foreground] line-clamp-2">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;