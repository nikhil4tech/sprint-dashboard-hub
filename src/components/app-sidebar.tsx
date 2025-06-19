
import { Calendar, Home, FolderOpen, Users, Settings, Plus, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderOpen,
  },
  {
    title: "Tasks",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Team",
    url: "#",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const projects = [
  { name: "Website Redesign", color: "bg-blue-500" },
  { name: "Mobile App", color: "bg-green-500" },
  { name: "Marketing Campaign", color: "bg-purple-500" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg">ProjectHub</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 mb-4">
            <Button className="w-full justify-start gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              New Project
            </Button>
          </div>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-blue-50 hover:text-blue-700">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recent Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild className="hover:bg-gray-50">
                    <a href="#" className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${project.color}`} />
                      <span className="text-sm">{project.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@company.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
