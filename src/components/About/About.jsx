import './About.scss';
import aboutBanner from '../../assets/images/about-banner.webp';

function About() {
    return (
        <section className="section about text-center" aria-label="about" id="about">
            <div className="container">
                <div className="about-content">
                    <p className="label-2 section-subtitle" id="about-label">Наша история</p>
                    <h2 className="headline-1 section-title">ЛЕСНАЯ СКАЗКА</h2>
                    <p className="section-text">
                        С 2003 года мы работаем в Воронеже на проспекте Патриотов, 52Е <br /> Ресторан «Лесная Сказка» — место, где вкус и атмосфера соединяются в одном пространстве.
                    </p>
                    <div className="contact-label">Резерв стола и организация банкета</div>
                    <a href="tel:+74732617600" className="body-1 contact-number hover-underline">+7 (952) 545-42-35</a>
                    <a href="#services" className="btn btn-primary">
                        <span className="text text-1">Узнать</span>
                        <span className="text text-2" aria-hidden="true">Подробнее</span>
                    </a>
                </div>
                <figure className="about-banner">
                    <img src={aboutBanner} width="570" height="570" loading="lazy" alt="Интерьер кафе" className="w-100" />
                </figure>
            </div>
        </section>
    );
}

export default About;