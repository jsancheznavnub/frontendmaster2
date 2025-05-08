"use client"

import { useState } from "react"
import { VulnerabilitiesTable, type VulnerabilityEntry } from "./vulnerabilities-table"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface PortScannerProps {
  initialEntries?: VulnerabilityEntry[]
  targetUrl?: string
}

export function PortScanner({ initialEntries = [], targetUrl }: PortScannerProps) {
  const [entries, setEntries] = useState<VulnerabilityEntry[]>(initialEntries)
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)

  const handleScan = async () => {
    if (!targetUrl) return

    setIsScanning(true)
    setScanComplete(false)

    // Simulate a scan with a delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // In a real application, you would call your API here
    // const response = await fetch(`/api/scan-ports?url=${encodeURIComponent(targetUrl)}`)
    // const data = await response.json()
    // setEntries(data.entries)

    // For demo purposes, we'll just use the initial entries
    setEntries(initialEntries)

    setIsScanning(false)
    setScanComplete(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Escaneo de Puertos</h2>
        <div className="flex items-center gap-2">
          {targetUrl && (
            <span className="text-secondary-color">
              Target: <span className="text-white">{targetUrl}</span>
            </span>
          )}
          <Button
            onClick={handleScan}
            disabled={isScanning || !targetUrl}
            className="bg-[#1a8585] hover:bg-[#1a8585]/90"
          >
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Escaneando...
              </>
            ) : (
              "Iniciar Escaneo"
            )}
          </Button>
        </div>
      </div>

      {entries.length > 0 ? (
        <VulnerabilitiesTable entries={entries} title="Puertos Detectados" />
      ) : scanComplete ? (
        <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
          <p className="text-white">No se encontraron puertos abiertos.</p>
        </div>
      ) : null}
    </div>
  )
}

