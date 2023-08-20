import React from "react";
import { Product } from "../../typings";

function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map(({ id, product, price }) => (
          <div key={id} className="p-5 shadow">
            <p>{product}</p>
            <p>${price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
