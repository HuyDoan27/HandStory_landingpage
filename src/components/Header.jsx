import { Link } from "react-router-dom";
import logo from "../assets/logo5.png";
import "../styles/header.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header className="header-overlay">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="InGift Logo" style={{ marginTop: "15px" }} /></a>
      </div>

      <nav className="nav">
        <a href="#about" onClick={() => scrollToSection("about")}>Giới thiệu</a>
        <a href="#products" onClick={() => scrollToSection("products")}>Sản phẩm</a>
        <a href="#benefits" onClick={() => scrollToSection("benefits")}>Quyền lợi</a>
        <a href="#order-process" onClick={() => scrollToSection("order-process")}>Quy trình đặt hàng</a>

        <Link to="/tin-tuc" style={{color : "#ff0000"}}>Tin tức</Link>
        <Link to="/card-customize" style={{color : "#ff0000"}}>Thiệp online</Link>
        <a
          href="https://zalo.me/0987599814"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-contact">Liên hệ</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
