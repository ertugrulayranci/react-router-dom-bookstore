import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProducDetail from "./pages/ProducDetail";
import UndefinedPage from "./pages/undefinedPage";
import elekctricCars from "./nestedRoutes/elekctricCars";
import Motor from "./nestedRoutes/Motor";
import Layout from "./nestedRoutes/Layout";
import HakkimizdaSayfa from "./pages/HakkimizdaSayfa";
function App() {
  return (
    <BrowserRouter>
      {/*alttaki sayfa değişse de header sabit */}
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductPage />} />
        <Route path="hakkımızda" element={<HakkimizdaSayfa />} />
        {/* dinamik route tanımla: parametre de eklendi */}
        <Route path="/ürün-detay/:productId" element={<ProducDetail />} />
        <Route path="undefined/:errorCode" element={<UndefinedPage />} />
        {/*nested(iç içe) yollar */}
        <Route path="/arabalar" element={<Layout />}>
          <Route path="elektrik" element={<elekctricCars />} />{" "}
          //arabalar/elektrik
          <Route path="içten-yanma" element={<Motor />} />{" "}
          //arabalar/içten-yanma
        </Route>
        {/* //yukarıda tanımlanmayan bir pathe giderse */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      {/*sayfa değişse de footer sabit */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
