import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{ height: "85vh" }}
      className="d-flex justify-content-around align-items-center"
    >
      <aside className="bg-dark-rounded p-4">
        <Link className="btn btn-danger" to={"/arabalar/elektrik"}>
          elektrik
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link className="btn btn-primary" to={"/arabalar/içten-yanma"}>
          içten-yanma
        </Link>
      </aside>
      <div>
        {/*bir route'in içindeki diğer route elemanlarının sayfada nereye
        yerleşeceğini belirler.*/}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
