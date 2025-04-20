import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default async function Editor() {
    return (
        <main className="grid">
            <section className="bg-neutral-50 dark:bg-neutral-950 w-full border-b border-dashed px-4 py-6 md:px-6 md:py-8 grid sm:flex items-center justify-between gap-6">
                <div className="grid gap-1">
                    <h1 className="text-lg font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        IPFS Storage
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <div>
                        <Select>
                            <SelectTrigger className="min-w-[180px]" size="sm">
                                <SelectValue placeholder="Select a storage bucket" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Storage</SelectLabel>
                                    <SelectItem value="media">Media</SelectItem>
                                    <SelectItem value="docs">Documents</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Button size={"sm"} variant={"outline"}>
                            <Plus /> Add Bucket
                        </Button>
                    </div>
                </div>
            </section>

            <section className="w-full h-full grid">
                {/* <Card className="max-w-xs md:max-w-sm w-full justify-self-center my-12 mx-8">
                    <CardHeader>
                        <CardTitle>
                            Table Editor
                        </CardTitle>
                        <CardDescription>
                            Select a table from dropdown to view its data.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <SelectTable />
                    </CardContent>
                </Card> */}
            </section>
        </main>
    )
}