import './Services.scss';
import testimonialBg from '../../assets/images/testimonial-bg.webp';

function Services() {
    return (
        <section
            className="section testi text-center has-bg-image"
            aria-label="services"
            id="services"
            style={{ backgroundImage: `url(${testimonialBg})` }}
        >
            <div className="overlay-dark"></div>
            <div className="container">
                <h2 className="headline-1 section-title">Наши услуги</h2>
                <div className="services-content">
                    <div className="service-card">
                        <div className="card-icon">
                            <ion-icon name="business-outline"></ion-icon>
                        </div>
                        <h3 className="headline-3 card-title">Просторные помещения</h3>
                        <ul className="service-list">
                            <li><strong>Главный зал</strong> — до 90 человек</li>
                            <li><strong>Банкетный зал</strong> — до 30 гостей</li>
                            <li><strong>Летняя терраса</strong> с уютными беседками</li>
                            <li><strong>Шатёр</strong> — крытая площадка на 30 персон</li>
                        </ul>
                    </div>
                    <div className="service-card highlight">
                        <div className="card-icon">
                            <ion-icon name="sparkles-outline"></ion-icon>
                        </div>
                        <h3 className="headline-3 card-title">Дополнительные услуги</h3>
                        <ul className="service-list">
                            <li>Организация банкетов "под ключ"</li>
                            <li>Бесплатный Wi-Fi и парковка</li>
                            <li>Упаковка блюд навынос</li>
                            <li>Доставка блюд на дом</li>
                        </ul>
                    </div>
                </div>
                <div className="cta-block">
                    <p className="headline-2 cta-text">Готовы организовать ваш идеальный праздник</p>
                </div>
            </div>
        </section>
    );
}

export default Services;