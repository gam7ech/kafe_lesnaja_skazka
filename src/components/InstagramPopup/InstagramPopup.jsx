import { useEffect, useState } from 'react';
import './InstagramPopup.scss';

function InstagramPopup({ isLoading }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 2000); //

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const closePopup = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>

                <button className="popup-close" onClick={closePopup}>
                    ×
                </button>

                <h2>Подписывайся на нас</h2>

                <p>Атмосфера, блюда и новости ресторана</p>

                <a
                    href="https://instagram.com/lesnayaskazka_rest"
                    target="_blank"
                    className="popup-btn"
                >
                    Перейти в Instagram
                </a>

                <div className="popup-mini">
                    🍃 Лесная Сказка
                </div>
            </div>
        </div>
    );
}

export default InstagramPopup;