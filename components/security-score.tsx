"use client"

import { Shield } from "lucide-react"

interface SecurityScoreProps {
  securityScore?: number
  securityGrade?: string
}

export function SecurityScore({ securityScore = 76.25, securityGrade = "A+" }: SecurityScoreProps) {
  // Determinar el color basado en la calificación
  const getGradeColor = (grade: string) => {
    switch (grade.charAt(0)) {
      case "A":
        return "text-green-500 border-green-500 bg-green-900/20"
      case "B":
        return "text-blue-500 border-blue-500 bg-blue-900/20"
      case "C":
        return "text-yellow-500 border-yellow-500 bg-yellow-900/20"
      case "D":
        return "text-orange-500 border-orange-500 bg-orange-900/20"
      case "E":
        return "text-red-500 border-red-500 bg-red-900/20"
      default:
        return "text-gray-500 border-gray-500 bg-gray-900/20"
    }
  }

  const gradeColor = getGradeColor(securityGrade)

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-xl font-bold text-white mb-4">Puntuación de Seguridad Global</h2>

      <div className="flex flex-col md:flex-row items-center justify-between bg-black/40 rounded-lg p-4 border border-secondary-color/50">
        <div className="flex items-center mb-4 md:mb-0">
          <Shield className="h-12 w-12 text-secondary-color mr-4" />
          <div>
            <div className="text-white text-sm">Estado de Seguridad</div>
            <div className="text-3xl font-bold text-white">
              {securityScore.toFixed(2)}
              <span className="text-lg text-gray-400">/100</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-white text-sm mb-1">Calificación</div>
          <div className={`text-4xl font-bold ${gradeColor} border-2 rounded-lg px-4 py-2`}>{securityGrade}</div>
        </div>
      </div>
    </div>
  )
}

