import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
  ResponsiveContainer,
} from "recharts";
import sampleData from "../../data";

import "./index.css";

class Chart extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    sampleData().then((data) => this.setState({ data }));
  }

  filterData = (data, timeframe) => {
    if (timeframe === "daily") {
      return data;
    } else if (timeframe === "weekly") {
      return data.reduce((acc, current, index) => {
        if (index % 7 === 0) {
          acc.push(current);
        }
        return acc;
      }, []);
    } else if (timeframe === "monthly") {
      const months = {};
      data.forEach((item) => {
        const month = new Date(item.timestamp).getMonth();
        if (!months[month]) {
          months[month] = { ...item, count: 1 };
        } else {
          months[month].value += item.value;
          months[month].count += 1;
        }
      });
      return Object.values(months).map((item) => ({
        ...item,
        value: item.value / item.count,
      }));
    }
    return data;
  };

  render() {
    const { timeframe } = this.props;
    const filteredData = this.filterData(this.state.data, timeframe);

    return (
      <ResponsiveContainer
        width="100%"
        height="60%"
        className="chart-container"
      >
        <LineChart
          width={700}
          height={200}
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00008B"
            activeDot={{ r: 8 }}
          />
          <Brush dataKey="timestamp" height={30} stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
