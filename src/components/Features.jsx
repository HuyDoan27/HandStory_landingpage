const Features = () => {
  const features = [
    {
      id: 1,
      title: 'ĐƯỢC LÀM THỦ CÔNG',
      description: 'Túi được làm bằng tay 100% với đôi ngũ thợ lành nghề. Mina đảm bảo mang đến sản phẩm Handmade tinh sảo tới từng chi tiết.',
      image: 'https://images.unsplash.com/photo-1559395285-19e78b6f6bce?w=500&q=80'
    },
    {
      id: 2,
      title: 'THIẾT KẾ THEO YÊU CẦU',
      description: 'Túi thiết kế tên và họa tiết theo yêu cầu: thương hiệu cá nhân, Logo doanh nghiệp. Phối màu theo sở thích theo sở thích.',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80'
    },
    {
      id: 3,
      title: 'KIỂU DÁNG HIỆN ĐẠI',
      description: 'Túi handmade luôn đổi mới và sáng tạo để tạo ra những sản phẩm độc lạ bắt kịp xung hướng thời trang.',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">ƯU ĐIỂM CỦA CÁC SẢN PHẨM QUÀ TẶNG</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-image-wrapper">
                <img src={feature.image} alt={feature.title} className="feature-image" />
                <div className="feature-overlay">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 40px 20px;
          
        }

        .features-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .features-title {
          text-align: center;
          font-size: 36px;
          color: rgb(94, 23, 235);
          margin-bottom: 60px;
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .feature-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
        }

        .feature-image-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .feature-card:hover .feature-image {
          transform: scale(1.1);
        }


        .feature-card:hover .feature-overlay {
          opacity: 1;
        }

        .feature-content {
          padding: 30px;
        }

        .feature-title {
          font-size: 20px;
          color: #333;
          margin-bottom: 15px;
          font-weight: 700;
          text-align: center;
        }

        .feature-description {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          text-align: center;
        }

        @media (max-width: 968px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .features-title {
            font-size: 28px;
          }
        }

        @media (max-width: 640px) {
          .features-section {
            padding: 60px 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .features-title {
            font-size: 24px;
            margin-bottom: 40px;
          }

          .feature-image-wrapper {
            height: 200px;
          }

          .feature-content {
            padding: 20px;
          }

          .feature-title {
            font-size: 18px;
          }

          .feature-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;