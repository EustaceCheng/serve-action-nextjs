import { addProductToDatabase } from "@/actions/serverActions";
import { Product } from "../../typings";
import AddProductButton from "@/components/AddProductButton";
import AddProductButtonOptimistic from "@/components/AddProductButtonOptimistic";
import ProductList from "@/components/ProductList";
import { env } from "../env.mjs";

const API_DOMAIN = env.API_DOMAIN;

export default async function Home() {
  const res = await fetch(API_DOMAIN + "products", {
    cache: "no-cache",
    next: { tags: ["products"] },
  });
  const products: Product[] = await res.json();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter Product name..."
          className="border border-gray-300 p-2 rounded-md "
        />
        <input
          name="price"
          placeholder="Enter Price..."
          className="border border-gray-300 p-2 rounded-md "
        />
        <button className=" border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
      <h2 className="font-bold p-5">List of Products </h2>
      <ProductList products={products} />

      <AddProductButton />
      <AddProductButtonOptimistic products={products} />
    </main>
  );
}
