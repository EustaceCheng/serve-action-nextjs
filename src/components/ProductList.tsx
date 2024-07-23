"use client";
import React from "react";
import { Product } from "../../typings";
import clsx from "clsx";

function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-wrap gap-5">
        {products.map(({ id, product, price, sending }) => (
          <div key={id} className={clsx("p-5 shadow", sending && "opacity-50")}>
            <p>{product}</p>
            <p>${price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
