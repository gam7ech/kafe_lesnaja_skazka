import './Footer.scss';

import { siteConfig, openYandexRoute } from '../../data/siteConfig';
import Icon from '../common/Icon';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-contacts">
                        <h3 className="footer-title">Контакты</h3>
                        <div className="contact-item">
                            <Icon name="location" className="contact-icon" />
                            <a href="#" onClick={openYandexRoute} className="address-link">{siteConfig.address}</a>
                        </div>
                        <div className="contact-item">
                            <Icon name="email" className="contact-icon" />
                            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                        </div>
                        <div className="contact-item">
                            <Icon name="phone" className="contact-icon" />
                            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h3 className="footer-title">Мы в соцсетях</h3>
                        <div className="social-links">
                            <a href={siteConfig.vkLink} className="social-link vk" target="_blank">
                                <Icon name="vk" className="social-icon" />
                                ВКонтакте
                            </a>
                            <a href={siteConfig.whatsappLink} className="social-link whatsapp" target="_blank">
                                <Icon name="whatsapp" className="social-icon" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <div className="footer-hours">
                        <Icon name="clock" className="clock-icon" />
                        <span>{siteConfig.workHours}</span> 
                    </div>
                    <div className="footer-copyright">
                        <span>&copy; 2003 - {currentYear}. Кафе - Бар "Лесная Сказка" <a href="https://gam7ech.vercel.app/" target="_blank">Разработано | Gam7ech</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;