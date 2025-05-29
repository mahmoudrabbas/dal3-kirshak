import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="own-container container py-4">
      <h2 className="text-center text-primary mb-4">Restaurant Dashboard</h2>

      {/* Cards Summary */}
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <h5 className="card-title">Orders Today</h5>
              <p className="card-text fs-4">42</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text fs-4">3,500 EGP</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning shadow">
            <div className="card-body">
              <h5 className="card-title">Customers</h5>
              <p className="card-text fs-4">125</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <h5 className="card-title">Menu Items</h5>
              <p className="card-text fs-4">18</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="card shadow">
        <div className="card-header bg-light">
          <h5 className="mb-0">Recent Orders</h5>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#101</td>
                <td>Sarah M.</td>
                <td>Pizza, Cola</td>
                <td>150 EGP</td>
                <td>
                  <span className="badge bg-success">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>#102</td>
                <td>Ahmed R.</td>
                <td>Burger, Fries</td>
                <td>120 EGP</td>
                <td>
                  <span className="badge bg-warning text-dark">Preparing</span>
                </td>
              </tr>
              <tr>
                <td>#103</td>
                <td>Lina T.</td>
                <td>Steak</td>
                <td>250 EGP</td>
                <td>
                  <span className="badge bg-danger">Cancelled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
