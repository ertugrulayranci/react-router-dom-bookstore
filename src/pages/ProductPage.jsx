import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3060/books")
      .then((res) => setBooks(res.data))
      .catch((err) => {});
  }, []);
  //eğer apiden cevap gelmediyse loading ekranı
  if (books === null) return "Loading ...";
  return (
    <div>
      <h3 className="px-5 mt-3">{books.length} kitap bulundu</h3>
      <div className="cards-container">
        {/*kitaplar dizisindeki her bir eleman için ekrana kart basma */}
        {books.map((book) => (
          <Link
            to={{ pathname: "/ürün-detay/${book.id}" }}
            state={{ uzunluk: books.length }}
          >
            <Card key={book.id} data={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
