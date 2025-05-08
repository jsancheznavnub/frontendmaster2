import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004F4F80]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}

