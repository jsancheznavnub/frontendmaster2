import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

interface RecommendationItemProps {
  title: string
  description: string
  status: "implemented" | "recommended" | "critical"
}

function RecommendationItem({ title, description, status }: RecommendationItemProps) {
  const getStatusIcon = () => {
    switch (status) {
      case "implemented":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "recommended":
        return <Shield className="h-6 w-6 text-yellow-500" />
      case "critical":
        return <AlertTriangle className="h-6 w-6 text-red-500" />
      default:
        return null
    }
  }

  const getStatusClass = () => {
    switch (status) {
      case "implemented":
        return "border-green-500/30 bg-green-500/10"
      case "recommended":
        return "border-yellow-500/30 bg-yellow-500/10"
      case "critical":
        return "border-red-500/30 bg-red-500/10"
      default:
        return ""
    }
  }

  return (
    <div className={`rounded-lg border p-4 ${getStatusClass()}`}>
      <div className="flex items-start gap-4">
        <div className="mt-1">{getStatusIcon()}</div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function SecurityRecommendations() {
  const recommendations: RecommendationItemProps[] = [
    {
      title: "Certificado SSL implementado correctamente",
      description: "Tu sitio web utiliza HTTPS con un certificado SSL válido de Let's Encrypt.",
      status: "implemented",
    },
    {
      title: "Actualizar versión de OpenSSH",
      description:
        "La versión actual de OpenSSH (8.9p1) tiene vulnerabilidades conocidas. Recomendamos actualizar a la última versión.",
      status: "recommended",
    },
    {
      title: "Desactivar acceso FTP",
      description:
        "El servidor FTP (puerto 21) representa un riesgo de seguridad significativo. Recomendamos desactivarlo o reemplazarlo por SFTP.",
      status: "critical",
    },
    {
      title: "Restringir acceso a la base de datos MySQL",
      description:
        "El puerto 3306 (MySQL) es accesible públicamente. Recomendamos restringir el acceso mediante reglas de firewall.",
      status: "critical",
    },
  ]

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-xl font-bold text-white mb-4">Recomendaciones de Seguridad</h2>
      <div className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <RecommendationItem
            key={index}
            title={recommendation.title}
            description={recommendation.description}
            status={recommendation.status}
          />
        ))}
      </div>
    </div>
  )
}

