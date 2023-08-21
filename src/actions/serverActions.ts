"use server";

import { revalidateTag } from "next/cache";
import { env } from "../env.mjs";

const API_DOMAIN = env.API_DOMAIN;

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();
  const rnd = Math.random();
  if (rnd > 0.5) {
    console.log("fail");
    return;
  }

  if (!product || !price) return;
  await fetch(API_DOMAIN + "products", {
    method: "POST",
    body: JSON.stringify({ product, price }),
    headers: { "Content-Type": "application/json" },
  });
  revalidateTag("products");
};
