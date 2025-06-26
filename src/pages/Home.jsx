import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Container">
      <div className="row mt-5">
        <div className="d-flex gap-4">
          <Link to="/users" className="btn btn-success">
            Users
          </Link>

          <Link to="/product" className="btn btn-info">
            Product
          </Link>

          <Link to="/counter" className="btn btn-primary">
            Counter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
