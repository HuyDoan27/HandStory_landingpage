import "../styles/header.css";
import logo from "../assets/logo4.png";


const Header = () => {
  return (
    <header className="header-overlay">
      <div className="logo">
        <img src={logo} alt="InGift Logo" style={{ height: "103px" }} />
      </div>

      <nav className="nav">
        <a href="#intro">Giới thiệu</a>
        <a href="#customer">Khách hàng</a>
        <a href="#process">Quy trình đặt hàng</a>
        <a href="#process">FAQ</a>
        <button className="btn-contact">Liên hệ</button>
      </nav>
    </header>
  );
};

export default Header;
