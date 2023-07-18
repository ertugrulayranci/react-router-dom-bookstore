import React from "react";
import { Link, useParams } from "react-router-dom";

const undefinedPage = () => {
  const { errorCode } = useParams();
  return (
    <div
      style={{ height: "84vh" }}
      className="d-flex  flex-column align-items-center justify-content-center"
    >
      <h1 className="text-warning">{errorCode ? errorCode : "404"}</h1>
      <p className="lead">Üzgünüz:(Aradağınız sayfa mevcut değil</p>
      <p>
        <span>Yolculugunuza buradan devam edin</span>
        <Link className="btn btn-danger mx-3" to={"/"}>
          Ana Sayfa
        </Link>
      </p>
    </div>
  );
};

export default undefinedPage;
