import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import CustomRadialBarChart from "./charts/radial-bar-chart"
import { skillsProficiencyData } from "@/lib/chart-data"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi there, I'm Idriss Bado
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Machine Learning Specialist | Mathematician | Software Engineer | Risk Management Expert
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="max-w-[600px] md:text-lg">
                I love solving complex problems using data-driven approaches and building scalable systems. My expertise
                spans across machine learning, software engineering, risk management, and financial modeling.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    View My Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomRadialBarChart
              title="Core Expertise"
              data={skillsProficiencyData}
              height={350}
              className="w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

