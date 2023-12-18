import React from "react";
import { tableHeader, TableData } from "../../Data/TableData";
import "../../GlobalStyles/styles.css";
import "./Table.css";

const SprintsTable = () => {
  return (
    <div className="table-container">
      <table className="custom_table">
        <thead className="table_head_container">
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table_body_container">
          {TableData.map((sprint, index) => (
            <tr className="table_body" key={index}>
              <td>{sprint.sprintName}</td>
              <td>{sprint.status}</td>
              <td>{sprint.start_date}</td>
              <td>{sprint.end_date}</td>
              <td>{sprint.completed_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintsTable;