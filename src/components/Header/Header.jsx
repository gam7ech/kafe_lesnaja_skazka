import { useState, useEffect, useRef } from 'react';
import './Header.scss';
import logoImg from '../../assets/images/logo.avif';

import { siteConfig, openYandexRoute } from '../../data/siteConfig';
import Icon from '../common/Icon';

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
                        <a href="#" onClick={openYandexRoute} className="address-link">{siteConfig.address}</a>
                    </address>
                    <div className="separator"></div>
                    <div className="topbar-item item-2">
                        <div className="icon">
                            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">Мы работаем {siteConfig.workHoursShort}</span>
                    </div>
                    <a href={`tel:${siteConfig.phone}`} className="topbar-item link">
                        <div className="icon">
                            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">{siteConfig.phoneFormatted}</span>
                    </a>
                    <div className="separator"></div>
                    <a href={`mailto:${siteConfig.email}`} className="topbar-item link">
                        <div className="icon">
                            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <span className="span">{siteConfig.email}</span>
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
                            <p className="headline-1 navbar-title">Наша визитка <br /> Кафе-Бар <br /> Лесная Сказка</p>
                            <a href="#" onClick={openYandexRoute} className="address-link">{siteConfig.address}</a>
                            <p className="body-4 navbar-text">{siteConfig.workHours}</p>
                            <a href={`mailto:${siteConfig.email}`} className="body-4 navbar-text link">
                                {siteConfig.email}
                            </a>
                            
                            <div className="social-links">
                                <a href={siteConfig.whatsappLink} className="social-icon-link" target="_blank" aria-label="WhatsApp">
                                    <Icon name="whatsapp" className="icon-whatsapp" />
                                </a>
                                <a href={siteConfig.vkLink} className="social-icon-link" target="_blank" aria-label="VK">
                                    <Icon name="vk" className="icon-vk" />
                                </a>
                            </div>
                            
                            <p className="contact-label">По всем вопросам</p>
                            <a href={`tel:${siteConfig.phone}`} className="body-1 contact-number hover-underline">{siteConfig.phoneFormatted}</a>
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