"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useOptimistic } from "react";
import { Product } from "../../typings";
import ProductList from "./ProductList";

export default function AddProductButtonOptimistic({
  products,
}: {
  products: Product[];
}) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Product[],
    { product: string; price: string }
  >(products, (state, item) => [...state, { ...item, sending: true }]);
  const formData = new FormData();
  formData.append("product", "Iphone 20");
  formData.append("price", "999");

  const onClick = () => {
    console.log("click");
    addOptimisticMessage({ product: "Iphone 20", price: "999" });
    addProductToDatabase(formData);
  };
  return (
    <>
      <h2 className="font-bold p-5">List of Products (useOptimistic)</h2>
      <ProductList products={optimisticMessages} />
      <button
        className="fixed bottom-10 left-10 border bg-red-500 text-white p-2 rounded-md w48"
        onClick={onClick}
      >
        Add Iphone (useOptimistic)
      </button>
    </>
  );
}
