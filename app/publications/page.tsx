import { publicationsData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import CustomBarChart from "@/components/charts/bar-chart"
import { publicationsByYearData } from "@/lib/chart-data"

export default function PublicationsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Research Publications</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        I have contributed to several academic and industry-related research works in the fields of mathematics, machine
        learning, and financial modeling.
      </p>

      <div className="mb-12">
        <CustomBarChart
          title="Publications by Year"
          description="My research output over time"
          data={publicationsByYearData}
          height={350}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publicationsData.map((publication) => (
          <Card key={publication.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{publication.title}</CardTitle>
              <CardDescription>
                {publication.journal} • {publication.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{publication.abstract}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <a href={publication.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Publication <ExternalLink size={16} />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Research Profiles</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" asChild>
            <a
              href="https://www.researchgate.net/profile/Idriss-Bado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              ResearchGate <ExternalLink size={16} />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://scholar.google.com/citations?user=CP3DJqYAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Google Scholar <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}

