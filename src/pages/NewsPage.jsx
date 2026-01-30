import { useState } from 'react';
import new_anh1 from '../assets/news_anh1.jpg';
import new_anh2 from '../assets/new_anh2.png';

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
  {
    id: 1,
    title: 'Top 10 món quà handmade ý nghĩa dành cho bạn gái',
    excerpt: 'Những món quà handmade luôn mang trong mình sự chân thành và cảm xúc đặc biệt. Nếu bạn đang tìm kiếm một món quà vừa ý nghĩa vừa độc đáo dành cho bạn gái...',
    content: `Quà handmade luôn có một giá trị rất riêng bởi chúng không chỉ là vật chất mà còn là công sức, thời gian và tình cảm của người tặng.

1. Album ảnh handmade  
Một cuốn album nhỏ ghi lại những khoảnh khắc đáng nhớ của hai người sẽ khiến cô ấy vô cùng xúc động.

2. Túi vải thêu tay  
Những chiếc túi vải với họa tiết thêu tên hoặc thông điệp yêu thương đang rất được yêu thích.

3. Nến thơm handmade  
Nến thơm với mùi hương nhẹ nhàng giúp thư giãn và tạo cảm giác ấm áp.

4. Thiệp viết tay  
Dù đơn giản nhưng một tấm thiệp viết tay luôn là điểm cộng lớn.

5. Nước hoa
Không hề nói quá nhưng các cô gái đúng là trùm về mùi hương đó. Bất cứ cô gái nào cũng đều yêu thích mùi thơm và nước hoa là phụ kiện ra ngoài mà không thể thiếu trong túi. Tặng một chai nước hoa tự làm, với cách pha chế mùi hương đúng mùi nàng thích thì chắc chắn cô gái ấy sẽ đổ gục trong vòng tay của bạn.

6. Khăn len tự đan
Một trong các món quà handmade dễ làm tặng bạn gái đó chính là khăn len tự đan. Nhiều người yêu thích việc tỉ mỉ làm những món quà thủ công thì đều biết tới món quà này. Lựa chọn màu sắc thật hợp với nàng và đan cho nàng một chiếc thật xinh. Mùa đông lạnh giá mà có được chiếc khăn ấm áp cùng tình yêu của bạn chắc chắn cô ấy sẽ rất vui và hạnh phúc đó.

7.Bánh kem
Xu hướng làm bánh kem tặng người yêu cũng không còn quá xa lạ bởi nó chính là một trong những món quà handmade đời đầu mà vẫn được yêu thích ở thời điểm hiện tại. Cùng làm tặng cho người bạn yêu một chiếc bánh kem thật ngon, thật thơm để cô ấy cảm nhận được bạn luôn yêu thương và ở bên cạnh nhé!

Khi tặng quà handmade, điều quan trọng nhất không phải là sự hoàn hảo mà là tấm lòng chân thành của bạn.`,
    author: 'HandStory Team',
    views: '2 bình luận',
    date: '12/01/2026',
    image: new_anh1,
    thumbnail: new_anh1
  },
  {
    id: 2,
    title: 'Gợi ý quà tặng sinh nhật cho người yêu khiến ai cũng tan chảy',
    excerpt: 'Sinh nhật là dịp đặc biệt để bạn thể hiện sự quan tâm và tình cảm dành cho người yêu thông qua những món quà ý nghĩa...',
    content: `Sinh nhật không chỉ là ngày kỷ niệm tuổi mới mà còn là cơ hội để bạn thể hiện sự thấu hiểu.

Một số gợi ý quà sinh nhật phổ biến:
- Quà cá nhân hoá: in tên, ngày kỷ niệm
- Trang sức nhỏ xinh
- Đồ handmade
- Một bữa tiệc bất ngờ

Điều quan trọng là món quà phải phù hợp với tính cách và sở thích của người nhận. Đôi khi, một món quà nhỏ nhưng đúng ý còn giá trị hơn những món quà đắt tiền.`,
    author: 'HandStory Team',
    views: '5 bình luận',
    date: '10/01/2026',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80'
  },
  {
    id: 3,
    title: 'Vì sao quà tặng cá nhân hoá ngày càng được ưa chuộng?',
    excerpt: 'Trong những năm gần đây, quà tặng cá nhân hoá trở thành xu hướng bởi sự độc đáo và cảm xúc mà nó mang lại...',
    content: `Quà tặng cá nhân hoá là những món quà được thiết kế riêng cho từng người như in tên, hình ảnh hoặc thông điệp đặc biệt.

Lý do khiến quà cá nhân hoá được yêu thích:
- Không bị trùng lặp
- Mang dấu ấn cá nhân
- Thể hiện sự quan tâm

Những món quà cá nhân hoá phổ biến hiện nay bao gồm: cốc in hình, gối in chữ, tranh canvas, móc khoá khắc tên.`,
    author: 'Admin',
    views: '3 bình luận',
    date: '08/01/2026',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=200&q=80'
  },
  {
    id: 4,
    title: 'Những món quà không nên tặng theo quan niệm Á Đông',
    excerpt: 'Trong văn hoá Á Đông, có những món quà mang ý nghĩa không may mắn mà bạn nên tránh...',
    content: `Theo quan niệm dân gian, một số món quà có thể mang ý nghĩa không tốt.

Những món quà nên tránh:
- Đồng hồ
- Giày dép
- Dao kéo
- Ô dù

Tuy nhiên, đây chỉ là yếu tố tham khảo. Quan trọng nhất vẫn là sự chân thành của người tặng.`,
    author: 'Admin',
    views: '1 bình luận',
    date: '06/01/2026',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=200&q=80'
  },
  {
    id: 5,
    title: 'Cách chọn quà Valentine khiến người ấy nhớ mãi',
    excerpt: 'Valentine là ngày của yêu thương và những món quà mang đầy cảm xúc...',
    content: `Valentine không cần quá cầu kỳ, điều quan trọng là sự chân thành.

Gợi ý quà Valentine:
- Socola handmade
- Hoa và thiệp viết tay
- Quà đôi
- Một buổi hẹn hò bất ngờ`,
    author: 'HandStory Team',
    views: '6 bình luận',
    date: '05/01/2026',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80'
  },
  {
    id: 6,
    title: 'Xu hướng quà tặng handmade năm 2026',
    excerpt: 'Quà handmade tiếp tục là xu hướng được giới trẻ yêu thích trong năm 2026...',
    content: `Năm 2026, người tiêu dùng ngày càng ưu tiên những món quà mang tính thủ công và cá nhân.

Xu hướng nổi bật:
- Sản phẩm thân thiện môi trường
- Quà cá nhân hoá
- Thiết kế tối giản`,
    author: 'HandStory Team',
    views: '0 bình luận',
    date: '03/01/2026',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80'
  },
  {
    id: 7,
    title: 'Nghệ thuật tặng quà: Tặng đúng còn hơn tặng nhiều',
    excerpt: 'Một món quà đúng thời điểm và đúng người sẽ có giá trị lớn hơn rất nhiều...',
    content: `Tặng quà là một nghệ thuật đòi hỏi sự tinh tế.

Nguyên tắc tặng quà:
- Hiểu người nhận
- Chọn thời điểm phù hợp
- Không đặt nặng giá trị vật chất`,
    author: 'Avent Team',
    views: '2 bình luận',
    date: '02/01/2026',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=200&q=80'
  },
  {
    id: 8,
    title: 'Vì sao một tấm thiệp viết tay lại quan trọng đến vậy?',
    excerpt: 'Trong thời đại số, những tấm thiệp viết tay lại càng trở nên quý giá...',
    content: `Thiệp viết tay mang theo cảm xúc thật mà tin nhắn điện tử khó có thể thay thế.

Một vài dòng chữ chân thành có thể khiến người nhận nhớ mãi.`,
    author: 'HandStory Team',
    views: '1 bình luận',
    date: '01/01/2026',
    image: new_anh2,
    thumbnail: new_anh2
  }
];


  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="news-page">
      {/* Hero Header */}
      <div className="hero-header">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Tin tức & Blogs</h1>
          <p className="hero-subtitle">
            Cập nhật những thông tin mới nhất về quà tặng, tình yêu và nghệ thuật sống tinh tế
          </p>
        </div>
      </div>

      <div className="news-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>🔥 TIN TỨC NỔI BẬT</h2>
            <div className="header-underline"></div>
          </div>

          <div className="sidebar-list">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className={`sidebar-item ${selectedArticle?.id === article.id ? 'active' : ''}`}
                onClick={() => handleArticleClick(article)}
              >
                <img src={article.thumbnail} alt={article.title} />
                <div className="sidebar-item-content">
                  <h3>{article.title}</h3>
                  <span className="sidebar-date">📅 {article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {!selectedArticle ? (
            <div className="article-grid">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="article-card"
                  onClick={() => handleArticleClick(article)}
                >
                  <div className="card-image-wrapper">
                    <img src={article.image} alt={article.title} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="article-info">
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <div className="article-meta">
                      <span>✍️ {article.author}</span>
                      <span>•</span>
                      <span>💬 {article.views}</span>
                      <span>•</span>
                      <span>📅 {article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="article-detail">

              <h1 className="detail-title">{selectedArticle.title}</h1>

              <div className="detail-meta">
                <span>✍️ {selectedArticle.author}</span>
                <span>•</span>
                <span>💬 {selectedArticle.views}</span>
                <span>•</span>
                <span>📅 {selectedArticle.date}</span>
              </div>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="detail-image"
              />

              <div className="detail-content">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .news-page {
          background: #f8f9fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        /* Hero Header */
        .hero-header {
          margin-top: 90px;
          position: relative;
          height: 200px;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 20px;
        }

        .breadcrumb {
          font-size: 14px;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 20px;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .hero-subtitle {
          font-size: 18px;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .news-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          padding: 60px 20px;
        }

        /* Sidebar */
        .sidebar {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          height: fit-content;
          position: sticky;
          top: 30px;
        }

        .sidebar-header {
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          color: white;
          padding: 25px 25px;
        }

        .sidebar-header h2 {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .header-underline {
          width: 60px;
          height: 4px;
          background: white;
          margin-top: 10px;
          border-radius: 2px;
        }

        .sidebar-item {
          display: flex;
          gap: 15px;
          padding: 18px 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .sidebar-item:hover {
          background: #fff5f5;
          border-left-color: #6a3ce7;
          transform: translateX(5px);
        }

        .sidebar-item.active {
          background: #fef0f0;
          border-left-color: #e74c3c;
          font-weight: 600;
        }

        .sidebar-item img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .sidebar-item-content h3 {
          font-size: 15px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #333;
        }

        .sidebar-date {
          font-size: 13px;
          color: #888;
        }

        /* Main Content */
        .main-content {
          background: white;
          border-radius: 12px;
          padding: 45px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .article-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .article-card {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
          padding: 25px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .article-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .card-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .article-card:hover .card-image-wrapper img {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .article-card:hover .image-overlay {
          opacity: 1;
        }

        .article-info h2 {
          font-size: 24px;
          font-weight: 700;
          color: #222;
          line-height: 1.4;
          margin: 0 0 15px;
          transition: color 0.3s;
        }

        .article-card:hover h2 {
          color: #613ce7;
        }

        .article-info p {
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #777;
        }

        /* Article Detail */
        .back-button {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 30px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .back-button:hover {
          background: #c0392b;
          transform: translateX(-5px);
        }

        .detail-title {
          font-size: 38px;
          font-weight: 800;
          color: #222;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .detail-meta {
          font-size: 15px;
          color: #888;
          margin-bottom: 35px;
          padding-bottom: 25px;
          border-bottom: 2px solid #eee;
        }

        .detail-image {
          width: 100%;
          max-height: 550px;
          object-fit: cover;
          border-radius: 16px;
          margin: 35px 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .detail-content {
          font-size: 17px;
          line-height: 1.9;
          color: #444;
        }

        .detail-content p {
          margin-bottom: 25px;
          text-align: justify;
        }

        .detail-content p:first-of-type::first-letter {
          font-size: 4em;
          font-weight: 800;
          color: #e74c3c;
          float: left;
          line-height: 0.8;
          margin: 10px 15px 0 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-title { font-size: 40px; }
          .news-container { grid-template-columns: 320px 1fr; gap: 30px; padding: 50px 20px; }
        }

        @media (max-width: 768px) {
          .hero-header { height: 350px; }
          .hero-title { font-size: 36px; }
          .news-container { grid-template-columns: 1fr; }
          .sidebar { position: static; }
          .article-card { grid-template-columns: 1fr; }
          .card-image-wrapper img { height: 280px; }
          .detail-title { font-size: 30px; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 30px; }
          .hero-subtitle { font-size: 16px; }
          .main-content { padding: 25px 20px; }
          .detail-title { font-size: 26px; }
          .detail-content { font-size: 16px; }
        }
      `}</style>
    </div>
  );
};

export default NewsPage;