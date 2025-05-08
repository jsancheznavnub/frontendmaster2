import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingPlans } from "@/components/pricing-plans"

export default function PlanesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004F4F80]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-7xl">
          <PricingPlans />
        </div>
      </div>

      <Footer />
    </main>
  )
}

