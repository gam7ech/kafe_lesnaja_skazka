import { useState, useEffect } from 'react';
import './BackToTopButton.scss';

function BackToTopButton() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY >= 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            href="#top"
            className={`back-top-btn ${isActive ? 'active' : ''}`}
            aria-label="back to top"
            onClick={scrollToTop}
        >
            <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
    );
}

export default BackToTopButton;