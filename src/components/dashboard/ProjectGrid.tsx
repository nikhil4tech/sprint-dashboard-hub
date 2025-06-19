
import { MoreHorizontal, Users, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of company website with modern design",
    progress: 75,
    status: "In Progress",
    priority: "High",
    dueDate: "Dec 15, 2024",
    team: [
      { name: "Alice", avatar: "A" },
      { name: "Bob", avatar: "B" },
      { name: "Charlie", avatar: "C" },
    ],
    tasks: { completed: 12, total: 16 },
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "iOS and Android app for customer engagement",
    progress: 45,
    status: "In Progress",
    priority: "Medium",
    dueDate: "Jan 30, 2025",
    team: [
      { name: "David", avatar: "D" },
      { name: "Eva", avatar: "E" },
    ],
    tasks: { completed: 8, total: 20 },
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q1 2025 product launch marketing strategy",
    progress: 90,
    status: "Review",
    priority: "High",
    dueDate: "Dec 10, 2024",
    team: [
      { name: "Frank", avatar: "F" },
      { name: "Grace", avatar: "G" },
      { name: "Henry", avatar: "H" },
    ],
    tasks: { completed: 18, total: 20 },
  },
  {
    id: 4,
    name: "Database Migration",
    description: "Migrate legacy database to new cloud infrastructure",
    progress: 25,
    status: "Planning",
    priority: "Low",
    dueDate: "Feb 15, 2025",
    team: [
      { name: "Ian", avatar: "I" },
      { name: "Jane", avatar: "J" },
    ],
    tasks: { completed: 3, total: 12 },
  },
];

export function ProjectGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge 
                    variant={project.priority === "High" ? "destructive" : project.priority === "Medium" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.priority}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Due {project.dueDate}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{project.tasks.completed}/{project.tasks.total} tasks</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <div className="flex -space-x-2">
                    {project.team.map((member, index) => (
                      <Avatar key={index} className="w-6 h-6 border-2 border-white">
                        <AvatarFallback className="text-xs">{member.avatar}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
