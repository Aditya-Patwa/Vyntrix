"use client"

import type * as React from "react"
// import Image from "next/image"
import {
    BarChartIcon,
    Blocks,
    BookMarked,
    CameraIcon,
    ClipboardListIcon,
    DatabaseIcon,
    FileCodeIcon,
    FileIcon,
    FileTextIcon,
    FolderOpen,
    HelpCircleIcon,
    LayoutDashboardIcon,
    Package,
    SearchIcon,
    Settings2,
    SettingsIcon,
    Table2,
} from "lucide-react"

// import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const data = {
    user: {
        name: "VYNTRIX",
        email: "vyntrixhq@gmail.com",
        avatar: "/VYNTRIX.png",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboardIcon,
        },
        {
            title: "All Projects",
            url: "#",
            icon: FolderOpen,
        },
        {
            title: "Analytics",
            url: "#",
            icon: BarChartIcon,
        },
        {
            title: "Guide",
            url: "#",
            icon: BookMarked,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: CameraIcon,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: FileTextIcon,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: FileCodeIcon,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: SettingsIcon,
        },
        {
            title: "Get Help",
            url: "mailto:vyntrixhq@gmail.com",
            icon: HelpCircleIcon,
        },
        {
            title: "Search",
            url: "#",
            icon: SearchIcon,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: DatabaseIcon,
        },
        {
            name: "Reports",
            url: "#",
            icon: ClipboardListIcon,
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: FileIcon,
        },
    ],

    navProjects: [
        {
            title: "Project Overview",
            url: "overview/",
            icon: LayoutDashboardIcon,
        },
        {
            title: "Table Editor",
            url: "editor/",
            icon: Table2
        },
        {
            title: "Storage",
            url: "storage/",
            icon: Package
        },
        {
            title: "Integrations",
            url: "integrations/",
            icon: Blocks
        },
        {
            title: "Project Settings",
            url: "#",
            icon: Settings2
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

    // Check if route is inside /dashboard/project/*
    const isProjectRoute = pathname.startsWith('/dashboard/project');

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <div className="flex gap-0 items-center mt-1.5">
                                <Link href={"/"} className="text-lg font-semibold tracking-tight leading-none">
                                    VYNTRIX
                                </Link>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={(!isProjectRoute ? data.navMain : data.navProjects)} isProjectRoute={isProjectRoute} />
                {/* <NavDocuments items={data.documents} /> */}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
