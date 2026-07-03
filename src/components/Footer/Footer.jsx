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
                            <a href={siteConfig.instagramLink} className="social-link instagram" target="_blank">
                                <ion-icon name="logo-instagram" class="social-icon"></ion-icon>
                                Instagram
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
                    <div className="footer-copyright">
                        <span>&copy; 2003 - {currentYear}. Ресторан "Лесная Сказка" <a href="https://gam7ech.vercel.app/" target="_blank">Разработано | GAMA</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;