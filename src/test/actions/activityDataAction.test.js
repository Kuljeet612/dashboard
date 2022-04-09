import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setActivityData } from '../../actions/activityDataAction';
import { unselectedActivityColor } from "../../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('setActivityData', () => {
  it('returns expected actions', () => {
    const expectedActions = [
      { 
        type: 'SET_RANGE', 
        payload: {  
            data: [{ y: 234, color:unselectedActivityColor }, { y: 197, color:unselectedActivityColor }, { y: 84, color:unselectedActivityColor }, { y: 64, color:unselectedActivityColor }, { y: 42, color:unselectedActivityColor }, { y: 37, color:unselectedActivityColor }, { y: 14, color:unselectedActivityColor }, { y: 11, color:unselectedActivityColor }],
            labels: ["Activity1", "Activity2", "Activity3", "Activity4", "Activity5", "Activity6", "Activity7", "Activity8"]
        } 
      }
    ];

    const store = mockStore({
      tasks: {
        tasks: [],
      },
    });

    return store.dispatch(setActivityData({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


