import { BarChart } from "@mui/x-charts/BarChart";

const sampleData = [
  { month: 'Jan', sales: 65 },
  { month: 'Feb', sales: 59 },
  { month: 'Mar', sales: 80 },
  { month: 'Apr', sales: 81 },
  { month: 'May', sales: 56 },
  { month: 'Jun', sales: 55 },
  { month: 'Jul', sales: 40 },
];

export function SampleBarChart() {
  return (
    <BarChart
      xAxis={[{
        scaleType: 'band',
        data: sampleData.map(d => d.month)
      }]}
      series={[{
        data: sampleData.map(d => d.sales),
        label: 'Monthly Sales'
      }]}
      width={600}
      height={400}
    />
  );
}