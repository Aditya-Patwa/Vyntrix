"use client";
import { NewTable } from "@/components/editor/NewTable"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil, Trash2Icon, Zap } from "lucide-react"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react";
import { ITable } from "@/components/editor/TableTypes";


function ProjectName({ projectName, setProjectName }: { projectName: string, setProjectName: Dispatch<SetStateAction<string>>; }) {
    return (
        <Dialog defaultOpen={true}>
            <DialogTrigger asChild>
                <Button variant="link">{projectName} <span><Pencil className="size-4" /></span></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Project Name</DialogTitle>
                    <DialogDescription>
                        Enter your project details.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid  items-center gap-2">
                        <Label htmlFor="name" className="text-right">
                            Project Name
                        </Label>
                        <Input id="name" placeholder="Enter Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


function Header() {
    return (
        <header className="py-4 px-4 md:px-6 border-b flex justify-between w-full items-center">
            <div>
                <Link href={"/"}>
                    <h1 className="text-2xl font-semibold tracking-tight leading-none">
                        VYNTRIX
                    </h1>
                </Link>
            </div>
            <div className="flex gap-2 items-center">
                <Button className="cursor-pointer">
                    Generate Code
                    <Zap fill="currentColor" />
                </Button>
                <ModeToggle />
            </div>
        </header>
    )
}





// function SideBar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="p-2 md:p-4 border-r border-dashed flex flex-col gap-12">
//             <div>
//                 <Button size={"icon"} className="cursor-pointer" variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
//                     <Sidebar />
//                 </Button>
//             </div>

//             <div className="grid gap-4">
//                 <NewTable  />

//                 {isOpen ? (
//                     <div className="grid gap-2 pt-2 min-w-[160px]">
//                         <div>
//                             <h1 className="text-xs font-semibold text-muted-foreground">
//                                 Tables
//                             </h1>
//                         </div>
//                         <div className="grid gap-1">
//                             <div className="flex">
//                                 <Button variant={"ghost"} className="flex-grow">
//                                     Profile
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <Button variant={"ghost"} size={"icon"} onClick={() => setIsOpen(!isOpen)}>
//                         <Table2 />
//                     </Button>
//                 )}
//             </div>
//         </div >
//     )
// }

export default function Try() {
    const [projectName, setProjectName] = useState("MyVyntrixProject");
    const [tables, setTables] = useState<ITable[]>([]);
    const [currentTable, setCurrentTable] = useState<ITable | null>(null);


    function removeTable(id: string) {
        const filteredTables = tables.filter((t) => t.id == id);
        setTables([...filteredTables]);
    }

    return (
        <main className="w-full h-screen">
            <Header />
            <section className="max-w-7xl p-4 w-full justify-self-center">
                <div className="flex gap-4 items-center justify-end">
                    <ProjectName projectName={projectName} setProjectName={setProjectName} />
                    <NewTable tables={tables} setCurrentTable={setCurrentTable} setTables={setTables} />
                </div>

                {tables.length <= 0 ? (
                    <div className="max-w-3xl w-full justify-self-center grid w-full py-16 gap-4">
                        <div className="grid gap-2">
                            <h1 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-none">
                                Start by creating <br /> your first table.
                            </h1>
                            <p className="text-sm md:text-base text-muted-foreground w-full max-w-lg">
                                Define the structure of your Solana smart contract with intuitive, table-like accounts.
                                Click below to add a table and begin building your logic visually.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <NewTable tables={tables} setCurrentTable={setCurrentTable} setTables={setTables} />
                        </div>
                    </div>
                ) : (
                    <section className="flex flex-col md:flex-row gap-4 py-8">
                        <div className="max-w-[240px] w-full p-4 grid gap-4 rounded-2xl">
                            <div>
                                <h1 className="text-muted-foreground text-sm font-semibold">
                                    Tables
                                </h1>
                            </div>

                            <div className="grid gap-2">
                                {tables.map((table) =>
                                    <div key={table.id} className="flex">
                                        <Button variant={"ghost"} className={"flex-grow justify-between " + (currentTable?.id == table.id && "bg-muted")} onClick={() => setCurrentTable(table)}>
                                            {table.name}
                                        </Button>
                                        <Button size={"icon"} variant={"ghost"} onClick={() => removeTable(table.id)}>
                                            <Trash2Icon />
                                        </Button>
                                    </div>
                                )}
                                <div className="flex justify-start">
                                    <NewTable tables={tables} setCurrentTable={setCurrentTable} setTables={setTables} />
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>
                    </section>
                )}
            </section>
        </main>
    )
}

// <main className="w-full h-screen flex flex-col">
//     <Header />
//     <div className="grid w-full h-full">
//         <section className="w-full flex h-full">
//             <SideBar />
//             <div className="w-full h-full space-y-4 p-4">
//                 <section className="max-w-7xl w-full justify-self-center">
//                     <ProjectName projectName={projectName} setProjectName={setProjectName} />
//                 </section>


//                 <div>
//                     <div>
//                         <h1>
//                             Start By Creating Table
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
// </main>