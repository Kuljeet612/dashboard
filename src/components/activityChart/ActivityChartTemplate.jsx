import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ActivityChartTemplate = ({ options }) => {
    return (
        <div className="bar-chart-wrapper">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default ActivityChartTemplate;