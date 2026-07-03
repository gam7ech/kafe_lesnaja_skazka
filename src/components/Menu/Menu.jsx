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
            {item.description && <p className="item-description">{item.description}</p>}
        </div>
    );
}

function Menu() {
    const [openAccordion, setOpenAccordion] = useState(['Холодные закуски']);
    const accordionRefs = useRef({});

    const toggleAccordion = (itemName) => {
        setOpenAccordion(prevOpen => {
            const isOpen = prevOpen.includes(itemName);

            const newState = isOpen
                ? prevOpen.filter(item => item !== itemName)
                : [itemName];

            setTimeout(() => {
                const element = accordionRefs.current[itemName];

                if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            }, 150);

            return newState;
        });
    };

    const handleShareMenu = () => {
        const message = `Привет! Зацени меню в «Лесной Сказке». \n\nТам есть всё, от закусок до блюд на мангале. \n\nПосмотри сам: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };
    
    const renderAccordionItem = (category) => (
        <div
            ref={(el) => (accordionRefs.current[category.title] = el)}
            className={`accordion-item ${openAccordion.includes(category.title) ? 'active' : ''}`}
            key={category.title}
        >
            <button className="accordion-header" onClick={() => toggleAccordion(category.title)}>
                <span>{category.title}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <div className="accordion-content">
                {category.image && (
                    <div className="menu-section-image">
                        <img src={category.image} alt={category.title} />
                    </div>
                )}

                {category.items.map(item => (
                    <MenuItem item={item} key={item.name} />
                ))}
            </div>
        </div>
    );

    return (
        <section className="section menu" aria-label="menu" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">БЛЮДА НАШЕГО ЗАВЕДЕНИЯ</p>
                <h2 className="headline-1 section-title text-center">МЕНЮ</h2>
                
                <div className="menu-content active" id="banquet-menu">
                    <div className="menu-accordion">
                        {banquetMenu.map(category => renderAccordionItem(category))}
                    </div>
                </div>

                <div className="text-center menu-cta">
                    <button id="shareWhatsApp" className="btn whatsapp-btn" onClick={handleShareMenu}>
                        <span>Поделиться в WhatsApp</span>
                    </button>
                </div>
                
                <img src={shape5} width="921" height="1036" loading="lazy" alt="" className="shape shape-2 move-anim" />
                <img src={shape6} width="343" height="345" loading="lazy" alt="" className="shape shape-3 move-anim" />
            </div>
        </section>
    );
}

export default Menu;