import anh1 from '../assets/anh1.jpg';
import anh2 from '../assets/anh2.jpg';

const About = () => {
    const socialLinks = [
        { platform: 'Tiki', url: 'tiki.vn/cua-hang/kieu-handmade' },
        { platform: 'Shopee', url: 'shopee/kieuhandmade' },
        { platform: 'Fanpage', url: 'handmadeshop' },
        { platform: 'Instagram', url: 'handmadeshop' },
        { platform: 'Youtube', url: 'handmade' },
    ];

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="about-subtitle">CHÚNG TÔI LÀ "InGift"</h2>
                    <h1 className="about-title">Chuyên dịch vụ quà tặng</h1>

                    <p className="about-description">
                        Là một start-up về quà tặng, HandStory được tạo ra để kể những câu chuyện nhỏ đầy ý nghĩa thông qua từng món quà. Chúng tôi mang đến các sản phẩm quà tặng thủ công, cá nhân hoá và sáng tạo, giúp bạn lưu giữ kỷ niệm, thể hiện cảm xúc và tạo nên những khoảnh khắc đáng nhớ trong hành trình tuổi trẻ.
                    </p>
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <div key={index} className="social-link-item">
                                <span className="check-icon">✓</span>
                                <span className="social-text">
                                    <strong>{link.platform}:</strong> {link.url}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-images">
                    <div className="image-card main-image">
                        <img
                            src={anh1}
                            alt="Túi handmade tím hoa"
                        />
                        <div className="image-overlay">
                            <h3>Sản xuất Macrame sỉ và lẻ</h3>
                            <p>Sản xuất Macrame từ năm 2018, Kiều Handmade chuyên cung cấp sỉ và lẻ các sản phẩm thủ công trang trí nhà của, du lịch: vòng, ghế dù, ...mạnh trang trí tường, headboard, túi xách handmade</p>
                        </div>
                    </div>

                    <div className="image-card secondary-image">
                        <img
                            src={anh2}
                            alt="Túi handmade tím"
                        />
                        <div className="image-overlay">
                            <h3>Cung cấp nguyên vật liệu</h3>
                            <p>Ngoài ra Kiều Handmade còn có bán nguyên liệu cho các bạn yêu handmade, thích tự làm đồ trang trí, DIY cũng như cung cấp các video hướng dẫn các bạn tự làm macrame.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          padding: 80px 20px 30px 20px;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-left: 20%;
          margin-right: 20%;
        }

        .about-content {
          padding: 20px;
        }

        .about-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 10px;
          letter-spacing: 2px;
          font-family: 'Open Sans';
          font-weight: bold;
          text-transform: uppercase;
          font-style: italic;
        }

        .about-title {
          font-size: 32px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          font-weight: 800;
          font-weight: bold;
          border-radius: 0px;
          color: rgb(94, 23, 235);
          text-transform: uppercase;
          font-family: 'Open Sans';
        }

        .about-description {
          color: #555;
          line-height: 1.8;
          margin-bottom: 40px;
          font-size: 16px;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .social-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .social-text {
          color: #333;
          font-size: 15px;
        }

        .social-text strong {
          color: #667eea;
        }

        .about-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          position: relative;
        }

        .image-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          height: 90%;
        }

        .image-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.4);
        }

        .main-image {
          grid-column: 1;
        }

        .secondary-image {
          grid-column: 2;
          margin-top: 50px;
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .main-image img {
          height: 400px;
        }

        .secondary-image img {
          height: 400px;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(171, 182, 231, 0.95), transparent);
          padding: 30px;
          color: white;
        }

        .image-card:hover .image-overlay {
          transform: translateY(0);
        }

        .image-overlay h3 {
        color: #000;
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: 700;
          transition: transform 0.4s ease 0.1s;
        }

        .image-overlay p {
        color: #000;
  font-size: 14px;
  line-height: 1.6;
  opacity: 1;
}

        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 60px 20px;
          }

          .about-title {
            font-size: 28px;
          }

          .about-images {
            grid-template-columns: 1fr;
          }

          .main-image,
          .secondary-image {
            grid-column: 1;
          }
        }
      `}</style>
        </section>
    );
};

export default About;