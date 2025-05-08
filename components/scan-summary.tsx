import type React from "react"
import { InfoIcon } from "lucide-react"

interface ScanInfoItemProps {
  title: string
  value: string
  infoTooltip?: string
}

function ScanInfoItem({ title, value, infoTooltip }: ScanInfoItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-secondary-color font-medium">{title}</h3>
        <button
          type="button"
          className="text-secondary-color hover:text-white transition-colors"
          aria-label={`Información sobre ${title}`}
          title={infoTooltip || `Información sobre ${title}`}
        >
          <InfoIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="text-white">{value}</p>
      <div className="mt-2 border-t border-secondary-color/30"></div>
    </div>
  )
}

interface ScanCardProps {
  children: React.ReactNode
}

function ScanCard({ children }: ScanCardProps) {
  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      {children}
    </div>
  )
}

export interface ScanSummaryProps {
  urlInfo: {
    name: string
    ip: string
    location: string
  }
  serverInfo: {
    dnsProviders: string
    webServer: string
  }
  securityInfo: {
    ssl: string
    redirection: string
  }
}

export function ScanSummary({ urlInfo, serverInfo, securityInfo }: ScanSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ScanCard>
        <ScanInfoItem title="Nombre de la URL" value={urlInfo.name} infoTooltip="El nombre de dominio analizado" />
        <ScanInfoItem
          title="IP del dominio"
          value={`${urlInfo.ip} (${urlInfo.location})`}
          infoTooltip="La dirección IP y ubicación del servidor"
        />
      </ScanCard>

      <ScanCard>
        <ScanInfoItem
          title="Proveedores DNS"
          value={serverInfo.dnsProviders}
          infoTooltip="Los servidores DNS que resuelven este dominio"
        />
        <ScanInfoItem
          title="Servidor web"
          value={serverInfo.webServer}
          infoTooltip="El software del servidor web y sistema operativo"
        />
      </ScanCard>

      <ScanCard>
        <ScanInfoItem title="Seguridad" value={securityInfo.ssl} infoTooltip="Información sobre el certificado SSL" />
        <ScanInfoItem
          title="Redirección web"
          value={securityInfo.redirection}
          infoTooltip="Tipo de redirección configurada en el sitio"
        />
      </ScanCard>
    </div>
  )
}

