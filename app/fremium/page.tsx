import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Footer } from "@/components/footer"
import { FremiumDashboard } from "@/components/fremium-dashboard"

export default function FremiumPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1a1a1a]">
      <DashboardNavbar />
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 relative z-10">
        <div className="w-full max-w-7xl">
          <FremiumDashboard />
        </div>
      </div>
      <Footer />
    </main>
  )
}

