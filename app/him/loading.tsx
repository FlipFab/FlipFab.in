import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <main className="p-4 grid grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </main>
  );
}
