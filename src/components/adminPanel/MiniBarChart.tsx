import React from 'react'
import Chart from 'react-google-charts';

const MiniBarChart = ({ 
  chartData 
}: { 
  chartData: (string | number | { role: string })[][] 
}) => {
  
const options = {
    legend: "none",
    hAxis: {
      textStyle: { fontSize: 10, color: "#888" },
      baselineColor: "transparent",
      gridlines: { color: "transparent" },
      textPosition: "out",
      ticks: [],
    },
    vAxis: { textPosition: "none", gridlines: { count: 0 }, baselineColor: "transparent" },
    chartArea: { width: "100%", height: "70%" },
    bar: { groupWidth: "50%" },
  };
  return (
      <Chart
      chartType="ColumnChart"
      width="100%"
      height="120px"
      data={chartData}
      options={options}
    />
  )
}

export default MiniBarChart