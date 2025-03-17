import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { projectsData } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import StackedBarChart from "./charts/stacked-bar-chart"
import { projectDistributionData } from "@/lib/chart-data"

export default function Projects() {
  // Display only featured projects on the homepage
  const featuredProjects = projectsData.filter((project) => project.featured).slice(0, 3)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work across machine learning, data science, and software engineering
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-12">
          <StackedBarChart
            title="Project Distribution by Technology"
            description="Number of projects completed by year and technology"
            data={projectDistributionData}
            keys={["Machine Learning", "Web Development", "Data Engineering", "Financial Modeling"]}
            colors={["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]}
            height={350}
          />

          <div className="grid grid-cols-1 gap-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Project Highlights</CardTitle>
                <CardDescription>Key achievements across different domains</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <p>Developed machine learning models that improved financial risk prediction by 35%</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <p>Built scalable data pipelines processing over 10TB of financial data daily</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <p>Created interactive dashboards for real-time market analysis used by 500+ traders</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <p>Implemented algorithmic trading systems that outperformed market benchmarks by 12%</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Import Card components for the Project Highlights card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

