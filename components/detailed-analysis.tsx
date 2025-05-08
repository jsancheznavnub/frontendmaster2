import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export function DetailedAnalysis() {
  // Datos de ejemplo para el gráfico de barras
  const vulnerabilityData = [
    { name: "Crítico", value: 2, color: "#ef4444" },
    { name: "Alto", value: 1, color: "#f97316" },
    { name: "Medio", value: 3, color: "#eab308" },
    { name: "Bajo", value: 2, color: "#22c55e" },
  ]

  // Datos de ejemplo para el gráfico circular
  const serviceData = [
    { name: "SSH", value: 3, color: "#3b82f6" },
    { name: "HTTP/S", value: 2, color: "#8b5cf6" },
    { name: "MySQL", value: 1, color: "#ec4899" },
    { name: "FTP", value: 1, color: "#f43f5e" },
  ]

  return (
    <div className="rounded-lg border border-secondary-color bg-black/30 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(1,223,223,0.3)]">
      <h2 className="text-xl font-bold text-white mb-4">Análisis Detallado</h2>

      <Tabs defaultValue="vulnerabilities" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="vulnerabilities">Vulnerabilidades</TabsTrigger>
          <TabsTrigger value="services">Servicios</TabsTrigger>
        </TabsList>

        <TabsContent value="vulnerabilities" className="pt-4">
          <h3 className="text-lg font-semibold text-white mb-4">Distribución de Vulnerabilidades por Severidad</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vulnerabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#01DFDF", color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#01DFDF" }}
                />
                <Bar dataKey="value">
                  {vulnerabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-300 mt-4">
            El gráfico muestra la distribución de vulnerabilidades por nivel de severidad. Las vulnerabilidades críticas
            y de alta severidad requieren atención inmediata.
          </p>
        </TabsContent>

        <TabsContent value="services" className="pt-4">
          <h3 className="text-lg font-semibold text-white mb-4">Distribución de Servicios Detectados</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "#01DFDF", color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#01DFDF" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-300 mt-4">
            El gráfico muestra la distribución de los servicios detectados en el escaneo. Cada servicio puede tener
            diferentes niveles de riesgo dependiendo de su configuración.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

