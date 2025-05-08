import { SeverityBar } from "./severity-bar"

export function SeveritySummary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <SeverityBar title="Hosts" counts={{ low: 0, medium: 0, high: 0, critical: 2 }} totalCount={2} />
      <SeverityBar title="Vulnerabilities" counts={{ low: 0, medium: 0, high: 0, critical: 0 }} totalCount={224} />
    </div>
  )
}

