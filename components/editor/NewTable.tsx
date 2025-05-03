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
import { Button } from "../ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";


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



export function NewTable() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex gap-1 rounded-full" size={"icon"} variant={"outline"}>
                    <Plus />
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
