import { useState } from 'react';
import './Delivery.scss';

function Delivery() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [promo, setPromo] = useState('');

    const isFormValid = name.trim() !== '' && phone.trim() !== '';

    const handleSubmit = () => {
        if (!isFormValid) return;
        
        const message = `Новый заказ на доставку:\n\nИмя: ${name.trim()}\nТелефон: ${phone.trim()}\nПромокод: ${promo.trim() || 'Не использован'}\n\nПожалуйста, перезвоните для оформления и подтверждения заказа.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/79525454235?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="reservation" aria-label="delivery" id="delivery">
            <div className="container">
                <div className="form reservation-form bg-black-10">
                    <form className="form-left" id="deliveryForm">
                        <h2 className="headline-1 text-center">Заказать доставку</h2>
                        <p className="form-text text-center">
                            Позвоните нам или закажите обратный звонок<br />
                            Связь по номеру: <a href="tel:+74732617600" className="link">+7 (473) 261-76-00</a>
                        </p>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                autoComplete="off"
                                className="input-field"
                                id="clientName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Номер телефона"
                                autoComplete="off"
                                className="input-field"
                                id="clientPhone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="promo-block">
                            <div className="icon-wrapper promo-icon-wrapper">
                                <ion-icon name="pricetag-outline" aria-hidden="true"></ion-icon>
                                <input
                                    type="text"
                                    name="promo"
                                    placeholder="Ваш промокод"
                                    autoComplete="off"
                                    className="input-field promo-input"
                                    id="clientPromo"
                                    value={promo}
                                    onChange={(e) => setPromo(e.target.value)}
                                />
                            </div>
                            <p className="promo-hint">Промокод из рекламного буклета</p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            id="whatsappBtn"
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                        >
                            <span className="text text-1">Жду звонка для подтверждения</span>
                            <span className="text text-2" aria-hidden="true">Заказать доставку</span>
                        </button>
                    </form>
                    
                    <div className="form-right text-center">
                        <h2 className="headline-1 text-center">Условия доставки</h2>
                        <div className="delivery-conditions">
                            <div className="condition-item">
                                <p className="condition-title">Время доставки</p>
                                <p className="condition-value">60-90 минут</p>
                            </div>
                            <div className="condition-item">
                                <p className="condition-title">Минимальный заказ</p>
                                <p className="condition-value">500 ₽</p>
                            </div>
                            <div className="condition-item">
                                <p className="condition-title">Стоимость доставки</p>
                                <p className="condition-value">150 ₽</p>
                            </div>
                            <div className="condition-item highlight">
                                <p className="condition-title">Бесплатная доставка</p>
                                <p className="condition-value">от 2000 ₽</p>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="payment-info">
                            <p className="contact-label">Способы оплаты</p>
                            <div className="payment-icons">
                                <ion-icon name="cash-outline" title="Наличные"></ion-icon>
                                <ion-icon name="card-outline" title="Перевод"></ion-icon>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="delivery-zone">
                            <p className="contact-label">Зона доставки</p>
                            <p className="zone-desc">По всему г. Воронеж</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Delivery;