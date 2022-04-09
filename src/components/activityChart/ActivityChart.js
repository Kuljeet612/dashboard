import {  useSelector } from "react-redux";
import ActivityChartTemplate from "./ActivityChartTemplate";

const ActivityChart = () => {
  const chartState = useSelector((state) => state.chartState);
  const options = chartState.data;

  return (
      <ActivityChartTemplate options={options} />
  );
};

export default ActivityChart;