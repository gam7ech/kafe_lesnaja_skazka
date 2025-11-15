import { useEffect, useRef } from 'react';
import './Contact.scss';

const openYandexRoute = (e) => {
    e.preventDefault();
    const url = `https://yandex.ru/maps/?rtext=~51.648046,39.107922&mode=routes`;
    window.open(url, '_blank');
}

const callTaxi = (e) => {
    e.preventDefault();
    window.open('yandextaxi://route?end-lat=51.648046&end-lon=39.107922&end-name=Лесная Сказка');
}

function Contact() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!window.ymaps) return;

        window.ymaps.ready(init);

        function init() {
            if (!mapRef.current) return;

            const cafeCoords = [51.648046, 39.107922];
            const myMap = new window.ymaps.Map(mapRef.current, {
                center: cafeCoords,
                zoom: 16,
                controls: ['zoomControl']
            });

            myMap.geoObjects.add(new window.ymaps.Placemark(cafeCoords, {
                hintContent: 'Кафе-Бар "Лесная Сказка"',
                balloonContent: "Проспект Патриотов 52Е, Воронеж"
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/assets/images/map-marker.png',
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48]
            }));
        }
    }, []);

    return (
        <section className="section map-section bg-black-10" aria-label="contacts" id="contacts">
            <div className="container">
                <p className="section-subtitle label-2 text-center">Как нас найти</p>
                <h2 className="section-title headline-1 text-center">Мы ждём вас!</h2>
                <div className="map-container">
                    <div id="yandex-map" ref={mapRef} style={{ width: '100%', height: '500px', borderRadius: '16px' }}></div>
                    <div className="map-overlay">
                        <div className="map-info">
                            <h3 className="title-2">Кафе-Бар <br /> Лесная Сказка</h3>
                            <div className="contact-info">
                                <a href="#" onClick={openYandexRoute} className="address-link">Проспект Патриотов 52Е</a>
                            </div>
                            <div className="contact-info">
                                <a href="tel:+74732617600" className="contact-link">
                                    <ion-icon name="call-outline"></ion-icon>
                                    +7 (473) 261-76-00
                                </a>
                                <p className="work-hours">
                                    <ion-icon name="time-outline"></ion-icon>
                                    Ежедневно с 11:00 до 00:00
                                </p>
                            </div>
                            <div className="route-buttons">
                                <button id="build-route" className="route-btn" onClick={openYandexRoute}>
                                    <ion-icon name="navigate-outline"></ion-icon>
                                    Построить маршрут
                                </button>
                                <button id="call-taxi" className="route-btn secondary" onClick={callTaxi}>
                                    <ion-icon name="car-outline"></ion-icon>
                                    Вызвать такси
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;