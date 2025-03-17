import { projectsData } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import StackedBarChart from "@/components/charts/stacked-bar-chart"
import { projectDistributionData } from "@/lib/chart-data"

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on, showcasing my skills in machine learning, data science, software
        engineering, and financial modeling.
      </p>

      <div className="mb-12">
        <StackedBarChart
          title="Project Distribution by Technology and Year"
          description="Overview of my project focus areas over time"
          data={projectDistributionData}
          keys={["Machine Learning", "Web Development", "Data Engineering", "Financial Modeling"]}
          colors={["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]}
          height={400}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}

