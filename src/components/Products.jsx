import { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Túi handmade họa tiết logo',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80',
            category: 'Túi xách'
        },
        {
            id: 2,
            name: 'Túi handmade họa tiết doanh nghiệp',
            image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80',
            category: 'Túi xách'
        },
        {
            id: 3,
            name: 'Túi handmade họa tiết cam',
            image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=500&q=80',
            category: 'Túi xách'
        },

    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="products-section">
            <div className="products-container">

                {/* HEADING */}
                <div className="products-heading">
                    <span className="heading-small">ĐÃ HOÀN THIỆN</span>
                    <h3 className="heading-main">SẢN PHẨM</h3>
                </div>



                {/* SLIDER LAYOUT */}
                <div className="slider-layout">

                    {/* MAIN IMAGE */}
                    <div className="main-product">
                        <button className="slider-btn prev" onClick={handlePrev}>
                            <LeftOutlined />
                        </button>

                        <img
                            src={products[activeIndex].image}
                            alt={products[activeIndex].name}
                            className="main-product-img"
                        />

                        <div className="product-watermark">
                            HandStory <br /> 0987599814
                        </div>

                        <button className="slider-btn next" onClick={handleNext}>
                            <RightOutlined />
                        </button>
                    </div>

                    {/* THUMBNAILS */}
                    <div className="thumbnails vertical">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img src={product.image} alt={product.name} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* STYLES */}
            <style>{`
        .products-section {
          padding: 0px 20px 40px 20px;
          background: white;
        }

        .products-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        /* ===== HEADING ===== */
        .products-heading {
          position: relative;
          display: inline-block;
        }

        .heading-main {
  margin: 0;
  font-size: 86px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(217, 217, 217);
  text-align: center;
}


        .heading-small {
  position: absolute;
  top: 80px;              /* chỉnh lên / xuống tại đây */
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: 800;
  color: rgb(94, 23, 235);
  letter-spacing: 1px;
  
}


        /* ===== LAYOUT ===== */
        .slider-layout {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 30px;
          align-items: center;
        }

        /* ===== MAIN PRODUCT ===== */
        .main-product {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
        }

        .main-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-product:hover .main-product-img {
          transform: scale(1.05);
        }

        .product-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 3px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
          pointer-events: none;
        }

        /* ===== SLIDER BUTTON ===== */
        .slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  font-size: 18px;              /* icon size */
  color: #5e17eb;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: all 0.25s ease;
  z-index: 10;
}


       .slider-btn:hover {
  background: #5e17eb;
  color: white;
  transform: translateY(-50%) scale(1.1);
}


        .slider-btn.prev {
          left: 20px;
        }

        .slider-btn.next {
          right: 20px;
        }

        /* ===== THUMBNAILS ===== */
        .thumbnails.vertical {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .thumbnail {
          width: 100%;
          height: 130px;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail:hover {
          opacity: 0.8;
          transform: translateY(-5px);
        }

        .thumbnail.active {
          border-color: #667eea;
          opacity: 1;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .slider-layout {
            grid-template-columns: 1fr;
          }

          .thumbnails.vertical {
            flex-direction: row;
            overflow-x: auto;
            justify-content: center;
          }

          .thumbnail {
            width: 80px;
            height: 80px;
            flex-shrink: 0;
          }

          .heading-main {
            font-size: 32px;
          }
        }
      `}</style>
        </section>
    );
};

export default Products;
