import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactCards } from "@/components/contact-cards"

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#004F4F80]">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-start px-4 py-12 relative z-10">
        <div className="w-full max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactInfo />
            <ContactForm />
          </div>

          <ContactCards />
        </div>
      </div>

      <Footer />
    </main>
  )
}

