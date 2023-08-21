"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { experimental_useOptimistic as useOptimistic } from "react";

import { Product } from "../../typings";
import ProductList from "./ProductList";

export default function AddProductButtonOptimistic({
  products,
}: {
  products: Product[];
}) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    products,
    (state, { product, price }) => [...state, { product, price }]
  );
  const formData = new FormData();
  formData.append("product", "Iphone 20");
  formData.append("price", "999");

  const onClick = () => {
    addOptimisticMessage({ product: "Iphone 20", price: "999" });
    addProductToDatabase(formData);
  };
  return (
    <>
      <ProductList products={optimisticMessages} />
      <button
        className="fixed bottom-10 left-10 border bg-red-500 text-white p-2 rounded-md w48"
        onClick={onClick}
      >
        Add Iphone
      </button>
    </>
  );
}
