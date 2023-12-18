import React from "react";
import SprintsAreaChart from "./Components/sprintAreaChart/AreaChart";
import SprintsBarChart from "./Components/sprintBarChart/BarChart";
import SprintsTable from "./Components/sprintTable/Table";
import SprintsCard from "./Components/sprintCard/Cards";

const App = () => {
  return (
    <>
      <SprintsAreaChart />
       <SprintsBarChart />
      <SprintsTable />
      <SprintsCard/>
    </>
  );
};

export default App;
