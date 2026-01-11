import { useState } from 'react';

const OrderProcess = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            number: '01',
            icon: '📋',
            title: 'Khách hàng gửi yêu cầu',
            subtitle: 'Bắt đầu hành trình',
            description: 'Gửi thông tin về size, màu sắc, thông tin người nhận và sản phẩm bên trong quà tặng',
            color: '#FF6B9D',
            illustration: '💌',
            details: [

            ]
        },
        {
            id: 2,
            number: '02',
            icon: '🎨',
            title: 'HandStory thiết kế',
            subtitle: 'Sáng tạo độc đáo',
            description: 'Đội ngũ thiết kế sẽ tạo mẫu quà tặng độc đáo và gửi lại khách hàng để duyệt',
            color: '#C471F5',
            illustration: '✨',
            details: [

            ]
        },
        {
            id: 3,
            number: '03',
            icon: '🚚',
            title: 'Thanh toán & Giao hàng',
            subtitle: 'Hoàn tất đơn hàng',
            description: 'Khách hàng cọc tiền, HandStory đóng gói cẩn thận và giao hàng tận nơi',
            color: '#12CBC4',
            illustration: '🎉',
            details: [

            ]
        }
    ];

    return (
        <section className="order-process-section">
            <div className="process-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="process-container">
                <div className="process-header">
                    <h1 className="process-title">
                        Chỉ <span className="highlight">3 bước</span> để có món quà<br />
                        handmade <span className="highlight-2">độc nhất</span> của riêng bạn
                    </h1>
                </div>

                {/* Timeline vertical cho desktop */}
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`timeline-item ${activeStep === step.id ? 'active' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                            onMouseEnter={() => setActiveStep(step.id)}
                        >
                            <div className="timeline-dot" style={{ background: step.color }}>
                                <span className="dot-number">{step.number}</span>
                                <div className="dot-pulse" style={{ background: step.color }}></div>
                            </div>

                            <div className="timeline-content">
                                <div className="content-card" style={{ borderColor: step.color }}>
                                    <div className="card-header" style={{ background: step.color }}>
                                        <div className="header-left">
                                            <span className="card-icon">{step.icon}</span>
                                            <div>
                                                <div className="card-subtitle">{step.subtitle}</div>
                                                <h3 className="card-title">{step.title}</h3>
                                            </div>
                                        </div>
                                        <span className="header-illustration">{step.illustration}</span>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-description">{step.description}</p>

                                        <div className="card-details">
                                            {step.details.map((detail, idx) => (
                                                <div key={idx} className="detail-item">
                                                    <span className="detail-icon">{detail.icon}</span>
                                                    <span className="detail-text">{detail.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="step-indicator">
                                            Bước {step.id}/3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process-footer">
                    <button className="start-button">
                        <span className="button-text">Đặt hàng ngay</span>
                        <span className="button-icon">→</span>
                        <div className="button-glow"></div>
                    </button>
                </div>
            </div>

            <style>{`
        .order-process-section {
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .process-bg-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 20s ease-in-out infinite;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #C471F5, #12CBC4);
          top: 50%;
          right: -5%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #12CBC4, #FF6B9D);
          bottom: 10%;
          left: 20%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .process-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .badge-icon {
          font-size: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .process-title {
          font-size: 42px;
          font-weight: 900;
          color: rgb(94, 23, 235);
          line-height: 1.3;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .highlight-2 {
          background: linear-gradient(135deg, #12CBC4, #FF6B9D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-container {
          position: relative;
          padding: 10px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #FF6B9D 0%, #C471F5 50%, #12CBC4 100%);
          transform: translateX(-50%);
          border-radius: 4px;
          box-shadow: 0 0 20px rgba(255, 107, 157, 0.5);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          gap: 30px;
          margin-bottom: 20px;
          position: relative;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item.left .timeline-content {
          grid-column: 1;
          justify-self: end;
        }

        .timeline-item.right .timeline-content {
          grid-column: 3;
          justify-self: start;
        }

        .timeline-item.left .timeline-dot {
          grid-column: 2;
        }

        .timeline-item.right .timeline-dot {
          grid-column: 2;
        }

        .timeline-dot {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 30px currentColor;
          transition: all 0.4s ease;
          align-self: start;
          margin-top: 30px;
        }

        .timeline-item.active .timeline-dot {
          transform: scale(1.2);
        }

        .dot-number {
          font-size: 22px;
          font-weight: 900;
          color: white;
          position: relative;
          z-index: 2;
        }

        .dot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0.6;
          animation: pulse-dot 2s ease-out infinite;
        }

        @keyframes pulse-dot {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .timeline-content {
          max-width: 450px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          overflow: hidden;
          border: 2px solid;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .timeline-item.active .content-card {
          transform: scale(1.05);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .card-header {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .timeline-item.active .card-header::before {
          opacity: 1;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .card-icon {
          font-size: 35px;
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));
        }

        .card-subtitle {
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 5px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 800;
          color: white;
          margin: 0;
        }

        .header-illustration {
          font-size: 50px;
          opacity: 0.3;
          animation: float-illustration 3s ease-in-out infinite;
        }

        @keyframes float-illustration {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .card-body {
          padding: 25px;
        }

        .card-description {
          color: rgba(0, 0, 0, 0.8);
          line-height: 1.6;
          font-weight: 500;
          font-size: 16px;
        }

        .card-details {
          display: grid;
          gap: 10px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .detail-item:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(10px);
        }

        .detail-icon {
          font-size: 18px;
        }

        .detail-text {
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 500;
        }

        .card-footer {
          padding: 15px 25px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .step-indicator {
          color: rgba(0, 0, 0, 1);
          font-size: 12px;
          font-weight: 600;
        }

        .process-footer {
          margin-top: 60px;
          text-align: center;
        }

        .start-button {
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          color: white;
          border: none;
          padding: 20px 50px;
          font-size: 18px;
          font-weight: 800;
          border-radius: 50px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 50px;
        }

        .start-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .start-button:hover::before {
          left: 100%;
        }

        .start-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(255, 107, 157, 0.6);
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          font-size: 28px;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .start-button:hover .button-icon {
          transform: translateX(10px);
        }

        .button-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .start-button:hover .button-glow {
          opacity: 1;
        }

        .footer-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 32px;
          font-weight: 900;
          background: linear-gradient(135deg, #FF6B9D, #C471F5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 5px;
        }

        .stat-label {
          display: block;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent);
        }

        @media (max-width: 1024px) {
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 60px;
          }

          .timeline-line {
            left: 40px;
          }

          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            grid-column: 1;
            justify-self: start;
            margin-left: 120px;
          }

          .timeline-dot {
            position: absolute;
            left: 0;
            margin-top: 0;
          }

          .process-title {
            font-size: 36px;
          }
        }

        @media (max-width: 640px) {
          .order-process-section {
            padding: 80px 20px;
          }

          .process-title {
            font-size: 28px;
          }

          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            margin-left: 100px;
          }

          .timeline-dot {
            width: 60px;
            height: 60px;
          }

          .dot-number {
            font-size: 20px;
          }

          .card-header {
            padding: 20px;
          }

          .card-title {
            font-size: 18px;
          }

          .header-illustration {
            font-size: 40px;
          }

          .footer-stats {
            flex-direction: column;
            gap: 30px;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .start-button {
            padding: 20px 40px;
            font-size: 16px;
          }
        }
      `}</style>
        </section>
    );
};

export default OrderProcess;