import products from "@/lib/products"
import ProductCard from "@/components/ProductCard"

export default function Him() {
  const list = products.filter(p => p.gender !== "her")
  return (
    <main className="p-4 grid grid-cols-2 gap-4">
      {list.map(p => <ProductCard key={p.slug} product={p} />)}
    </main>
  )
}
