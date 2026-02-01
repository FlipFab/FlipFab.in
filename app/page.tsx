import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl gold mb-8">FlipFab</h1>
      <div className="flex gap-6">
        <Link href="/him" className="border px-8 py-4 border-yellow-600">FOR HIM</Link>
        <Link href="/her" className="border px-8 py-4 border-yellow-600">FOR HER</Link>
      </div>
    </main>
  )
}
