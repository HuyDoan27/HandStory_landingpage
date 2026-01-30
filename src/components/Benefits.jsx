
const Benefits = () => {
    const benefits = [
        {
            id: 1,
            icon: 'https://photo.salekit.com/uploads/salepage_636b197a47737362cb035733/freeship.png',
            title: 'Freeship',
            description: 'Áp dụng cho mọi đơn hàng trên toàn quốc'
        },
        {
            id: 2,
            icon: 'https://photo.salekit.com/uploads/salepage_636b197a47737362cb035733/icon-mina-web-artboard-6-8.png',
            title: 'Bảo hành',
            description: 'Các sản phẩm đều được bảo hành giống với yêu cầu cảu khách, hình ảnh công bố'
        },
        {
            id: 3,
            icon: 'https://photo.salekit.com/uploads/salepage_636b197a47737362cb035733/untitled-3-removebg-preview.png',
            title: 'Thời gian nhận hàng',
            description: 'Team thực hiện dự án đảm bảo thời gian giao hàng nhanh nhất'
        }
    ];

    return (
        <section id="benefits" className="benefits-section">
            <div className="benefits-container">
                <div className="benefits-header">
                    <h2 className="benefits-bg-text">QUYỀN LỢI</h2>
                    <h3 className="benefits-title">KHI LÀ KHÁCH HÀNG CỦA CHÚNG TÔI</h3>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="benefit-card">
                            <div className="benefit-icon-wrapper">
                                <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
                            </div>
                            <h4 className="benefit-title">{benefit.title}</h4>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .benefits-section {
          padding: 40px 20px;
          background: white;
          position: relative;
        }

        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .benefits-header {
          text-align: center;
          margin-bottom: 20px;
          position: relative;
        }

        .benefits-bg-text {
          font-size: 80px;
          font-weight: 900;
        color: rgb(217, 217, 217);
          letter-spacing: 10px;
          margin: 0;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .benefits-title {
          font-size: 23px;
          font-weight: 800;
          background: rgb(94, 23, 235);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: -40px;
          position: relative;
          z-index: 2;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          padding: 0 40px;
        }

        .benefit-card {
          text-align: center;
          padding: 40px 20px;
          transition: all 0.4s ease;
          position: relative;
        }

        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.4s ease;
        }

        .benefit-card:hover::before {
          width: 80%;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
        }

        .benefit-icon-wrapper {
          width: 180px;
          height: 180px;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .benefit-icon-wrapper::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px dashed #667eea;
          border-radius: 50%;
          animation: rotate 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .benefit-icon {
          width: 120px;
          height: 120px;
          object-fit: contain;
          transition: all 0.4s ease;
          filter: drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
        }

        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 10px 25px rgba(102, 126, 234, 0.5));
        }

        .benefit-title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }

        .benefit-card:hover .benefit-title {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .benefit-description {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 968px) {
          .benefits-section {
            padding: 80px 20px;
          }

          .benefits-bg-text {
            font-size: 60px;
            letter-spacing: 5px;
          }

          .benefits-title {
            font-size: 22px;
            margin-top: -30px;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            padding: 0 20px;
          }

          .benefit-card:nth-child(3) {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .benefits-section {
            padding: 60px 20px;
          }

          .benefits-bg-text {
            font-size: 40px;
            letter-spacing: 3px;
          }

          .benefits-title {
            font-size: 18px;
            margin-top: -20px;
          }

          .benefits-header {
            margin-bottom: 50px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0;
          }

          .benefit-card:nth-child(3) {
            grid-column: 1;
            max-width: 100%;
          }

          .benefit-icon-wrapper {
            width: 150px;
            height: 150px;
          }

          .benefit-icon {
            width: 100px;
            height: 100px;
          }

          .benefit-title {
            font-size: 20px;
          }

          .benefit-description {
            font-size: 14px;
          }
        }
      `}</style>
        </section>
    );
};

export default Benefits;