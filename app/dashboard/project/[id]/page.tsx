export default async function ProjectPage({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params

    return (
        <h1>
            Project ID: {id}
            <br />
            <span className="text-sm text-muted-foreground">This is the project page.</span>
        </h1>
    )
}