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
import { toast } from "sonner";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



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


function Header({ generatedCode, generateCode }: { generatedCode: string, generateCode: () => void }) {
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
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button className="cursor-pointer" onClick={generateCode}>
                            Generate Code
                            <Zap fill="currentColor" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-5xl">
                            <DrawerHeader>
                                <DrawerTitle>Generated Rust Code</DrawerTitle>
                                <DrawerDescription>Anchor-based Rust code for your Solana smart contract</DrawerDescription>
                            </DrawerHeader>


                            <pre className="bg-neutral-900 text-neutral-50 p-4 rounded-md overflow-auto max-h-[40vh]">
                                <code>
                                    {generatedCode || "// Generate code by creating tables and fields, then click 'Generate Code'"}
                                </code>
                            </pre>


                            <DrawerFooter className="max-w-lg w-full flex flex-grow flex-row">
                                <Button onClick={() => {
                                    navigator.clipboard.writeText(generatedCode);
                                    toast.success("Code Copied!")
                                }}>Copy Code</Button>
                                <DrawerClose className="grid">
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>

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
    const [generatedCode, setGeneratedCode] = useState("")

    function removeTable(id: string) {
        const filteredTables = tables.filter((t) => t.id !== id);
        setTables([...filteredTables]);
    }



    const generateCode = () => {
        if (tables.length === 0) {
            toast.error("Please create at least one table with fields");
            setGeneratedCode("// Please create at least one table with fields")
            return
        }

        let code = `
use anchor_lang::prelude::*;
    
declare_id!("11111111111111111111111111111111");
    
#[program]
pub mod ${projectName.toLowerCase().replace(/\s+/g, "_")} {
    use super::*;
    
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
    `

        // Add functions for each table
        tables.forEach((table) => {
            const snakeCaseName = table.name.toLowerCase().replace(/\s+/g, "_")

            // Create function
            code += `
    pub fn create_${snakeCaseName}(ctx: Context<Create${table.name}>${table.fields
                    .map((field) => {
                        if (field.type === "string") {
                            return `, ${field.name.toLowerCase()}: String`
                        } else {
                            return `, ${field.name.toLowerCase()}: ${field.type}`
                        }
                    })
                    .join("")}) -> Result<()> {
        let ${snakeCaseName} = &mut ctx.accounts.${snakeCaseName};
    ${table.fields
                    .map((field) => {
                        if (field.type === "string") {
                            return `        ${snakeCaseName}.${field.name.toLowerCase()} = ${field.name.toLowerCase()};`
                        } else {
                            return `        ${snakeCaseName}.${field.name.toLowerCase()} = ${field.name.toLowerCase()};`
                        }
                    })
                    .join("\n")}
    ${table.editable || table.deletable ? `        ${snakeCaseName}.authority = ctx.accounts.user.key();` : ""}
        Ok(())
    }
    `

            // Edit function if table is editable
            if (table.editable) {
                code += `
    pub fn edit_${snakeCaseName}(ctx: Context<Edit${table.name}>${table.fields
                        .map((field) => {
                            if (field.type === "string") {
                                return `, ${field.name.toLowerCase()}: String`
                            } else {
                                return `, ${field.name.toLowerCase()}: ${field.type}`
                            }
                        })
                        .join("")}) -> Result<()> {
        let ${snakeCaseName} = &mut ctx.accounts.${snakeCaseName};
    ${table.fields
                        .map((field) => {
                            if (field.type === "string") {
                                return `        ${snakeCaseName}.${field.name.toLowerCase()} = ${field.name.toLowerCase()};`
                            } else {
                                return `        ${snakeCaseName}.${field.name.toLowerCase()} = ${field.name.toLowerCase()};`
                            }
                        })
                        .join("\n")}
        Ok(())
    }
    `
            }

            // Delete function if table is deletable
            if (table.deletable) {
                code += `
    pub fn delete_${snakeCaseName}(ctx: Context<Delete${table.name}>) -> Result<()> {
        // The account will be closed and lamports will be returned to the authority
        Ok(())
    }`
            }
        })

code += `
}
    
    `

        // Add account structs
        tables.forEach((table) => {
            const keyFields = table.fields.filter((field) => field.isKey)

            // Create account struct
            code += `
#[derive(Accounts)]
pub struct Create${table.name}<'info> {
    #[account(init, payer = user, space = 8 + ${table.fields.length * 32}${table.editable || table.deletable ? " + 32" : ""})]
    pub ${table.name.toLowerCase()}: Account<'info, ${table.name}>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
    
    `

            // Edit account struct if table is editable
            if (table.editable) {
                code += `
#[derive(Accounts)]
pub struct Edit${table.name}<'info> {
    #[account(mut, has_one = authority)]
    pub ${table.name.toLowerCase()}: Account<'info, ${table.name}>,
    pub authority: Signer<'info>,
}    
    `
            }

            // Delete account struct if table is deletable
            if (table.deletable) {
                code += `
#[derive(Accounts)]
pub struct Delete${table.name}<'info> {
    #[account(mut, has_one = authority, close = authority)]
    pub ${table.name.toLowerCase()}: Account<'info, ${table.name}>,
    #[account(mut)]
    pub authority: Signer<'info>,
}
    
    `
}

            // Account data struct
            code += `
#[account]
pub struct ${table.name} {
    ${table.fields
                    .map((field) => {
                        if (field.type === "string") {
                            return `    pub ${field.name.toLowerCase()}: String,`
                        } else {
                            return `pub ${field.name.toLowerCase()}: ${field.type},`
                        }
                    })
                    .join("\n")}
    ${table.editable || table.deletable ? `pub authority: Pubkey,` : ""}
}
    
    `
        })

        // Add Initialize struct
        code += `
#[derive(Accounts)]
pub struct Initialize {}
    `

        setGeneratedCode(code);
    }

    return (
        <main className="w-full h-screen">
            <Header generatedCode={generatedCode} generateCode={generateCode} />
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