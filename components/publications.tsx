import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { publicationsData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CustomBarChart from "./charts/bar-chart"
import { publicationsByYearData } from "@/lib/chart-data"

export default function Publications() {
  // Display only a few publications on the homepage
  const featuredPublications = publicationsData.slice(0, 2)

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Publications</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My contributions to academic and industry research
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-1">
            <CustomBarChart
              title="Publications by Year"
              description="Number of research papers published"
              data={publicationsByYearData}
              height={300}
            />
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {featuredPublications.map((publication) => (
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
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Publication <ExternalLink size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/publications" className="flex items-center gap-2">
              View All Publications <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

