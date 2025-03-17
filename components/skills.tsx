import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomBarChart from "./charts/bar-chart"
import { languagesProficiencyData, mlFrameworksData, cloudPlatformsData } from "@/lib/chart-data"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Java", "C++", "JavaScript", "SQL", "Scala"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Node.js", "React", "Express.js"],
  },
  {
    title: "Machine Learning & Data Science",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Keras"],
  },
  {
    title: "Big Data & Cloud",
    skills: ["Apache Spark", "Hadoop", "AWS", "Google Cloud", "Azure"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "Jenkins", "Linux"],
  },
]

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical skills and areas of expertise span across multiple domains
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <CustomBarChart
            title="Programming Languages"
            description="Proficiency level (0-100)"
            data={languagesProficiencyData}
            height={300}
          />

          <CustomBarChart
            title="ML Frameworks"
            description="Expertise level (0-100)"
            data={mlFrameworksData}
            height={300}
          />

          <CustomBarChart
            title="Cloud Platforms"
            description="Experience level (0-100)"
            data={cloudPlatformsData}
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.skills.length} skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

