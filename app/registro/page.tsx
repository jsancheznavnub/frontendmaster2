import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export default function RegistroPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004F4F80]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md">
          <RegistrationForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}

