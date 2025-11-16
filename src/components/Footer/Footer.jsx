import './Footer.scss';
import { siteConfig, openYandexRoute } from '../../data/siteConfig';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-contacts">
                        <h3 className="footer-title">Контакты</h3>
                        <div className="contact-item">
                            <ion-icon name="location-outline" class="contact-icon"></ion-icon>
                            <a href="#" onClick={openYandexRoute} className="address-link">{siteConfig.address}</a>
                        </div>
                        <div className="contact-item">
                            <ion-icon name="mail-outline" class="contact-icon"></ion-icon>
                            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                        </div>
                        <div className="contact-item">
                            <ion-icon name="call-outline" class="contact-icon"></ion-icon>
                            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h3 className="footer-title">Мы в соцсетях</h3>
                        <div className="social-links">
                            <a href={siteConfig.vkLink} className="social-link vk" target="_blank">
                                <ion-icon name="logo-vk" class="social-icon"></ion-icon>
                                ВКонтакте
                            </a>
                            <a href={siteConfig.whatsappLink} className="social-link whatsapp" target="_blank">
                                <ion-icon name="logo-whatsapp" class="social-icon"></ion-icon>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <div className="footer-hours">
                        <ion-icon name="time-outline" class="clock-icon"></ion-icon>
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