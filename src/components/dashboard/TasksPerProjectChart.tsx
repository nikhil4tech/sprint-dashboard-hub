
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const projectData = [
  { name: "Website Redesign", tasks: 15 },
  { name: "Mobile App", tasks: 12 },
  { name: "Marketing Campaign", tasks: 8 },
  { name: "Analytics Dashboard", tasks: 10 },
  { name: "User Research", tasks: 6 },
];

const chartConfig = {
  tasks: {
    label: "Tasks",
    color: "#3b82f6",
  },
};

export function TasksPerProjectChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks per Project</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="tasks" fill="var(--color-tasks)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
