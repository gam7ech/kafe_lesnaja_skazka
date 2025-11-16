import './Features.scss';

import { featuresList } from '../../data/featuresData';

function Features() {
    return (
        <section className="section features text-center">
            <div className="container">
                <p className="section-subtitle label-2">Почему выбирают нас</p>
                <h2 className="headline-1 section-title">Наши ключевые преимущества</h2>
                
                <ul className="grid-list">
                    {featuresList.map((feature, index) => (
                        <li className="feature-item" key={index}>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img src={feature.icon} width="100" height="80" loading="lazy" alt={feature.title} />
                                </div>
                                <h3 className="title-2 card-title">{feature.title}</h3>
                                <p className="label-1 card-text">{feature.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Features;