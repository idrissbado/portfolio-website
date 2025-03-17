"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface StackedBarChartProps {
  title: string
  description?: string
  data: any[]
  keys: string[]
  colors?: string[]
  height?: number
  className?: string
}

export default function StackedBarChart({
  title,
  description,
  data,
  keys,
  colors,
  height = 300,
  className = "",
}: StackedBarChartProps) {
  // Define a color palette if not provided
  const defaultColors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#0088fe",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#a4de6c",
    "#d0ed57",
  ]

  const chartColors = colors || defaultColors

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
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={40} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <ChartTooltip>
                          <ChartTooltipContent>
                            <div className="font-medium">{payload[0].payload.name}</div>
                            {payload.map((entry, index) => (
                              <div key={`tooltip-${index}`} className="flex items-center">
                                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                                <span className="font-medium">{entry.name}: </span>
                                <span className="ml-1">{entry.value}</span>
                              </div>
                            ))}
                          </ChartTooltipContent>
                        </ChartTooltip>
                      )
                    }
                    return null
                  }}
                />
                <Legend />
                {keys.map((key, index) => (
                  <Bar
                    key={`bar-${key}`}
                    dataKey={key}
                    stackId="a"
                    fill={chartColors[index % chartColors.length]}
                    radius={index === keys.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
                    className="animate-in fade-in duration-1000"
                    isAnimationActive={true}
                    animationDuration={1500}
                    animationBegin={index * 200}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

