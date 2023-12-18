import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import rangeData from "../../Data/AreaChartData";
import "../../GlobalStyles/styles.css";
import "./AreaChart.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const monthIndex = rangeData.findIndex((item) => item.month === label);
    const issueCompletedValue = Math.floor(
      rangeData[monthIndex].values.issueCompleted[0]
    );
    const issueStartedValue = Math.floor(
      rangeData[monthIndex].values.issueStarted[0]
    );
    const issueOpenValue = Math.floor(
      rangeData[monthIndex].values.issueOpen[0]
    );

    return (
      <div className="custom_tooltip">
        <p>{`${label} 01 - ${label} 31, 2023`}</p>
        <div className="issue_container">
          <p>Issue Opened</p>
          <p>{`${issueCompletedValue}d`}</p>
        </div>
        <div className="issue_container">
          <p>Issue Started</p>
          <p>{`${issueStartedValue}d`}</p>
        </div>
        <div className="issue_container">
          <p>Issue Completed</p>
          <p>{`${issueOpenValue}d`}</p>
        </div>
      </div>
    );
  }

  return null;
};

const SprintsAreaChart = () => {
  return (
    <>
      <div className="sprints_container">
        <div className="sprints_header_text_container">
          <h6 className="sprints_text">Total Lead Time:35 days(Avg)</h6>

          <h6 className="sprints_text">Total Cycle Time:33 days(Avg)</h6>
        </div>
        <div className="area_chart_container">
          <ResponsiveContainer>
            <AreaChart
              data={rangeData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <Tooltip content={<CustomTooltip />} />
              <XAxis
                dataKey="month"
                label={{
                  value: "Hours in Avg",
                  angle: 360,
                  position: "bottom",
                }}
              />
              <YAxis
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                label={{
                  value: "Stay Point(Days)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Area
                dataKey="values.issueOpen"
                stroke="var(--primary-color)"
                fill="var(--primary-color)"
              />
              <Area
                dataKey="values.issueStarted"
                stroke="var(--secondary-color)"
                fill="var(--secondary-color)"
              />
              <Area
                dataKey="values.issueCompleted"
                stroke="var(--third-color)"
                fill="var(--third-color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="chart_text_container">
          <div className="chart_text_indicate_container">
            <div className="icon issue_open_container" />
            <p className="issue_text">Issue open</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_started_container" />
            <p className="issue_text">Issue Started</p>
          </div>
          <div className="chart_text_indicate_container">
            <div className="icon issue_completed_container" />
            <p className="issue_text">Issue Completed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SprintsAreaChart;