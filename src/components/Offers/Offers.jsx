import './Offers.scss';
import service1 from '../../assets/images/service-1.webp';
import service2 from '../../assets/images/service-2.webp';
import service3 from '../../assets/images/service-3.webp';
import shape1 from '../../assets/images/shape-1.png';
import shape2 from '../../assets/images/shape-2.png';

function Offers() {
    return (
        <section className="section service bg-black-10 text-center" id="offers">
            <div className="container">
                <p className="section-subtitle label-2">Наши основные блюда</p>
                <h2 className="headline-1 section-title">Мы предлагаем лучшее</h2>
                <p className="section-text">
                    Кафе-Бар Лесная Сказка - это гармония традиционных рецептов и современных гастрономических тенденций.
                    Мы тщательно отбираем продукты и создаем неповторимые вкусы.
                </p>
                
                <ul className="grid-list">
                    <li className="service-card">
                        <a href="#menu" className="has-before hover:shine">
                            <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                                <img src={service1} width="285" height="336" loading="lazy" alt="Свежие салаты" className="img-cover" />
                            </figure>
                        </a>
                        <div className="card-content">
                            <h3 className="title-4 card-title">
                                <a href="#menu">Салаты</a>
                            </h3>
                            <a href="#menu" className="btn-text hover-underline label-2">Выбрать салат</a>
                        </div>
                    </li>
                    <li className="service-card">
                        <a href="#menu" className="has-before hover:shine">
                            <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                                <img src={service2} width="285" height="336" loading="lazy" alt="Горячие блюда" className="img-cover" />
                            </figure>
                        </a>
                        <div className="card-content">
                            <h3 className="title-4 card-title">
                                <a href="#menu">Горячие блюда</a>
                            </h3>
                            <a href="#menu" className="btn-text hover-underline label-2">Выбрать горячее блюдо</a>
                        </div>
                    </li>
                    <li className="service-card">
                        <a href="#menu" className="has-before hover:shine">
                            <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                                <img src={service3} width="285" height="336" loading="lazy" alt="Блюда на мангале" className="img-cover" />
                            </figure>
                        </a>
                        <div className="card-content">
                            <h3 className="title-4 card-title">
                                <a href="#menu">Блюда на мангале</a>
                            </h3>
                            <a href="#menu" className="btn-text hover-underline label-2">Выбрать блюдо на мангале</a>
                        </div>
                    </li>
                </ul>
                <img src={shape1} width="246" height="412" loading="lazy" alt="" className="shape shape-1 move-anim" />
                <img src={shape2} width="343" height="345" loading="lazy" alt="" className="shape shape-2 move-anim" />
            </div>
        </section>
    );
}

export default Offers;