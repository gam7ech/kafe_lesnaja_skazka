// Координаты кафе
const cafeCoords = '51.648046,39.107922';

// Функция для открытия Яндекс.Карт
export const openYandexRoute = (e) => {
    e.preventDefault();
    const url = `https://yandex.ru/maps/?rtext=~${cafeCoords}&mode=routes`;
    window.open(url, '_blank');
}

export const siteConfig = {
    phone: '+79525454235',
    phoneFormatted: '+7 (952) 545-42-35',
    email: 'lesnayaskazkarest@gmail.com',
    address: 'Проспект Патриотов 52Е',
    workHours: 'Ежедневно с 11:00 до 01:00',
    workHoursShort: 'с 11:00 до 01:00',
    whatsappLink: 'https://wa.me/79525454235',
    instagramUsername: 'lesnayaskazka_rest',
    instagramLink: 'https://instagram.com/lesnayaskazka_rest',
};