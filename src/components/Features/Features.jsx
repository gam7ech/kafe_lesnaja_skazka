import './Features.scss';
import feature1 from '../../assets/images/features-icon-1.png';
import feature2 from '../../assets/images/features-icon-2.png';
import feature3 from '../../assets/images/features-icon-3.png';
import feature4 from '../../assets/images/features-icon-4.png';

function Features() {
    return (
        <section className="section features text-center">
            <div className="container">
                <p className="section-subtitle label-2">Почему выбирают нас</p>
                <h2 className="headline-1 section-title">Наши ключевые преимущества</h2>
                <ul className="grid-list">
                    <li className="feature-item">
                        <div className="feature-card">
                            <div className="card-icon">
                                <img src={feature1} width="100" height="80" loading="lazy" alt="Гигиена" />
                            </div>
                            <h3 className="title-2 card-title">Гигиена и безопасность</h3>
                            <p className="label-1 card-text">Используем сертифицированные продукты и строгий контроль на кухне.</p>
                        </div>
                    </li>
                    <li className="feature-item">
                        <div className="feature-card">
                            <div className="card-icon">
                                <img src={feature2} width="100" height="80" loading="lazy" alt="Атмосфера" />
                            </div>
                            <h3 className="title-2 card-title">Уютная атмосфера</h3>
                            <p className="label-1 card-text">Дизайнерский интерьер и комфортная зона для гостей.</p>
                        </div>
                    </li>
                    <li className="feature-item">
                        <div className="feature-card">
                            <div className="card-icon">
                                <img src={feature3} width="100" height="80" loading="lazy" alt="Повара" />
                            </div>
                            <h3 className="title-2 card-title">Профессиональные повара</h3>
                            <p className="label-1 card-text">Наши шефы с многолетним опытом работают только с лучшими продуктами.</p>
                        </div>
                    </li>
                    <li className="feature-item">
                        <div className="feature-card">
                            <div className="card-icon">
                                <img src={feature4} width="100" height="80" loading="lazy" alt="Мероприятия" />
                            </div>
                            <h3 className="title-2 card-title">Организация мероприятий</h3>
                            <p className="label-1 card-text">Проведем банкеты, свадьбы и корпоративы под ключ.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Features;