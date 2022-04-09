// test-utils.jsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux'
const middleware = [thunk];
import activityDataReducer from "../../reducers/activityDataReducer";
import Tabs from '../../components/tabs/Tabs';
import { chartTypeColumn, chartTitle, activityLabel } from "../../constants";

const initialState = {
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

export function createTestStore() {
    const store = createStore(
        activityDataReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
      );
    return store;
}

  const Store = createTestStore();

   describe("Tabs component", () => {

    beforeEach(() => {
      render(
        <Provider store={Store}>
          <Tabs />      
        </Provider>         
      ); 
    })

    it('checks for the presence of Tab title in the document ', async () => {               
      expect(screen.getByText(/Tab1/i)).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('addNewTab'));
      expect(screen.getByText(/Tab2/i)).toBeInTheDocument();     
    });

    it('adds and verifies new tab title in the DOM', async () => {                     
      fireEvent.click(screen.getByTestId('addNewTab'));
      expect(screen.getByText(/Tab2/i)).toBeInTheDocument();     
    });

    it('checks default text and delete tab functionality', async () => {                           
      expect(screen.getByTestId('defaultContent')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('addNewTab'));
      fireEvent.click(document.getElementsByClassName('closeBtn')[1]);
      expect(screen.queryByText(/Tab2/i)).not.toBeInTheDocument();   
    });

  });