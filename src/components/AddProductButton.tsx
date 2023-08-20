"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

export default function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Iphone 20");
  formData.append("price", "999");

  return (
    <button
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w48"
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : "Add Iphone"}
    </button>
  );
}
