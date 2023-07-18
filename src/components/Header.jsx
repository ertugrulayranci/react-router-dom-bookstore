import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex bg-dark text-light justify-content-between align-items-center p-3">
      <h1>Amazon</h1>
      <div className="d-flex gap-4">
        <NavLink className="text-light" to={"/"}>
          Anasayfa
        </NavLink>
        <NavLink className="text-light" to={"/ürünler"}>
          Ürünler
        </NavLink>
        <NavLink className="text-light" to={"/hakkımızda"}>
          Hakkımızda
        </NavLink>
        <NavLink className="text-light" to={"/arabalar/içten-yanma"}>
          içten yanma
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
