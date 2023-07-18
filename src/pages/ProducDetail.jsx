import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProducDetail = () => {
  const [detail, setDetail] = useState(null);
  const { productId } = useParams();
  
 //useNavigate Kurulumu
  
 const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:3060/books/${productId}`)
      .then((res) => setDetail(res.data))
      .catch((err)=>navigate('/undefined/${err?.response?.status}'))  //404 sayfasına yönlendir
  }, []);

  if (detail === null) return "loading..";

  return (
    <div
      style={{ height: "84vh" }}
      className="row justify-content-center align-items-center"
    >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img className="rounded" src={detail.image} />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1>{detail.title}</h1>
        <p>Yazar: {detail.author}</p>
        <p>{detail.decription}</p>
        <p>Sayfa sayısı: {detail.page}</p>
        <p> Yıl: {detail.page}</p>
      </div>
    </div>
  );
};

export default ProducDetail;
