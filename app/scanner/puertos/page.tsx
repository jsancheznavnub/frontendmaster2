import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Footer } from "@/components/footer"
import { PortScanner } from "@/components/port-scanner"
import type { VulnerabilityEntry } from "@/components/vulnerabilities-table"

export default function PortScannerPage() {
  // Example data for the port scanner
  const exampleEntries: VulnerabilityEntry[] = [
    {
      id: 1,
      port: 22,
      protocol: "TCP",
      service: "SSH",
      product: "OpenSSH",
      version: "8.9p1",
      osType: "Linux",
      cpe: "cpe:/a:openbed:openssh:8.9p1",
      firstSeen: "2025/01/01",
      lastSeen: "2025/01/01",
      info: "Acceso remoto al servidor",
      severity: "medium",
    },
    {
      id: 2,
      port: 80,
      protocol: "TCP",
      service: "HTTP",
      product: "Nginx",
      version: "1.18.0",
      osType: "Linux",
      cpe: "cpe:/a:nginx:nginx:1.18.0",
      firstSeen: "2025/01/01",
      lastSeen: "2025/01/01",
      info: "Servidor web",
      severity: "low",
    },
    {
      id: 3,
      port: 443,
      protocol: "TCP",
      service: "HTTPS",
      product: "Nginx",
      version: "1.18.0",
      osType: "Linux",
      cpe: "cpe:/a:nginx:nginx:1.18.0",
      firstSeen: "2025/01/01",
      lastSeen: "2025/01/01",
      info: "Servidor web seguro",
      severity: "low",
    },
    {
      id: 4,
      port: 3306,
      protocol: "TCP",
      service: "MySQL",
      product: "MySQL",
      version: "8.0.32",
      osType: "Linux",
      cpe: "cpe:/a:mysql:mysql:8.0.32",
      firstSeen: "2025/01/01",
      lastSeen: "2025/01/01",
      info: "Base de datos MySQL",
      severity: "high",
    },
    {
      id: 5,
      port: 21,
      protocol: "TCP",
      service: "FTP",
      product: "vsftpd",
      version: "3.0.3",
      osType: "Linux",
      cpe: "cpe:/a:vsftpd:vsftpd:3.0.3",
      firstSeen: "2025/01/01",
      lastSeen: "2025/01/01",
      info: "Servidor FTP",
      severity: "critical",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#1a1a1a]">
      <DashboardNavbar />
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 relative z-10">
        <div className="w-full max-w-7xl">
          <PortScanner initialEntries={exampleEntries} targetUrl="www.wingsoft.com" />
        </div>
      </div>
      <Footer />
    </main>
  )
}

