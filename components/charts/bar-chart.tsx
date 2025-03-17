"use client"

import type React from "react"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface BarChartProps {
  title: string
  description?: string
  data: {
    name: string
    value: number
    color?: string
  }[]
  height?: number
  className?: string
}

export default function CustomBarChart({ title, description, data, height = 300, className = "" }: BarChartProps) {
  // Define a color palette
  const colors = [
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

  // Assign colors to data points if not already assigned
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || colors[index % colors.length],
  }))

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
              <BarChart data={dataWithColors} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={70}
                />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} width={40} />
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
                                style={{ backgroundColor: payload[0].payload.color }}
                              />
                              <span>{payload[0].value}</span>
                            </div>
                          </ChartTooltipContent>
                        </ChartTooltip>
                      )
                    }
                    return null
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                  fill="var(--color)"
                  className="animate-in fade-in duration-1000"
                  isAnimationActive={true}
                  animationDuration={1500}
                  barSize={30}
                >
                  {dataWithColors.map((entry, index) => (
                    <rect
                      key={`rect-${index}`}
                      fill={entry.color}
                      style={{ "--color": entry.color } as React.CSSProperties}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

