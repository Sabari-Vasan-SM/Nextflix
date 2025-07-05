import { Navigation } from "@/components/ui/navigation";

export default function Browse() {
  return (
    <div className="min-h-screen bg-nextflix-dark">
      <Navigation />

      <main className="pt-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Browse</h1>
          <div className="bg-nextflix-gray rounded-lg p-8 text-center">
            <h2 className="text-2xl text-white mb-4">Browse Content</h2>
            <p className="text-gray-400">
              This page would contain browsing functionality, filters, and
              search results.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
