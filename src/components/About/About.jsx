import './About.scss';
import aboutBanner from '../../assets/images/about-banner.webp';
import aboutAbsImg from '../../assets/images/about-abs-image.webp';

function About() {
    return (
        <section className="section about text-center" aria-label="about" id="about">
            <div className="container">
                <div className="about-content">
                    <p className="label-2 section-subtitle" id="about-label">Наша история</p>
                    <h2 className="headline-1 section-title">ЛЕСНАЯ СКАЗКА</h2>
                    <p className="section-text">
                        С 2003 года Кафе-Бар Лесная Сказка вдохновляет гостей в сердце Воронежа <br /> Наша история - это сказка о волшебстве вкуса, раскрывающаяся на проспекте Патриотов, 52Е
                    </p>
                    <div className="contact-label">Резерв стола и организация банкета</div>
                    <a href="tel:+74732617600" className="body-1 contact-number hover-underline">+7 (473) 261-76-00</a>
                    <a href="#services" className="btn btn-primary">
                        <span className="text text-1">Узнать</span>
                        <span className="text text-2" aria-hidden="true">Подробнее</span>
                    </a>
                </div>
                <figure className="about-banner">
                    <img src={aboutBanner} width="570" height="570" loading="lazy" alt="Интерьер кафе" className="w-100" />
                    <div className="abs-img abs-img-1 has-before">
                        <img src={aboutAbsImg} width="285" height="285" loading="lazy" alt="Музыкант" className="w-100" />
                    </div>
                    <div className="abs-img abs-img-2 has-before"></div>
                </figure>
            </div>
        </section>
    );
}

export default About;