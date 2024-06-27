import React from "react";
import Chart from "./components/Chart";
import TimeFrameSelector from "./components/TimeFrameSelector";

import "./App.css";

class App extends React.Component {
  state = {
    timeframe: "daily",
  };

  handleTimeframeSelect = (newTimeframe) => {
    this.setState({ timeframe: newTimeframe });
  };

  render() {
    return (
      <div className="app-container">
        <TimeFrameSelector onSelect={this.handleTimeframeSelect} />
        <Chart timeframe={this.state.timeframe} />
      </div>
    );
  }
}

export default App;
