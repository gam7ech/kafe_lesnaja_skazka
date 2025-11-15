import { useState } from 'react';
import './Menu.scss';
import coldAppetizersImg from '../../assets/images/menu/cold-appetizers.webp';
import chefSpecialImg from '../../assets/images/menu/chef-special.webp';
import saladsImg from '../../assets/images/menu/salads.webp';
import hotAppetizersImg from '../../assets/images/menu/hot-appetizers.webp';
import pizzaImg from '../../assets/images/menu/pizza.webp';
import mainCoursesImg from '../../assets/images/menu/main-courses.webp';
import grillImg from '../../assets/images/menu/grill.webp';
import garnishesImg from '../../assets/images/menu/garnishes.webp';
import breadImg from '../../assets/images/menu/bread.webp';
import saucesImg from '../../assets/images/menu/sauces.webp';
import shape5 from '../../assets/images/shape-5.png';
import shape6 from '../../assets/images/shape-6.png';

function Menu() {
    const [activeTab, setActiveTab] = useState('banquet');
    const [openAccordion, setOpenAccordion] = useState(['Холодные закуски']);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const toggleAccordion = (itemName) => {
        setOpenAccordion(prevOpen =>
            prevOpen.includes(itemName)
                ? prevOpen.filter(item => item !== itemName)
                : [itemName]
        );
    };

    const handleShareMenu = () => {
        const menuText = `🍽 Меню от Кафе-Бар "Лесная Сказка" 🍷\n\n` +
            `👨‍🍳 Закуски от Шефа ➖\n` +
            `• Брускеты ассорти - 1100 ₽\n` +
            `• Рулетики из баклажанов - 650 ₽\n\n` +
            `🥩 Блюда на мангале ➖\n` +
            `• Кара ягнёнка - 400 ₽\n` +
            `• Свинина мякоть - 200 ₽\n\n` +
            `🗺 Проспект Патриотов 52Е, Воронеж\n` +
            `📲 +7 (473) 261-76-00\n` +
            `✅ Ежедневно с 11:00 до 00:00\n\n` +
            `Полное меню: ${window.location.href}`;

        window.open(`https://wa.me/?text=${encodeURIComponent(menuText)}`, '_blank');
    };

    const renderAccordionItem = (title, imgSrc, content) => (
        <div className={`accordion-item ${openAccordion.includes(title) ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(title)}>
                <span>{title}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <div className="accordion-content">
                <div className="menu-section-image">
                    <img src={imgSrc} alt={title} />
                </div>
                {content}
            </div>
        </div>
    );

    return (
        <section className="section menu" aria-label="menu" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">БЛЮДА НАШЕГО ЗАВЕДЕНИЯ</p>
                <h2 className="headline-1 section-title text-center">НАШЕ МЕНЮ</h2>
                <div className="menu-tabs text-center">
                    <button
                        className={`menu-tab ${activeTab === 'daily' ? 'active' : ''}`}
                        onClick={() => handleTabClick('daily')}
                    >
                        Повседневное
                    </button>
                    <button
                        className={`menu-tab ${activeTab === 'banquet' ? 'active' : ''}`}
                        onClick={() => handleTabClick('banquet')}
                    >
                        Банкетное
                    </button>
                </div>

                <div className={`menu-content ${activeTab === 'daily' ? 'active' : ''}`} id="daily-menu">
                    <div className="menu-accordion">
                    </div>
                </div>

                <div className={`menu-content ${activeTab === 'banquet' ? 'active' : ''}`} id="banquet-menu">
                    <div className="menu-accordion">
                        {renderAccordionItem('Холодные закуски', coldAppetizersImg, (
                            <>
                                <div className="menu-item">
                                    <div className="item-header">
                                        <h3>Овощной букет</h3>
                                        <div className="item-weight">320 г</div>
                                        <div className="item-price">420 ₽</div>
                                    </div>
                                    <p className="item-description">Свежие сезонные овощи: сочные помидоры, хрустящие огурцы, сладкий перец на подушке из салатных листьев</p>
                                </div>
                            </>
                        ))}
                        
                        {renderAccordionItem('Закуски от шефа', chefSpecialImg, (
                            <>
                                <div className="menu-item">
                                    <div className="item-header">
                                        <h3>Рулетки из ветчины</h3>
                                        <div className="item-weight">8 шт</div>
                                        <div className="item-price">550 ₽</div>
                                    </div>
                                    <p className="item-description">Нежная ветчина с еврейским салатом и хрустящими гренками</p>
                                </div>
                            </>
                        ))}
                        
                        {renderAccordionItem('Салаты', saladsImg, ( <></> ))}
                        {renderAccordionItem('Горячие закуски', hotAppetizersImg, ( <></> ))}
                        {renderAccordionItem('Пицца', pizzaImg, ( <></> ))}
                        {renderAccordionItem('Горячие блюда', mainCoursesImg, ( <></> ))}
                        {renderAccordionItem('Блюда на мангале', grillImg, ( <></> ))}
                        {renderAccordionItem('Гарниры', garnishesImg, ( <></> ))}
                        {renderAccordionItem('Хлеб', breadImg, ( <></> ))}
                        {renderAccordionItem('Соусы', saucesImg, ( <></> ))}

                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '30px' }}>
                    <button id="shareWhatsApp" className="btn whatsapp-btn" onClick={handleShareMenu}>
                        <span className="text text-1">Отправить в WhatsApp</span>
                        <span className="text text-2" aria-hidden="true">
                            <ion-icon name="logo-whatsapp" className="whatsapp-icon"></ion-icon>
                        </span>
                    </button>
                </div>
                <img src={shape5} width="921" height="1036" loading="lazy" alt="" className="shape shape-2 move-anim" />
                <img src={shape6} width="343" height="345" loading="lazy" alt="" className="shape shape-3 move-anim" />
            </div>
        </section>
    );
}

export default Menu;