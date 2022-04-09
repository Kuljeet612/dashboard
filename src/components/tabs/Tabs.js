import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TabsTemplate from './TabsTemplate';
import { setActivityData } from "../../actions/activityDataAction";
import {v1 as uuid} from 'uuid';
import { closeTabHint, closeTabAriaLabel } from '../../constants'

const Tabs = () => {
  const dispatch = useDispatch();
  const [showData, setShowData] = useState(false);
  const [tabs, setTabs] = useState([{ title: "Tab1", id: 0 }]);
  const [currentTab, setCurrentTab] = useState([{ title: "Tab1", id: 0 }]);
  
  const showActivityData = () => {
    return showData ? setShowData(false) : setShowData(true);
  };

  const addNewTab = () => {   
    const newTab = {
      id: uuid(),      
      title: `Tab${tabs.length + 1}` 
    };
    setTabs([...tabs, newTab])
    setCurrentTab(newTab) 
    setShowData(false);   
  }

  const selectTabHandler = (tab) => {
    setCurrentTab(tab);
  };

  const deleteTab = (tabToDelete) => {
    const tabToDeleteIndex = tabs.findIndex((tab) => tab.id === tabToDelete.id);
    const updatedTabs = tabs.filter((tab, index) => {
      return index !== tabToDeleteIndex;
    });
    if(updatedTabs.length !== 0) {
      const previousTab = tabs[tabToDeleteIndex - 1] || tabs[tabToDeleteIndex + 1] || {};
      setTabs(updatedTabs)
      setCurrentTab(previousTab)
    };
  }

    const createTabs = () => {
      const allTabs =  tabs.map((tab, index) => (
        <React.Fragment key={tab.id}>          
          <li>
            <button  
              onClick={() => selectTabHandler(tab)}                                 
              className={currentTab.id === tab.id ? "nav-link active" : "nav-link"}
              data-bs-toggle="tab"
              title={tab.title}
              aria-label={tab.title}
            >
              {tab.title}
            </button>
          </li>
         { tabs.length > 1 && <div className="closeTabIconContainer">
            <button              
              type="button"              
              title={closeTabHint}
              aria-label={closeTabAriaLabel}
              className="btn-close btn-sm closeBtn"              
              onClick={() => deleteTab(tab, index)}
            ></button>
          </div>
        }
        </React.Fragment>
      ));
      return <ul className="nav nav-tabs">{allTabs}</ul>;
    };

  const setRange = (min, max) => {
    //console.log(`min = ${min}, max = ${max}`);
    dispatch(setActivityData(min, max));
  };
 
  return (
    <TabsTemplate 
    createTabs = {createTabs}
    addNewTab = {addNewTab}
    showData = {showData}
    setRange = {setRange}
    showActivityData = {showActivityData}
    />
  )
};

export default Tabs;