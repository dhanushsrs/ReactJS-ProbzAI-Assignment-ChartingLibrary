import React from "react";

import "./index.css";

const TimeFrameSelector = ({ onSelect }) => (
  <div className="button-container">
    <button className="indian-red knob" onClick={() => onSelect("daily")}>
      Daily
    </button>
    <button className="coral knob" onClick={() => onSelect("weekly")}>
      Weekly
    </button>
    <button className="indico knob" onClick={() => onSelect("monthly")}>
      Monthly
    </button>
  </div>
);

export default TimeFrameSelector;
