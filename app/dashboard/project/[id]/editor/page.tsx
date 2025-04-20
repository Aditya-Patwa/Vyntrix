import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";




function SelectType() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Column Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Types</SelectLabel>
                    <SelectItem value="int">Int</SelectItem>
                    <SelectItem value="pubkey">Pubkey</SelectItem>
                    <SelectItem value="char">char</SelectItem>
                    <SelectItem value="string">String</SelectItem>
                    <SelectItem value="bool">Boolean</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}



function ColumnTable() {
    return (
        <Table>
            <TableCaption>A list of your columns.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Default Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">
                        <Input type="text" placeholder="Column Name" />
                    </TableCell>
                    <TableCell className="font-medium">
                        <SelectType />
                    </TableCell>
                    <TableCell className="font-medium">
                        <Input type="text" placeholder="Default Value" />
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>
                        <Button size={"sm"} variant={"outline"}>
                            Add Column
                        </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}



function NewTable() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex gap-1" variant={"outline"}>
                    <Plus /> New Table
                </Button>
            </SheetTrigger>
            <SheetContent className="max-w-screen min-w-sm md:min-w-xl w-full flex flex-col p-0">
                <SheetHeader className="border-b">
                    <SheetTitle>Create a new table</SheetTitle>
                    <SheetDescription>
                        Create new table under your project VYNTRIX.
                    </SheetDescription>
                </SheetHeader>
                <section className="grid w-full divide-y divide-dashed flex-1 overflow-y-auto">
                    <div className="p-4 grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">
                                Name
                            </Label>
                            <Input type="text" id="name" placeholder="Enter Table Name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="desc">
                                Description
                            </Label>
                            <Textarea id="desc" placeholder="Enter Table Description" />
                        </div>
                    </div>

                    <div className="p-4 grid gap-4">
                        <div>
                            <h1 className="text-md font-medium">
                                Columns
                            </h1>
                        </div>

                        <ColumnTable />
                    </div>
                </section>
                <SheetFooter className="flex flex-row justify-end border-t bg-background">
                    <SheetClose asChild>
                        <Button variant={"outline"} size={"sm"}>Cancel</Button>
                    </SheetClose>
                    <Button size={"sm"}>
                        Create Table
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}



function SelectTable() {
    return (
        <Select>
            <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="Select a table" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tables</SelectLabel>
                    <SelectItem value="users">Users</SelectItem>
                    <SelectItem value="profile">Profile</SelectItem>
                    <SelectItem value="payment">Payment</SelectItem>
                    <SelectItem value="posts">Posts</SelectItem>
                    <SelectItem value="comments">Comments</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


export default async function Editor() {
    return (
        <main className="grid">
            <section className="bg-neutral-50 dark:bg-neutral-950 w-full border-b border-dashed px-4 py-6 md:px-6 md:py-8 grid sm:flex items-center justify-between gap-6">
                <div className="grid gap-1">
                    <h1 className="text-lg font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                    {/* </div> */}
                    <p className="text-xl text-muted-foreground">
                        Table Editor
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <div>
                        <SelectTable />
                    </div>
                    <div>
                        <NewTable />
                    </div>
                </div>
            </section>

            <section className="w-full h-full grid">
                <Card className="max-w-xs md:max-w-sm w-full justify-self-center my-12 mx-8">
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
                </Card>
            </section>
        </main>
    )
}