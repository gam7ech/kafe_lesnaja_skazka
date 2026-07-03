import { useEffect, useState } from 'react';
import './Preloader.scss';

function Preloader({ isLoading }) {
    const [isBot, setIsBot] = useState(false);

    useEffect(() => {
        const botPattern = /bot|google|baidu|bing|msn|duckduckgo|slurp|yandex/i;
        if (botPattern.test(navigator.userAgent)) {
            setIsBot(true);
        }
    }, []);

    if (isBot) return null;

    return (
        <div className={`preloader ${!isLoading ? 'loaded' : ''}`}>
            <div className="preloader__title">
                <span>Р</span>
                <span>Е</span>
                <span>С</span>
                <span>Т</span>
                <span>О</span>
                <span>Р</span>
                <span>А</span>
                <span>Н</span>
                <span className="preloader__space"></span>
                <span>Л</span>
                <span>Е</span>
                <span>С</span>
                <span>Н</span>
                <span>А</span>
                <span>Я</span>
                <span className="preloader__space"></span>
                <span>С</span>
                <span>К</span>
                <span>А</span>
                <span>З</span>
                <span>К</span>
                <span>А</span>
            </div>
        </div>
    );
}

export default Preloader;