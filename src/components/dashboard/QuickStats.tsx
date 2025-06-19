
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 from last month",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Team Members",
    value: "8",
    change: "+1 new this week",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Pending Tasks",
    value: "24",
    change: "-3 from yesterday",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Completed",
    value: "156",
    change: "+12 this week",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
