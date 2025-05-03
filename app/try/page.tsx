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
import { MousePointerClick, Sidebar, Zap } from "lucide-react"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react";




function ProjectName({projectName, setProjectName}:{projectName: string, setProjectName: Dispatch<SetStateAction<string>>;}) {
    return(
        <Dialog defaultOpen={true}>
            <DialogTrigger asChild>
                <Button variant="outline">{projectName} <span><MousePointerClick /></span></Button>
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





function SideBar() {
    return (
        <div className="p-2 md:p-4 border-r border-dashed flex flex-col gap-8">
            <div>
                <Button size={"icon"} className="cursor-pointer" variant={"ghost"}>
                    <Sidebar />
                </Button>
            </div>

            <div className="grid gap-2">
                <NewTable />
            </div>
        </div>
    )
}

export default function Try() {
    const [projectName, setProjectName] = useState("");

    return (
        <main className="w-full h-screen flex flex-col">
            <Header />
            <div className="grid w-full h-full">
                <section className="w-full flex h-full">
                    <SideBar />
                    <div className="w-full h-full grid p-4">
                        <section className="max-w-7xl w-full justify-self-center">
                            <ProjectName projectName={projectName} setProjectName={setProjectName} />
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}