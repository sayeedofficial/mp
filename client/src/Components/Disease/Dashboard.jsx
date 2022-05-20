import React from "react";
import "./Dashboard.css";
const Dashboard = ({
  name,
  age,
  gender,
  blinkrate,
  redness,
  burningsensation,
  screentime,
  scratchy,
  mucus,
  blurred,
  dryness
}) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <br />
      <table id="dashboard-details" >
        <tr>
          <th>Details</th>
          <th>{name} </th>
        </tr>
        <tr>
          <td>Age </td>
          <td> {age} </td>
        </tr>
        <tr>
          <td>Gender </td>
          <td> {gender} </td>
        </tr>
        <tr>
          <td>Blink Rate </td>
          <td> {blinkrate} </td>
        </tr>
        <tr>
          <td>Redness </td>
          <td> {redness} </td>
        </tr>
        <tr>
          <td>Burning Sensation </td>
          <td> {burningsensation} </td>
        </tr>
        <tr>
          <td>Screen Time </td>
          <td> {screentime} </td>
        </tr>
        <tr>
          <td>Scratchy Sensation </td>
          <td> {scratchy} </td>
        </tr>
        <tr>
          <td>Mucus Discharge </td>
          <td> {mucus} </td>
        </tr>
        <tr>
          <td>Blurred Vision </td>
          <td> {blurred} </td>
        </tr>
        <tr>
          <td>Dryness</td>
          <td> {dryness} </td>
        </tr>
      </table>
    </div>
  );
};

export default Dashboard;
