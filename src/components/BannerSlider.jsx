import { useEffect, useState } from "react";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner6 from "../assets/banner6.jpg";
import "../styles/banner.css";

const slides = [
    {
        image: banner6,
        title: "Quà tặng theo mùa độc đáo",
        desc: "Quà tặng cá nhân hoá – thủ công – độc bản cho người bạn yêu thương",
        position: "left"
    },
    {
        image: banner2,
        title: "Chất liệu cao cấp",
        desc: "Sử dụng vải canvas bền đẹp, chỉ thêu Nhật Bản",
        position: "center"
    },
    {
        image: banner3,
        title: "Thiết kế theo yêu cầu",
        desc: "Tự chọn tên, màu sắc, kiểu dáng – tạo nên món quà duy nhất",
        position: "center"
    },
];

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="banner">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`banner-slide ${i === index ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="banner-overlay" />
                </div>
            ))}

            {index !== 1 && index !== 0 && (
                <div className={`banner-content position-${slides[index].position}`}>
                    <h1
                        key={`title-${index}`}
                        className="banner-title animate-title"
                    >
                        {slides[index].title}
                    </h1>

                    <p
                        key={`desc-${index}`}
                        className="banner-desc animate-desc"
                    >
                        {slides[index].desc}
                    </p>

                    <button className="btn-primary animate-btn">
                        Thiết kế thiệp ngay
                    </button>
                </div>
            )}

            <div className="banner-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`dot ${i === index ? "active" : ""}`}
                        aria-label={`Chuyển đến slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default BannerSlider;