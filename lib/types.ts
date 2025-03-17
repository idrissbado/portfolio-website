export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demoUrl?: string
    githubUrl?: string
    featured: boolean
  }
  
  export interface Publication {
    id: number
    title: string
    journal: string
    year: number
    abstract: string
    url: string
  }
  
  