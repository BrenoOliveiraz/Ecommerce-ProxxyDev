import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getAllProducts()
  const categories = await getAllCategories()


  return (
<div>

<div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">

<ProductsView categories={categories} products = {products}/>
</div>
</div>
  );
}
