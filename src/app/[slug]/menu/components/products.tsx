import { Product } from "@prisma/client";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3">
      {products.map((product) => (
        <div key={product.id}>
          <h3 className="font-lufga text-sm font-medium">
            {product.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Products;