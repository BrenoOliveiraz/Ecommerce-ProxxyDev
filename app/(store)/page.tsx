import Footer from "@/components/Footer";
import ProductsView from "@/components/ProductsView";

import ValentineDayBanner from "@/components/ValentineDayBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home() {
  const products = await getAllProducts()
  const categories = await getAllCategories()


  return (
<div>
  <ValentineDayBanner />

<div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">


<ProductsView categories={categories} products = {products}/>
</div>
<Footer />
</div>
  );
}
