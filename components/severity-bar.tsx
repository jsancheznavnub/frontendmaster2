import { InfoIcon } from "lucide-react"

type SeverityLevel = "low" | "medium" | "high" | "critical"

interface SeverityCounts {
  low: number
  medium: number
  high: number
  critical: number
}

interface SeverityBarProps {
  title: string
  counts: SeverityCounts
  totalCount?: number
}

export function SeverityBar({ title, counts, totalCount }: SeverityBarProps) {
  // Format number to always show two digits with leading zeros
  const formatCount = (count: number) => {
    return count < 10 ? `0${count}` : count.toString()
  }

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <InfoIcon className="text-secondary-color h-5 w-5" />
        </div>
        {totalCount !== undefined && (
          <div className="text-white font-bold">
            {totalCount} {title}
          </div>
        )}
      </div>

      <div className="relative pt-6">
        {/* Severity markers with counts */}
        <div className="flex justify-between absolute w-full top-[-24px]">
          <div className="flex flex-col items-center">
            <span className="text-xs text-green-400">Low</span>
            <span className="text-xs text-gray-400">({formatCount(counts.low)})</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-yellow-400">Medium</span>
            <span className="text-xs text-gray-400">({formatCount(counts.medium)})</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-orange-400">High</span>
            <span className="text-xs text-gray-400">({formatCount(counts.high)})</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-red-400">Critical</span>
            <span className="text-xs text-gray-400">({formatCount(counts.critical)})</span>
          </div>
        </div>

        {/* Severity bar */}
        <div className="h-4 w-full flex rounded-md overflow-hidden">
          <div className="bg-green-500 h-full" style={{ width: "25%" }} />
          <div className="bg-yellow-500 h-full" style={{ width: "25%" }} />
          <div className="bg-orange-500 h-full" style={{ width: "25%" }} />
          <div className="bg-red-500 h-full" style={{ width: "25%" }} />
        </div>
      </div>
    </div>
  )
}

