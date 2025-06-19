
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

const ganttData = [
  {
    project: "Website Redesign",
    phase: "Design Phase",
    start: 0,
    duration: 14,
    status: "completed",
    color: "#10b981",
  },
  {
    project: "Website Redesign", 
    phase: "Development",
    start: 12,
    duration: 21,
    status: "in-progress",
    color: "#f59e0b",
  },
  {
    project: "Website Redesign",
    phase: "Testing & Launch",
    start: 30,
    duration: 7,
    status: "pending",
    color: "#6b7280",
  },
  {
    project: "Mobile App",
    phase: "Research",
    start: 0,
    duration: 10,
    status: "completed", 
    color: "#10b981",
  },
  {
    project: "Mobile App",
    phase: "Wireframing",
    start: 8,
    duration: 12,
    status: "completed",
    color: "#10b981",
  },
  {
    project: "Mobile App",
    phase: "Development",
    start: 18,
    duration: 25,
    status: "in-progress",
    color: "#f59e0b",
  },
  {
    project: "Marketing Campaign",
    phase: "Strategy",
    start: 0,
    duration: 8,
    status: "completed",
    color: "#10b981",
  },
  {
    project: "Marketing Campaign",
    phase: "Content Creation",
    start: 6,
    duration: 15,
    status: "in-progress",
    color: "#f59e0b",
  },
  {
    project: "Analytics Dashboard",
    phase: "Requirements",
    start: 0,
    duration: 5,
    status: "completed",
    color: "#10b981",
  },
  {
    project: "Analytics Dashboard",
    phase: "Design",
    start: 4,
    duration: 12,
    status: "pending",
    color: "#6b7280",
  },
];

const chartConfig = {
  duration: {
    label: "Duration (days)",
    color: "#3b82f6",
  },
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "in-progress":
      return "bg-yellow-100 text-yellow-800";
    case "pending":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ProjectGanttChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-sm">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded"></div>
              <span className="text-sm">Pending</span>
            </div>
          </div>

          {/* Gantt Chart */}
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ganttData}
                layout="horizontal"
                margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  domain={[0, 45]}
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  type="category" 
                  dataKey="phase"
                  tick={{ fontSize: 10 }}
                  width={120}
                />
                <ChartTooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border rounded shadow-lg">
                          <p className="font-semibold">{data.project}</p>
                          <p className="text-sm">{data.phase}</p>
                          <p className="text-sm">Duration: {data.duration} days</p>
                          <Badge className={getStatusBadgeColor(data.status)}>
                            {data.status}
                          </Badge>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="duration" radius={[0, 4, 4, 0]}>
                  {ganttData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Project List */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Project Phases</h4>
            <div className="space-y-2">
              {ganttData.reduce((acc, item) => {
                const existing = acc.find(p => p.project === item.project);
                if (!existing) {
                  acc.push({
                    project: item.project,
                    phases: [item]
                  });
                } else {
                  existing.phases.push(item);
                }
                return acc;
              }, [] as any[]).map((projectGroup) => (
                <div key={projectGroup.project} className="border rounded p-3">
                  <h5 className="font-medium mb-2">{projectGroup.project}</h5>
                  <div className="flex flex-wrap gap-2">
                    {projectGroup.phases.map((phase: any, index: number) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className={getStatusBadgeColor(phase.status)}
                      >
                        {phase.phase}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
