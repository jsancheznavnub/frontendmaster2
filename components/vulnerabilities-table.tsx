"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"

export interface VulnerabilityEntry {
  id: number
  port: number
  protocol: string
  service: string
  product: string
  version: string
  osType: string
  cpe: string
  firstSeen: string
  lastSeen: string
  info: string
  severity?: "low" | "medium" | "high" | "critical"
}

interface VulnerabilitiesTableProps {
  entries: VulnerabilityEntry[]
  title?: string
}

export function VulnerabilitiesTable({ entries, title = "Vulnerabilidades Encontradas" }: VulnerabilitiesTableProps) {
  const [sortField, setSortField] = useState<keyof VulnerabilityEntry>("id")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const handleSort = (field: keyof VulnerabilityEntry) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const sortedEntries = [...entries].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return 0
  })

  const getSeverityColor = (severity?: "low" | "medium" | "high" | "critical") => {
    switch (severity) {
      case "low":
        return "bg-green-500/20"
      case "medium":
        return "bg-yellow-500/20"
      case "high":
        return "bg-orange-500/20"
      case "critical":
        return "bg-red-500/20"
      default:
        return ""
    }
  }

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-xl font-bold text-white mb-4">Puertos Encontrados</h2>

      {/* Desktop view - only visible on md and larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-secondary-color/30">
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("id")}>
                <div className="flex items-center whitespace-nowrap">
                  #
                  {sortField === "id" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("port")}>
                <div className="flex items-center whitespace-nowrap">
                  Port
                  {sortField === "port" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("protocol")}>
                <div className="flex items-center whitespace-nowrap">
                  Protocol
                  {sortField === "protocol" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("service")}>
                <div className="flex items-center whitespace-nowrap">
                  Service
                  {sortField === "service" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("product")}>
                <div className="flex items-center whitespace-nowrap">
                  Product
                  {sortField === "product" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("version")}>
                <div className="flex items-center whitespace-nowrap">
                  Version
                  {sortField === "version" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("osType")}>
                <div className="flex items-center whitespace-nowrap">
                  OS Type
                  {sortField === "osType" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("cpe")}>
                <div className="flex items-center whitespace-nowrap">
                  CPE
                  {sortField === "cpe" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("firstSeen")}>
                <div className="flex items-center whitespace-nowrap">
                  First seen
                  {sortField === "firstSeen" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color cursor-pointer" onClick={() => handleSort("lastSeen")}>
                <div className="flex items-center whitespace-nowrap">
                  Last seen
                  {sortField === "lastSeen" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </div>
              </th>
              <th className="p-3 text-secondary-color">Info</th>
            </tr>
          </thead>
          <tbody>
            {sortedEntries.map((entry) => (
              <tr
                key={entry.id}
                className={`border-b border-secondary-color/30 hover:bg-black/40 ${getSeverityColor(entry.severity)}`}
              >
                <td className="p-3 text-white text-sm">{entry.id}</td>
                <td className="p-3 text-white text-sm">{entry.port}</td>
                <td className="p-3 text-white text-sm">{entry.protocol}</td>
                <td className="p-3 text-white text-sm">{entry.service}</td>
                <td className="p-3 text-white text-sm">{entry.product}</td>
                <td className="p-3 text-white text-sm">{entry.version}</td>
                <td className="p-3 text-white text-sm">{entry.osType}</td>
                <td className="p-3 text-white font-mono text-sm">{entry.cpe}</td>
                <td className="p-3 text-white text-sm">{entry.firstSeen}</td>
                <td className="p-3 text-white text-sm">{entry.lastSeen}</td>
                <td className="p-3 text-white text-sm">{entry.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view - only visible on smaller than md screens */}
      <div className="md:hidden space-y-4">
        {sortedEntries.map((entry) => (
          <div
            key={entry.id}
            className={`rounded-lg border border-secondary-color bg-black/30 overflow-hidden ${getSeverityColor(entry.severity)}`}
          >
            <div className="flex justify-between items-center p-3 cursor-pointer" onClick={() => toggleRow(entry.id)}>
              <div className="flex items-center">
                <span className="text-white mr-2">#{entry.id}</span>
                <span className="text-secondary-color">{entry.service}</span>
                <span className="text-white mx-2">|</span>
                <span className="text-white">{entry.port}</span>
              </div>
              <ChevronRight
                className={`h-5 w-5 text-secondary-color transition-transform ${
                  expandedRows.includes(entry.id) ? "rotate-90" : ""
                }`}
              />
            </div>

            {expandedRows.includes(entry.id) && (
              <div className="p-4 border-t border-secondary-color/30 space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary-color">Port</span>
                  <span className="text-white text-sm">{entry.port}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Protocol</span>
                  <span className="text-white text-sm">{entry.protocol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Service</span>
                  <span className="text-white text-sm">{entry.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Product</span>
                  <span className="text-white text-sm">{entry.product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Version</span>
                  <span className="text-white text-sm">{entry.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">OS Type</span>
                  <span className="text-white text-sm">{entry.osType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">CPE</span>
                  <span className="text-white font-mono text-sm">{entry.cpe}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">First seen</span>
                  <span className="text-white text-sm">{entry.firstSeen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Last seen</span>
                  <span className="text-white text-sm">{entry.lastSeen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-color">Info</span>
                  <span className="text-white text-sm">{entry.info}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

