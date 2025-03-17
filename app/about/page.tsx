import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomBarChart from "@/components/charts/bar-chart"
import StackedBarChart from "@/components/charts/stacked-bar-chart"
import { languagesProficiencyData, projectDistributionData } from "@/lib/chart-data"

export default function AboutPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Idriss Bado"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Idriss Bado</CardTitle>
              <CardDescription>Machine Learning Specialist | Mathematician | Software Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I am a passionate Machine Learning Specialist, Mathematician, Statistician, Software Engineer, and
                Expert in Risk Management and Financial Modeling. I love solving complex problems using data-driven
                approaches and building scalable systems.
              </p>
              <p>
                My expertise spans across machine learning, software engineering, risk management & financial modeling,
                data science & analytics, and engineering. I enjoy building data pipelines and working with advanced
                tools and technologies to solve real-world problems.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Education & Background</h2>
            <ul className="space-y-4">
              <li className="p-4 border rounded-lg">
                <h3 className="font-medium">Advanced Mathematics and Statistics</h3>
                <p className="text-muted-foreground">Specialized in number theory and statistical modeling</p>
              </li>
              <li className="p-4 border rounded-lg">
                <h3 className="font-medium">Software Engineering</h3>
                <p className="text-muted-foreground">Expertise in building scalable and efficient systems</p>
              </li>
              <li className="p-4 border rounded-lg">
                <h3 className="font-medium">Financial Risk Management</h3>
                <p className="text-muted-foreground">
                  Specializing in stress testing, backtesting, and quantitative finance
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <CustomBarChart
          title="Programming Languages Proficiency"
          description="Skill level in various programming languages"
          data={languagesProficiencyData}
          height={350}
        />

        <StackedBarChart
          title="Project Distribution"
          description="Projects completed by year and technology"
          data={projectDistributionData}
          keys={["Machine Learning", "Web Development", "Data Engineering", "Financial Modeling"]}
          colors={["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]}
          height={350}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Professional Journey</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Senior Machine Learning Engineer</CardTitle>
              <CardDescription>FinTech Solutions Inc. | 2020 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Led the development of advanced ML models for financial risk assessment</li>
                <li>Implemented real-time data processing pipelines handling over 10TB daily</li>
                <li>Reduced prediction error rates by 35% through novel algorithm optimization</li>
                <li>Mentored junior data scientists and engineers in best practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Scientist</CardTitle>
              <CardDescription>Global Analytics Corp | 2017 - 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed predictive models for market trend analysis</li>
                <li>Created interactive dashboards for business intelligence</li>
                <li>Collaborated with cross-functional teams to implement data-driven solutions</li>
                <li>Published research on novel statistical approaches to financial modeling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Associate</CardTitle>
              <CardDescription>Institute of Mathematical Sciences | 2015 - 2017</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conducted research in number theory and cryptographic applications</li>
                <li>Published papers in peer-reviewed mathematical journals</li>
                <li>Presented findings at international mathematics conferences</li>
                <li>Collaborated with computer scientists on algorithm optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

