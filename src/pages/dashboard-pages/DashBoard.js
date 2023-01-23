import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard.component";
import ShapePage from "../../pages/dashboard-pages/shape-page/ShapePage";

const DashBoard = () => {
  // const { pages } = props.match.params;
  return (
    <div>
      {/* <Link to="/admin-dashboard">
        <AdminDashboard />
      </Link> */}
      <ShapePage />
    </div>
  );
};

export default DashBoard;
