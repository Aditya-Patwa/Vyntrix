import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 md:gap-6">  
                            {children}
                            {/* <SectionCards />
                            <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                            </div>
                            <DataTable data={data} /> */}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}