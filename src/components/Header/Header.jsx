import { useState, useEffect, useRef } from 'react';
import './Header.scss';
import logoImg from '../../assets/images/logo.avif';

const openYandexRoute = (e) => {
    e.preventDefault();
    const url = `https://yandex.ru/maps/?rtext=~51.648046,39.107922&mode=routes`;
    window.open(url, '_blank');
}

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const lastScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsHeaderActive(scrollY >= 50);
            setIsHeaderHidden(scrollY > lastScrollPos.current && scrollY > 50);
            lastScrollPos.current = scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('nav-active');
        } else {
            document.body.classList.remove('nav-active');
        }
        return () => document.body.classList.remove('nav-active');
    }, [isNavOpen]);

    const toggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsNavOpen(false);

        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }, 300);
    };

    return (
        <>
            <div className="topbar">
                <div className="container">
                    <address className="topbar-item">
                        <div className="icon">
                            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <a href="#" onClick={openYandexRoute} className="address-link">Проспект Патриотов 52Е</a>
                    </address>
                    <div className="separator"></div>
                    <div className="topbar-item item-2">
                        <div className="icon">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">Мы работаем с 11:00 до 00:00</span>
                    </div>
                    <a href="tel:+74732617600" className="topbar-item link">
                        <div className="icon">
                            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">+7 (473) 261-76-00</span>
                    </a>
                    <div className="separator"></div>
                    <a href="mailto:kafe.lesnaja-skazka@yandex.ru" className="topbar-item link">
                        <div className="icon">
                            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">kafe.lesnaja-skazka@yandex.ru</span>
                    </a>
                </div>
            </div>

            <header className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHidden ? 'hide' : ''}`}>
                <div className="container">
                    <a href="/" className="logo">
                        <img src={logoImg} width="160" height="50" alt="Кафе-Бар Лесная Сказка" />
                    </a>

                    <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
                        <button className="close-btn" aria-label="close menu" onClick={toggleNav}>
                            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <a href="/" className="logo">
                            <img src={logoImg} width="160" height="50" alt="Кафе-Бар Лесная Сказка" />
                        </a>
                        <ul className="navbar-list">
                            <li className="navbar-item"><a href="#home" className="navbar-link hover-underline active" onClick={(e) => handleNavLinkClick(e, '#home')}><span className="span">ГЛАВНАЯ</span></a></li>
                            <li className="navbar-item"><a href="#menu" className="navbar-link hover-underline" onClick={(e) => handleNavLinkClick(e, '#menu')}><span className="span">МЕНЮ</span></a></li>
                            <li className="navbar-item"><a href="#services" className="navbar-link hover-underline" onClick={(e) => handleNavLinkClick(e, '#services')}><span className="span">УСЛУГИ</span></a></li>
                            <li className="navbar-item"><a href="#delivery" className="navbar-link hover-underline" onClick={(e) => handleNavLinkClick(e, '#delivery')}><span className="span">ДОСТАВКА</span></a></li>
                            <li className="navbar-item"><a href="#contacts" className="navbar-link hover-underline" onClick={(e) => handleNavLinkClick(e, '#contacts')}><span className="span">КОНТАКТЫ</span></a></li>
                            <li className="navbar-item"><a href="#about" className="navbar-link hover-underline" onClick={(e) => handleNavLinkClick(e, '#about')}><span className="span">О НАС</span></a></li>
                        </ul>
                        <div className="text-center">
                            <p className="headline-1 navbar-title">Наша визитка <br /> Кафе-Бар <br /> "Лесная Сказка"</p>
                            <a href="#" onClick={openYandexRoute} className="address-link">Проспект Патриотов 52Е</a>
                            <p className="body-4 navbar-text">Ежедневно с 11:00 до 00:00</p>
                            <a href="mailto:kafe.lesnaja-skazka@yandex.ru" className="body-4 navbar-text link">
                                kafe.lesnaja-skazka@yandex.ru
                            </a>
                            <li className="navbar-item" style={{ border: 'none', margin: '20px 0' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                    <a href="https://wa.me/79525454235" className="social-icon-link" target="_blank" style={{ width: '40px', height: '40px' }}>
                                        <ion-icon name="logo-whatsapp" style={{ fontSize: '28px', color: '#25D366' }}></ion-icon>
                                    </a>
                                    <a href="https://vk.com/vk.comskaska" className="social-icon-link" target="_blank" style={{ width: '40px', height: '40px' }}>
                                        <ion-icon name="logo-vk" style={{ fontSize: '28px', color: '#4A76A8' }}></ion-icon>
                                    </a>
                                </div>
                            </li>
                            <p className="contact-label">По всем вопросам</p>
                            <a href="tel:+74732617600" className="body-1 contact-number hover-underline">+7 (473) 261-76-00</a>
                        </div>
                    </nav>

                    <a href="#brand" className="btn btn-secondary">
                        <span className="text text-1">ФИРМЕННОЕ</span>
                        <span className="text text-2" aria-hidden="true">БЛЮДО</span>
                    </a>
                    
                    <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>
                    
                    <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>
                </div>
            </header>
        </>
    );
}

export default Header;