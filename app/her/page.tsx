import products from "@/lib/products"
import ProductCard from "@/components/ProductCard"

export default function Her() {
  const list = products.filter(p => p.gender !== "him")
  return (
    <main className="p-4 grid grid-cols-2 gap-4">
      {list.map(p => <ProductCard key={p.slug} product={p} />)}
    </main>
  )
}
