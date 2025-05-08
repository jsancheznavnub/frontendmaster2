"use client"
import { SeveritySummary } from "./severity-summary"
import { ScanSummary } from "./scan-summary"
import { VulnerabilitiesTable, type VulnerabilityEntry } from "./vulnerabilities-table"
import { SecurityRecommendations } from "./security-recommendations"
import { DetailedAnalysis } from "./detailed-analysis"
import Link from "next/link"

export function FremiumDashboard() {
  // Example data for the scan summary
  const scanData = {
    urlInfo: {
      name: "www.wingsoft.com",
      ip: "172.208.107.79",
      location: "Estados Unidos",
    },
    serverInfo: {
      dnsProviders: "sage.ns.cloudflare.com / robin.ns.cloudflare.com (Cloudflare)",
      webServer: "Nginx 1.18.0 sobre Ubuntu Linux",
    },
    securityInfo: {
      ssl: "SSL certificado válido de Let's Encrypt con cifrados seguros",
      redirection: "HTTP redirige a HTTPS (puerto 443)",
    },
  }

  // Example data for vulnerabilities table
  const vulnerabilityEntries: VulnerabilityEntry[] = [
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
    <div className="space-y-6">
      <div className="rounded-lg border border-secondary-color bg-[#006F6F] backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          ¡Bienvenido a la versión Fremium de HackAnalyzer!
        </h2>
        <p className="text-white text-center mb-6">
          Ahora tienes acceso a información más detallada sobre las vulnerabilidades de tu sitio web y recomendaciones
          de seguridad.
        </p>
      </div>

      <SeveritySummary />

      <ScanSummary urlInfo={scanData.urlInfo} serverInfo={scanData.serverInfo} securityInfo={scanData.securityInfo} />

      <VulnerabilitiesTable entries={vulnerabilityEntries} />

      <SecurityRecommendations />

      <DetailedAnalysis />

      <div className="rounded-lg border border-secondary-color bg-[#006F6F] backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          ¿Quieres acceder a todas las funcionalidades premium?
        </h2>
        <p className="text-white text-center mb-6">
          Actualiza a un plan de pago para obtener análisis completos y soporte personalizado
        </p>
        <div className="flex justify-center">
          <Link
            href="/planes"
            className="bg-[#1a8585] hover:bg-[#1a8585]/90 text-white font-medium px-10 py-3 rounded-lg shadow-md transition-colors"
          >
            Ver planes
          </Link>
        </div>
      </div>
    </div>
  )
}

