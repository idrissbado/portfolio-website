"use client"

import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface RadialBarChartProps {
  title: string
  description?: string
  data: {
    name: string
    value: number
    fill: string
  }[]
  height?: number
  className?: string
}

export default function CustomRadialBarChart({
  title,
  description,
  data,
  height = 300,
  className = "",
}: RadialBarChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div style={{ height: `${height}px` }}>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="80%"
                barSize={20}
                data={data}
                startAngle={180}
                endAngle={0}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={12}
                  label={{ position: "insideStart", fill: "#fff", fontWeight: 600 }}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{ paddingLeft: "10px" }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <ChartTooltip>
                          <ChartTooltipContent>
                            <div className="font-medium">{payload[0].payload.name}</div>
                            <div className="flex items-center">
                              <div
                                className="w-2 h-2 rounded-full mr-2"
                                style={{ backgroundColor: payload[0].payload.fill }}
                              />
                              <span>{payload[0].value}%</span>
                            </div>
                          </ChartTooltipContent>
                        </ChartTooltip>
                      )
                    }
                    return null
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

