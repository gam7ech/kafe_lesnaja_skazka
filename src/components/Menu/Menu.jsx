import { useState, useRef } from 'react';
import './Menu.scss';

import { banquetMenu } from '../../data/menuData'; 
import shape5 from '../../assets/images/shape-5.png';
import shape6 from '../../assets/images/shape-6.png';

function MenuItem({ item }) {
    return (
        <div className="menu-item">
            <div className="item-header">
                <h3>{item.name}</h3>
                {item.weight && <div className="item-weight">{item.weight}</div>}
                <div className="item-price">{item.price}</div>
            </div>
            {item.description && (
                <p className="item-description">{item.description}</p>
            )}
        </div>
    );
}

function Menu() {
    const [openAccordion, setOpenAccordion] = useState(['Холодные закуски']);
    const refs = useRef({});

    const toggleAccordion = (title) => {
        setOpenAccordion(prev => {
            const isOpen = prev.includes(title);

            const newState = isOpen
                ? prev.filter(i => i !== title)
                : [title];

            return newState;
        });

        // ждём 2 кадра после рендера (это важно)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const el = refs.current[title];

                if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 90;

                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    const handleShareMenu = () => {
        const message = `Привет! Посмотри меню «Лесной Сказки»:\n\n${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="section menu" id="menu">
            <div className="container">

                <p className="section-subtitle text-center label-2">
                    БЛЮДА НАШЕГО ЗАВЕДЕНИЯ
                </p>

                <h2 className="headline-1 section-title text-center">
                    МЕНЮ
                </h2>

                <div className="menu-accordion">

                    {banquetMenu.map((category) => {
                        const isActive = openAccordion.includes(category.title);

                        return (
                            <div
                                key={category.title}
                                ref={(el) => (refs.current[category.title] = el)}
                                className={`accordion-item ${isActive ? 'active' : ''}`}
                            >
                                <button
                                    className="accordion-header"
                                    onClick={() => toggleAccordion(category.title)}
                                >
                                    <span>{category.title}</span>
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </button>

                                <div className="accordion-content">
                                    {category.image && (
                                        <div className="menu-section-image">
                                            <img src={category.image} alt={category.title} />
                                        </div>
                                    )}

                                    {category.items.map((item) => (
                                        <MenuItem key={item.name} item={item} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center menu-cta">
                    <button className="btn whatsapp-btn" onClick={handleShareMenu}>
                        <span>Поделиться в WhatsApp</span>
                    </button>
                </div>

                <img src={shape5} className="shape shape-2 move-anim" alt="" />
                <img src={shape6} className="shape shape-3 move-anim" alt="" />
            </div>
        </section>
    );
}

export default Menu;