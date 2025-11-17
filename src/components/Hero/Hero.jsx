import { useState, useEffect, useRef } from 'react';
import './Hero.scss';
import slider1 from '../../assets/images/hero-slider-1.webp';
import slider2 from '../../assets/images/hero-slider-2.webp';
import slider3 from '../../assets/images/hero-slider-3.webp';
import heroIcon from '../../assets/images/hero-icon.png';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPreloading, setIsPreloading] = useState(true);
    const totalSlides = 3;
    const intervalRef = useRef(null);

    const slideNext = () => {
        setCurrentSlide(prev => (prev >= totalSlides - 1 ? 0 : prev + 1));
    };

    const slidePrev = () => {
        setCurrentSlide(prev => (prev <= 0 ? totalSlides - 1 : prev - 1));
    };

    const startAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(slideNext, 7000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        const img = new Image();
        img.src = slider1;
        
        img.onload = () => {
            setIsPreloading(false);
            startAutoSlide();
        };
        
        return () => {
            stopAutoSlide();
            img.onload = null;
        };
    }, []);

    return (
        <section className={`hero text-center ${isPreloading ? 'loading' : ''}`} aria-label="home" id="home">
            <ul className="hero-slider">
                <li className={`slider-item ${currentSlide === 0 && !isPreloading ? 'active' : ''}`}>
                    <div className="slider-bg">
                        <img src={slider1} width="1880" height="950" alt="Кавказский шашлык" className="img-cover" />
                        <div className="overlay-dark"></div>
                    </div>
                    <p className="label-2 section-subtitle slider-reveal">Традиции и качество</p>
                    <h1 className="display-1 hero-title slider-reveal">
                        Искусство кавказского <br />
                        шашлыка от мастера
                    </h1>
                    <p className="body-2 hero-text slider-reveal">
                        Мясо на дубовых углях по старинным рецептам
                    </p>
                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Меню</span>
                        <span className="text text-2" aria-hidden="true">Листать</span>
                    </a>
                </li>
                
                <li className={`slider-item ${currentSlide === 1 && !isPreloading ? 'active' : ''}`}>
                    <div className="slider-bg">
                        <img src={slider2} width="1880" height="950" alt="Авторские салаты" className="img-cover" />
                        <div className="overlay-dark"></div>
                    </div>
                    <p className="label-2 section-subtitle slider-reveal">Незабываемые впечатления</p>
                    <h1 className="display-1 hero-title slider-reveal">
                        Свежесть и гармония <br />
                        в каждой тарелке
                    </h1>
                    <p className="body-2 hero-text slider-reveal">
                        Авторские салаты из сезонных продуктов
                    </p>
                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Меню</span>
                        <span className="text text-2" aria-hidden="true">Листать</span>
                    </a>
                </li>
                
                <li className={`slider-item ${currentSlide === 2 && !isPreloading ? 'active' : ''}`}>
                    <div className="slider-bg">
                        <img src={slider3} width="1880" height="950" alt="Лучшие вина" className="img-cover" />
                        <div className="overlay-dark"></div>
                    </div>
                    <p className="label-2 section-subtitle slider-reveal">Вкусно и атмосферно</p>
                    <h1 className="display-1 hero-title slider-reveal">
                        Изысканная палитра <br />
                        виноградных терруаров
                    </h1>
                    <p className="body-2 hero-text slider-reveal">
                        Лучшие вина для вашего гастрономического путешествия
                    </p>
                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Меню</span>
                        <span className="text text-2" aria-hidden="true">Листать</span>
                    </a>
                </li>
            </ul>
            
            <button
                className="slider-btn prev"
                aria-label="slide to previous"
                onClick={slidePrev}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <ion-icon name="chevron-back"></ion-icon>
            </button>
            
            <button
                className="slider-btn next"
                aria-label="slide to next"
                onClick={slideNext}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <ion-icon name="chevron-forward"></ion-icon>
            </button>
            
            <a href="#menu" className="hero-btn has-after">
                <img src={heroIcon} width="48" height="48" alt="booking icon" />
                <span className="label-2 text-center span">ОТКРЫТЬ МЕНЮ</span>
            </a>
        </section>
    );
}

export default Hero;