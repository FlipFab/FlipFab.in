import "./globals.css"
import Navbar from "../components/Navbar"
import ForYouSidebar from "../components/ForYouSidebar"

export const metadata = {
  title: "FlipFab",
  description: "Flip your style",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 border-r border-gray-800">
            <ForYouSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
