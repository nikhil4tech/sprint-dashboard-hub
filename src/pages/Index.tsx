
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProjectGrid } from "@/components/dashboard/ProjectGrid";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { QuickStats } from "@/components/dashboard/QuickStats";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <DashboardHeader />
            </div>
            
            <div className="space-y-6">
              <QuickStats />
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <ProjectGrid />
                </div>
                <div className="xl:col-span-1">
                  <ActivityFeed />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
