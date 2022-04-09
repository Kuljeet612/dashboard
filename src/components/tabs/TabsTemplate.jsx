import React from "react";
import { FaPlusSquare, FaPlusCircle } from "react-icons/fa";
import ActivityChart from "../activityChart/ActivityChart";
import Slider from "../slider/Slider";
import { defaultMsg, addActivityHint, addActivityArialabel, addNewTabHint, addNewTabAriaLabel } from '../../constants';

const TabsTemplate = ({ createTabs, addNewTab, showData, setRange, showActivityData }) => {

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        {createTabs()}
      </div>
      <div id="addNewTab" className="addTabIconContainer" data-testid="addNewTab" onClick={addNewTab}>
        <FaPlusSquare                 
          title={addNewTabHint}
          aria-label={addNewTabAriaLabel}
          className="addNewTab"
        />
      </div>
      {showData ? (
        <div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="container">
              <ActivityChart />
              <Slider
                min={1}
                max={8}
                onChange={(min, max) => {
                  setRange(min, max);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ paddingTop: "60px" }} data-testid="defaultContent">
            {defaultMsg}
          </h2>
          <div onClick={showActivityData} data-testid="showActivityData"  id="showActivityData">
          < FaPlusCircle           
            title={addActivityHint}
            aria-label={addActivityArialabel}
            />
            </div>
        </div>
      )}
    </div>
  );
};

export default TabsTemplate;
