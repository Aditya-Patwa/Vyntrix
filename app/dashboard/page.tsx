import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Filter } from "lucide-react";
// import Link from "next/link";


function ProjectCard() {
  return (
    <Card className="group cursor-pointer">
      <CardHeader>
        <CardTitle>Project 1</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="flex justify-between items-center">
        <Badge variant={"secondary"} className="bg-emerald-500 text-white">
          ACTIVE
        </Badge>
        <ChevronRight className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-ease duration-100" />
      </CardFooter>
    </Card>
  )
}



function ProjectSection() {
  return (
    <section className="p-4 py-6 grid gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold tracking-tight leading-none">
          Aditya-Patwa&apos;s Org
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ProjectCard />
        {/* <Card className="border-dashed bg-background">
          <CardHeader className="text-center">
            <CardTitle>New Project</CardTitle>
            <CardDescription>Create New Project</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant={"outline"} className="w-full cursor-pointer flex gap-2 items-center">
              <Plus /> New Project
            </Button>
          </CardFooter>
        </Card> */}
      </div>
    </section>
  )
}




export default function DashboardPage() {
  return (
    <main className="grid">
      <div className="p-4 border-b border-dashed flex items-center gap-2">
        {/* <Link href={"/"}>
          <Button>
            New Project
          </Button>
        </Link> */}

        <Input type="text" placeholder="Search for a project" className="w-full max-w-sm text-xs" />
        <Button variant={"outline"} className="cursor-pointer border-dashed">
          <Filter className="size-4" />
        </Button>
      </div>
      <ProjectSection />
    </main>
  )
}