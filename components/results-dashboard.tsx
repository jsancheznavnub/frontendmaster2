"use client"
import { SeveritySummary } from "./severity-summary"
import { ScanSummary } from "./scan-summary"
import { SecurityScore } from "./security-score"
import { VulnerabilitiesTable, type VulnerabilityEntry } from "./vulnerabilities-table"
import { VulnerabilitiesSection } from "./vulnerabilities-section"
import type { VulnerabilityCVE } from "./vulnerability-cards"
import Link from "next/link"

export function ResultsDashboard() {
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
  ]

  const vulnerabilitiesCVE: VulnerabilityCVE[] = [
    {
      id: "1337DAY-ID-36300",
      severity: "Crítico",
      description: "Para ver el contenido haga click aquí",
      remediation: "Para ver el contenido haga click aquí",
      score: 9.8,
      puerto: "22",
      servicio: "SSH",
    },
    {
      id: "1337DAY-ID-36300",
      severity: "High",
      description: "Para ver el contenido haga click aquí",
      remediation: "Para ver el contenido haga click aquí",
      score: 7.5,
      puerto: "80",
      servicio: "HTTP",
    },
    {
      id: "1337DAY-ID-36300",
      severity: "Medium",
      description: "Para ver el contenido haga click aquí",
      remediation: "Para ver el contenido haga click aquí",
      score: 5.2,
      puerto: "443",
      servicio: "HTTPS",
    },
    {
      id: "1337DAY-ID-36300",
      severity: "Low",
      description: "Para ver el contenido haga click aquí",
      remediation: "Para ver el contenido haga click aquí",
      score: 3.1,
      puerto: "21",
      servicio: "FTP",
    },
  ]

  return (
    <div className="space-y-6">
      <SecurityScore securityScore={76.25} securityGrade="A+" />

      <SeveritySummary />

      <ScanSummary urlInfo={scanData.urlInfo} serverInfo={scanData.serverInfo} securityInfo={scanData.securityInfo} />

      <VulnerabilitiesTable entries={vulnerabilityEntries} />

      <VulnerabilitiesSection vulnerabilities={vulnerabilitiesCVE} />

      <div className="rounded-lg border border-secondary-color bg-[#006F6F] backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          ¿Deseas obtener información detallada sobre las vulnerabilidades de tu sitio
          <br />y cómo proteger tus sistemas?
        </h2>
        <p className="text-white text-center mb-6">Regístrate para acceder a más información</p>
        <div className="flex justify-center">
          <Link
            href="/registro"
            className="bg-[#1a8585] hover:bg-[#1a8585]/90 text-white font-medium px-10 py-3 rounded-lg shadow-md transition-colors"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}

