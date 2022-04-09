import activityDataReducer from "../../reducers/activityDataReducer";
import { chartTypeColumn, chartTitle, activityLabel } from "../../constants";
import { SET_RANGE } from "../../actions/types";

describe("activity data reducer", () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            data: {
              chart: {
                type: chartTypeColumn
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
                }
              ]
            }
          };
    });
    
  it("returns default state", () => {
    expect(activityDataReducer(undefined, {})).toEqual(initialState);
  });

  it("returns state updated by SET_RANGE action", () => {
    let action = {
      type: SET_RANGE,
      payload: {
        labels: ["Activity1", "Activity2", "Activity3", "Activity4", "Activity5", "Activity6"],
        data: [{ y: 234 }, { y: 198 }, { y: 84 }, { y: 66 }, { y: 42 }, { y: 39 }]
      },
    };
    const expectedState = {
      ...initialState,
      data: {
        chart: {
          type: chartTypeColumn
        },
        xAxis: {
          categories: ["Activity1", "Activity2", "Activity3", "Activity4", "Activity5", "Activity6"],
        },
        title: {
          text: chartTitle
        },
        series: [
          {
            name: activityLabel,
            data: [{ y: 234 }, { y: 198 }, { y: 84 }, { y: 66 }, { y: 42 }, { y: 39 }]
          }
        ],
      },
    };  
    expect(activityDataReducer(initialState, action)).toEqual(expectedState);    
  });

  it("should not return unexpected state", () => {
    let action = {
      type: SET_RANGE,
      payload: {
        labels: ["Activity1", "Activity2", "Activity3", "Activity4", "Activity5", "Activity6"],
        data: [{ y: 234 }, { y: 198 }, { y: 84 }, { y: 66 }, { y: 42 }, { y: 39 }]
      },
    };   
    const unexpectedState = {
      ...initialState,
      data: {
        chart: {
          type: "bar"
        },
        xAxis: {
          categories: ["Categoary1", "Categoary2"]
        },
        title: {
          text: "Test Title"
        },
        series: [
          {
            name: activityLabel,
            data: [{ y: 234 }, { y: 198 }]
          }
        ],
      },
    };  
    expect(activityDataReducer(initialState, action)).not.toEqual(unexpectedState);
  });

});
