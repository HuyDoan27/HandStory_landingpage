import logo from '../assets/logo5.png';

const Footer = () => {
  const footerLinks = {
    company: {
      title: 'VỀ HANDSTORY',
      links: [
        { name: 'Giới thiệu', url: '#about' },
        { name: 'Câu chuyện thương hiệu', url: '#about' },
      ]
    },
    products: {
      title: 'SẢN PHẨM',
      links: [
        { name: 'Quà tặng handmade', url: '#products' },
        { name: 'Về quà tặng', url: '#benefits' },
        { name: 'Set quà combo', url: '#products' },
      ]
    },
    support: {
      title: 'HỖ TRỢ',
      links: [
        { name: 'Hướng dẫn đặt hàng', url: '#order-proces' },
        { name: 'Quyền lợi khách hàng', url: '#benefits' }
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#C471F5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#12CBC4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <img src={logo} alt="InGift Logo" style={{ height: "103px" }} />
              </div>
              <p className="brand-tagline">
                Kể câu chuyện của bạn qua từng món quà độc đáo và ý nghĩa
              </p>

              <div className="contact-info">
                <p>Email : doanhuy2004@gmail.com</p>
                <p>SĐT   : 0987 599 814</p>
              </div>


            </div>

            {Object.values(footerLinks).map((section, index) => (
              <div key={index} className="footer-links-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="links-list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 HandStory. Handmade with <span className="heart">❤️</span> in Vietnam
            </p>
            <div className="footer-bottom-links">
              <a href="#">Điều khoản</a>
              <span className="divider">•</span>
              <a href="#">Bảo mật</a>
              <span className="divider">•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%);
          color: white;
          overflow: hidden;
          width: 100%;
        }

        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .footer-main {
          position: relative;
          padding: 80px 20px 40px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .footer-brand {
          padding-right: 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 8px 20px rgba(255, 107, 157, 0.4);
        }

        .brand-name {
          font-size: 28px;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-tagline {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .contact-info {
          margin-bottom: 25px;
        }

        .contact-info p {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(255, 107, 157, 0.5);
        }

        .footer-links-section {
          padding-top: 5px;
        }

        .section-title {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          padding-bottom: 10px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 3px;
          background: linear-gradient(90deg, #FF6B9D, #C471F5);
          border-radius: 3px;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #FF6B9D;
          padding-left: 5px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 25px 20px;
          background: rgba(0,0,0,0.3);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .copyright {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          margin: 0;
        }

        .heart {
          color: #FF6B9D;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-bottom-links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #FF6B9D;
        }

        .divider {
          color: rgba(255,255,255,0.3);
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 60px 20px 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-brand {
            padding-right: 0;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .footer-wave {
            height: 70px;
          }

          .logo-icon {
            width: 45px;
            height: 45px;
            font-size: 24px;
          }

          .brand-name {
            font-size: 24px;
          }

          .social-links {
            flex-wrap: wrap;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 8px;
          }

          .divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;