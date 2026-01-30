import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import CardCustomizePage from "./pages/CardCustomizePgae";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/card-customize" element={<CardCustomizePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
