import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="d-flex flex-column align-items-center justify-content-center p-4 g-5"
    >
      <h1>Hoşgeldiniz</h1>
      <img
        className="img-fluid"
        src="https://png.pngitem.com/pimgs/s/3-34550_welcome-png-download-image-blue-welcome-png-transparent.png"
        alt=""
      />
      <p className="lead text-center">
        <span onClick={() => navigate("/ürünler")}> Ürünler sayfasında </span>{" "}
        yeni çıkan ürünleri görüntüleyebilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
