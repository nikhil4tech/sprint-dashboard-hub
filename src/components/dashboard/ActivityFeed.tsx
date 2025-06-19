
import { Clock, MessageSquare, CheckCircle, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "task_completed",
    user: "Alice Johnson",
    userAvatar: "AJ",
    action: "completed task",
    target: "Homepage Design Review",
    project: "Website Redesign",
    time: "2 minutes ago",
    icon: CheckCircle,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    id: 2,
    type: "comment",
    user: "Bob Smith",
    userAvatar: "BS",
    action: "commented on",
    target: "Mobile App Wireframes",
    project: "Mobile App",
    time: "15 minutes ago",
    icon: MessageSquare,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: 3,
    type: "team_joined",
    user: "Charlie Brown",
    userAvatar: "CB",
    action: "joined project",
    target: "Marketing Campaign",
    project: "Marketing Campaign",
    time: "1 hour ago",
    icon: Users,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    id: 4,
    type: "file_uploaded",
    user: "Diana Prince",
    userAvatar: "DP",
    action: "uploaded file",
    target: "Project Requirements.pdf",
    project: "Database Migration",
    time: "2 hours ago",
    icon: FileText,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    id: 5,
    type: "task_completed",
    user: "Eve Wilson",
    userAvatar: "EW",
    action: "completed task",
    target: "API Integration Testing",
    project: "Mobile App",
    time: "3 hours ago",
    icon: CheckCircle,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
];

export function ActivityFeed() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Recent Activity</CardTitle>
          <Badge variant="outline" className="text-xs">
            Live
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-2 rounded-full ${activity.iconBg} flex-shrink-0`}>
              <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Avatar className="w-5 h-5">
                  <AvatarFallback className="text-xs">{activity.userAvatar}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-900">{activity.user}</span>
              </div>
              
              <p className="text-sm text-gray-600">
                {activity.action} <span className="font-medium">{activity.target}</span>
              </p>
              
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {activity.project}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-2">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
