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
                <span>К</span>
                <span>а</span>
                <span>ф</span>
                <span>е</span>
                <span>-</span>
                <span>Б</span>
                <span>а</span>
                <span>р</span>
                <span className="preloader__space"></span>
                <span>Л</span>
                <span>е</span>
                <span>с</span>
                <span>н</span>
                <span>а</span>
                <span>я</span>
                <span className="preloader__space"></span>
                <span>С</span>
                <span>к</span>
                <span>а</span>
                <span>з</span>
                <span>к</span>
                <span>а</span>
            </div>
        </div>
    );
}

export default Preloader;