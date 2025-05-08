"use client"

import { VulnerabilityCards, type VulnerabilityCVE } from "./vulnerability-cards"

interface VulnerabilitiesSectionProps {
  vulnerabilities: VulnerabilityCVE[]
}

export function VulnerabilitiesSection({ vulnerabilities }: VulnerabilitiesSectionProps) {
  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-xl font-bold text-white mb-6">Vulnerabilidades Encontradas</h2>
      <div className="grid gap-6">
        <VulnerabilityCards vulnerabilities={vulnerabilities} />
      </div>
    </div>
  )
}

