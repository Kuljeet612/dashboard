import { SET_RANGE } from "../actions/types";
import { chartTypeColumn, chartTitle, activityLabel } from "../constants";

const initialState = {
  data: {
    chart: {
      type: chartTypeColumn,      
    },
    xAxis: {
      categories: []
    },
    title: {
      text: chartTitle
    },
    series: [
      {
        name: activityLabel,
        data: []       
      },
    ],
  } 
};

const activityDataReducer = (chartState = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {       
      case SET_RANGE:
        return {
          ...chartState,
          data: {
            chart: {
              type: chartTypeColumn
            },
            xAxis: {
              categories: payload.labels
            },
            title: {
              text: chartTitle
            },
            series: [
              {
                name: activityLabel,
                data: payload.data
              },
            ],
          }          
        }      
      default:
        return chartState;
    }
  };
  
  export default activityDataReducer;