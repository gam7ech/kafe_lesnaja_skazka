import './Services.scss';
import testimonialBg from '../../assets/images/testimonial-bg.webp';

import { servicesList } from '../../data/servicesData';

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
                    
                    {servicesList.map((service, index) => (
                        <div 
                            className={`service-card ${service.highlight ? 'highlight' : ''}`} 
                            key={index}
                        >
                            <div className="card-icon">
                                <ion-icon name={service.icon}></ion-icon>
                            </div>
                            <h3 className="headline-3 card-title">{service.title}</h3>
                            <ul className="service-list">
                                {service.items.map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <div className="cta-block">
                    <p className="headline-2 cta-text">Готовы организовать ваш идеальный праздник</p>
                </div>
            </div>
        </section>
    );
}

export default Services;