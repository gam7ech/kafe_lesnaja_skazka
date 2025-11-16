// Координаты кафе
const cafeCoords = '51.648046,39.107922';

// Функция для открытия Яндекс.Карт
export const openYandexRoute = (e) => {
    e.preventDefault();
    const url = `https://yandex.ru/maps/?rtext=~${cafeCoords}&mode=routes`;
    window.open(url, '_blank');
}

// Вся контактная информация
export const siteConfig = {
    phone: '+74732617600',
    phoneFormatted: '+7 (473) 261-76-00',
    email: 'kafe.lesnaja-skazka@yandex.ru',
    address: 'Проспект Патриотов 52Е',
    workHours: 'Ежедневно с 11:00 до 00:00',
    workHoursShort: 'с 11:00 до 00:00',
    whatsappLink: 'https://wa.me/79525454235',
    vkLink: 'https://vk.com/vk.comskaska',
};