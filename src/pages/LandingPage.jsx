import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider";
import About from "../components/About";
import Products from "../components/Products";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import OrderProcess from "../components/OrderProcess";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <About />
      <Products />
      <Features />
      <Benefits />
      <OrderProcess />
      <Footer />
    </>
  );
};

export default LandingPage;