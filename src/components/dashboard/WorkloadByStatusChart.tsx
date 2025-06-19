
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const statusData = [
  { status: "To Do", count: 25, color: "#6b7280" },
  { status: "In Progress", count: 18, color: "#f59e0b" },
  { status: "Review", count: 8, color: "#ec4899" },
  { status: "Testing", count: 12, color: "#8b5cf6" },
  { status: "Done", count: 35, color: "#10b981" },
];

const chartConfig = {
  count: {
    label: "Tasks",
    color: "#3b82f6",
  },
};

export function WorkloadByStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workload by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="count" 
                fill={(entry) => entry.color || "var(--color-count)"} 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
