"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import type React from "react"

// Re-export the Recharts components
export {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  RechartsTooltip as Tooltip,
  XAxis,
  YAxis,
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
}

interface ChartTooltipProps {
  children: React.ReactNode
}

export const ChartTooltip = ({ children }: ChartTooltipProps) => {
  return <div className="rounded-md border bg-popover p-4 text-popover-foreground shadow-md">{children}</div>
}

interface ChartTooltipContentProps {
  children: React.ReactNode
}

export const ChartTooltipContent = ({ children }: ChartTooltipContentProps) => {
  return <div>{children}</div>
}

interface ChartContainerProps {
  children: React.ReactNode
}

export const ChartContainer = ({ children }: ChartContainerProps) => {
  return <div className="w-full h-full">{children}</div>
}

