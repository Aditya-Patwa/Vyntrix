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
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2Icon } from "lucide-react";
import { Switch } from "../ui/switch";
import { Field, FieldType, ITable } from "./TableTypes";
import { useState } from "react";



function ColumnTable({ fields, setFields }: { fields: Field[], setFields: React.Dispatch<React.SetStateAction<Field[]>> }) {
    function addField() {
        setFields([...fields, { id: crypto.randomUUID(), name: "", type: null, isKey: null }])
    }


    function handleFieldChange(index: number, key: string, value: string | FieldType | boolean) {
        const newFields = [...fields!];
        newFields[index] = { ...newFields[index], [key]: value };
        setFields([...newFields]);
    }

    function removeField(id: string) {
        const filteredFields = fields.filter((f) => f.id !== id);

        setFields([...filteredFields]);
    }

    return (
        <Table>
            <TableCaption>A list of your fields.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Key Field</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {fields!.map((field, i) =>
                    <TableRow key={field.id}>
                        <TableCell className="font-medium">
                            <Input type="text" placeholder="Field Name" value={field.name} onChange={(e) => handleFieldChange(i, "name", e.target.value)} />
                        </TableCell>
                        <TableCell className="font-medium">
                            <Select onValueChange={(v) => handleFieldChange(i, "type", v)}>
                                <SelectTrigger id="field-type">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pubkey">PubKey</SelectItem>
                                    <SelectItem value="u8">u8</SelectItem>
                                    <SelectItem value="u16">u16</SelectItem>
                                    <SelectItem value="u32">u32</SelectItem>
                                    <SelectItem value="u64">u64</SelectItem>
                                    <SelectItem value="i8">i8</SelectItem>
                                    <SelectItem value="i16">i16</SelectItem>
                                    <SelectItem value="i32">i32</SelectItem>
                                    <SelectItem value="i64">i64</SelectItem>
                                    <SelectItem value="string">String</SelectItem>
                                    <SelectItem value="bool">Boolean</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell className="font-medium">
                            <Select onValueChange={(v) => handleFieldChange(i, "type", v == "yes")}>
                                <SelectTrigger id="key-field">
                                    <SelectValue placeholder="Is key?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <Button size={"icon"} variant={"link"} onClick={() => removeField(field.id)}>
                                <Trash2Icon className="text-rose-500" />
                            </Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>
                        <Button size={"sm"} variant={"outline"} onClick={addField}>
                            Add Field
                        </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}



export function NewTable({ tables, setCurrentTable, setTables }: { tables: ITable[], setCurrentTable: React.Dispatch<React.SetStateAction<ITable | null>>, setTables: React.Dispatch<React.SetStateAction<ITable[]>> }) {
    const [fields, setFields] = useState<Field[]>([{ id: crypto.randomUUID(), name: "", type: null, isKey: null }]);
    const [tableDetails, setTableDetails] = useState({ id: crypto.randomUUID(), name: "", editable: true, deletable: true })

    function createTable() {
        setTables([...tables, { ...tableDetails, fields: fields }]);
        setCurrentTable({...tableDetails, fields: fields});
    }


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex gap-1" variant={"outline"}>
                    New Table <Plus />
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
                            <Input type="text" id="name" placeholder="Enter Table Name" value={tableDetails.name} onChange={(e) => setTableDetails({ ...tableDetails, name: e.target.value })} />
                        </div>
                        {/* <div className="grid gap-2">
                            <Label htmlFor="desc">
                                Description
                            </Label>
                            <Textarea id="desc" placeholder="Enter Table Description" />
                        </div> */}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center space-x-2">
                                <Label htmlFor="editable">
                                    Editable
                                </Label>
                                <Switch id="editable" checked={tableDetails.editable} onCheckedChange={() => setTableDetails({ ...tableDetails, editable: !tableDetails.editable })} />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Label htmlFor="deletable">
                                    Deletable
                                </Label>
                                <Switch id="deletable" checked={tableDetails.deletable} onCheckedChange={() => setTableDetails({ ...tableDetails, deletable: !tableDetails.deletable })} />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 grid gap-4">
                        <div>
                            <h1 className="text-md font-medium">
                                Fields
                            </h1>
                        </div>

                        <ColumnTable fields={fields} setFields={setFields} />
                    </div>
                </section>
                <SheetFooter className="flex flex-row justify-end border-t bg-background">
                    <SheetClose asChild>
                        <Button variant={"outline"} size={"sm"}>Cancel</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button size={"sm"} onClick={createTable}>
                            Create Table
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
