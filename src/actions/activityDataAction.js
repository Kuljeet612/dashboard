import { SET_RANGE } from "./types";
import { unselectedActivityColor , selectedActivityColor, activityLabel } from "../constants";

export const setActivityData = (min, max) => async (dispatch) => {

  const data = [{ y: 234 }, { y: 197 }, { y: 84 }, { y: 64 }, { y: 42 }, { y: 37 }, { y: 14 }, { y: 11 }];
  data.forEach((element) => {
    element.color = unselectedActivityColor;
  });

  const labels = [];
  for (let i = 0; i < data.length; i++) {
    let currentIndex = data.indexOf(data[i]);
    labels.push(activityLabel + (currentIndex + 1));
    if (currentIndex >= min - 1 && currentIndex < max) {
      data[i].color = selectedActivityColor;
    }
  }

  dispatch({
    type: SET_RANGE,
    payload: {
      data,
      labels
    }
  });
};
