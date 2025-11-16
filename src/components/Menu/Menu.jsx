import { useState } from 'react';
import './Menu.scss';
import coldAppetizersImg from '../../assets/images/menu/cold-appetizers.webp';
import chefSpecialImg from '../../assets/images/menu/chef-special.webp';
import saladsImg from '../../assets/images/menu/salads.webp';
import hotAppetizersImg from '../../assets/images/menu/hot-appetizers.webp';
import pizzaImg from '../../assets/images/menu/pizza.webp';
import mainCoursesImg from '../../assets/images/menu/main-courses.webp';
import grillImg from '../../assets/images/menu/grill.webp';
import garnishesImg from '../../assets/images/menu/garnishes.webp';
import breadImg from '../../assets/images/menu/bread.webp';
import saucesImg from '../../assets/images/menu/sauces.webp';
import shape5 from '../../assets/images/shape-5.png';
import shape6 from '../../assets/images/shape-6.png';

function Menu() {
    const [openAccordion, setOpenAccordion] = useState(['Холодные закуски']);

    const toggleAccordion = (itemName) => {
        setOpenAccordion(prevOpen =>
            prevOpen.includes(itemName)
                ? prevOpen.filter(item => item !== itemName)
                : [itemName]
        );
    };

    const handleShareMenu = () => {
        
        const message = `🍽️ Привет! Зацени меню в «Лесной Сказке». \n\nТам есть всё, от закусок до блюд на мангале. \n\nПосмотри сам: ${window.location.href}`;

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };
    
    const renderAccordionItem = (title, imgSrc, content) => (
        <div className={`accordion-item ${openAccordion.includes(title) ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleAccordion(title)}>
                <span>{title}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            <div className="accordion-content">
                {imgSrc && (
                    <div className="menu-section-image">
                        <img src={imgSrc} alt={title} />
                    </div>
                )}
                {content}
            </div>
        </div>
    );

    return (
        <section className="section menu" aria-label="menu" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">БЛЮДА НАШЕГО ЗАВЕДЕНИЯ</p>
                <h2 className="headline-1 section-title text-center">НАШЕ БАНКЕТНОЕ МЕНЮ</h2>
                
                <div className="menu-content active" id="banquet-menu">
                    <div className="menu-accordion">

                        {renderAccordionItem('Холодные закуски', coldAppetizersImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Овощной букет</h3><div className="item-weight">320 г</div><div className="item-price">420 ₽</div></div><p className="item-description">Свежие сезонные овощи: сочные помидоры, хрустящие огурцы, сладкий перец на подушке из салатных листьев</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Зелёная тарелка</h3><div className="item-weight">50 г</div><div className="item-price">180 ₽</div></div><p className="item-description">Свежесобранные ароматные травы: кинза, петрушка, укроп, зелёный лук</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Мясное ассорти</h3><div className="item-weight">200 г</div><div className="item-price">570 ₽</div></div><p className="item-description">Нарезка премиальных мясных деликатесов: шейка, карбонат, колбаса, сервелат</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Мясное ассорти от шефа</h3><div className="item-weight">250 г</div><div className="item-price">700 ₽</div></div><p className="item-description">Фирменная композиция: куриный рулет, говяжий язык, домашняя буженина</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Рыбное ассорти</h3><div className="item-weight">250 г</div><div className="item-price">1100 ₽</div></div><p className="item-description">Дегустация благородных рыб: семга, масляная рыба, угорь с лимоном и зеленью</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Семга слабосолёная</h3><div className="item-weight">125 г</div><div className="item-price">500 ₽</div></div><p className="item-description">Нежные ломтики отборной семги с маслинами и лимоном</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Ассорти со скумбрией или сельдью</h3><div className="item-weight">200 г</div><div className="item-price">540 ₽</div></div><p className="item-description">Традиционная подача с гарниром из свежей зелени</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Сырная тарелка</h3><div className="item-weight">350 г</div><div className="item-price">580 ₽</div></div><p className="item-description">Подборка сыров: моцарелла, косичка, чечил, гауда, сыр с пажитником</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Грибной бочонок</h3><div className="item-weight">150 г</div><div className="item-price">330 ₽</div></div><p className="item-description">Маринованные грибы по домашнему рецепту</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Маслины, оливки</h3><div className="item-weight">100 г</div><div className="item-price">280 ₽</div></div><p className="item-description">Отборные оливки и маслины сорта Каламата</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Домашние разносолы</h3><div className="item-weight">320 г</div><div className="item-price">450 ₽</div></div><p className="item-description">Квашеная капуста, корейская морковь, солёные огурцы и помидоры, черемша</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Фруктовая тарелка</h3><div className="item-weight">650 г</div><div className="item-price">670 ₽</div></div><p className="item-description">Свежие сезонные фрукты: яблоки, киви, груши, апельсины, виноград</p></div>
                            </>
                        ))}
                        
                        {renderAccordionItem('Закуски от шефа', chefSpecialImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Рулетки из ветчины</h3><div className="item-weight">8 шт</div><div className="item-price">550 ₽</div></div><p className="item-description">Нежная ветчина с еврейским салатом и хрустящими гренками</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Тарталетки с еврейским салатом</h3><div className="item-weight">5 шт</div><div className="item-price">320 ₽</div></div><p className="item-description">Хрустящие корзиночки с традиционной начинкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Тарталетка с красной икрой</h3><div className="item-weight">1 шт</div><div className="item-price">120 ₽</div></div><p className="item-description">Изысканная подача красной икры</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Тарталетка с салатом столичный</h3><div className="item-weight">1 шт</div><div className="item-price">120 ₽</div></div><p className="item-description">Классический вкус в миниатюрной подаче</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Тарталетка с салатом "Нежность"</h3><div className="item-weight">1 шт</div><div className="item-price">120 ₽</div></div><p className="item-description">Нежная воздушная композиция</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Тарталетка с салатом "Царский"</h3><div className="item-weight">1L</div><div className="item-price">120 ₽</div></div><p className="item-description">Благородное сочетание вкусов</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Брускеты ассорти</h3><div className="item-weight">6 шт</div><div className="item-price">1100 ₽</div></div><p className="item-description">2 с сыром, 2 с авокадо/семгой, 2 с шеей с/к</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Рулетики из баклажанов</h3><div className="item-weight">8 шт</div><div className="item-price">650 ₽</div></div><p className="item-description">Запечённые баклажаны с грецким орехом и чесночным соусом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Грибы фаршированные</h3><div className="item-weight">8 шт</div><div className="item-price">600 ₽</div></div><p className="item-description">Шляпки шампиньонов с куриным филе под сырной шапкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Долма</h3><div className="item-weight">15 шт</div><div className="item-price">490 ₽</div></div><p className="item-description">Нежная баранина в виноградных листьях</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Блинчики с семгой и творожным сыром</h3><div className="item-weight">200 г</div><div className="item-price">570 ₽</div></div><p className="item-description">Тонкие блинчики с благородной начинкой</p></div>
                            </>
                        ))}
                        
                        {renderAccordionItem('Салаты', saladsImg, ( 
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Дары моря</h3><div className="item-weight">200 г</div><div className="item-price">520 ₽</div></div><p className="item-description">Семга, кальмар, креветки, сыр фета, свежий помидор</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Каприз</h3><div className="item-weight">200 г</div><div className="item-price">450 ₽</div></div><p className="item-description">Говядина, куриное филе, ветчина, грибы, пекинская капуста</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Цезарь с курицей</h3><div className="item-weight">250 г</div><div className="item-price">460 ₽</div></div><p className="item-description">Классический вариант с хрустящими гренками и пармезаном</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Цезарь с семгой</h3><div className="item-weight">250 г</div><div className="item-price">510 ₽</div></div><p className="item-description">Утончённая версия с лососем</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Цезарь с креветками</h3><div className="item-weight">250 г</div><div className="item-price">530 ₽</div></div><p className="item-description">Изысканное сочетание с королевскими креветками</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Фирменный</h3><div className="item-weight">250 г</div><div className="item-price">480 ₽</div></div><p className="item-description">Говядина, маринованные грибы, кедровые орехи</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Столичный</h3><div className="item-weight">200 г</div><div className="item-price">350 ₽</div></div><p className="item-description">Традиционный рецепт с курицей и свежими овощами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Мясной по-корейски</h3><div className="item-weight">250 г</div><div className="item-price">510 ₽</div></div><p className="item-description">Острая говядина со свежими овощами и кинзой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Оливье с семгой и перепелиным яйцом</h3><div className="item-weight">200 г</div><div className="item-price">460 ₽</div></div><p className="item-description">Обновлённая классика с благородными ингредиентами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Капрезе</h3><div className="item-weight">250 г</div><div className="item-price">450 ₽</div></div><p className="item-description">Свежие моцарелла и томаты с базиликом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Пражский</h3><div className="item-weight">200 г</div><div className="item-price">380/410 ₽</div></div><p className="item-description">С курицей или говядиной, зелёным яблоком и корнишонами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Греческий</h3><div className="item-weight">200 г</div><div className="item-price">390 ₽</div></div><p className="item-description">Свежие овощи, оливки и сыр фета</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Нежность</h3><div className="item-weight">200 г</div><div className="item-price">390 ₽</div></div><p className="item-description">Нежное сочетание курицы, ананаса и грецкого ореха</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Венеция</h3><div className="item-weight">200 г</div><div className="item-price">500 ₽</div></div><p className="item-description">Морской микс из креветок, кальмаров и мидий</p></div>
                            </>
                        ))}
                        
                        {renderAccordionItem('Горячие закуски', hotAppetizersImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Жюльен с курицей</h3><div className="item-weight">120 г</div><div className="item-price">300 ₽</div></div><p className="item-description">Нежная курица с шампиньонами под сырной корочкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Жюльен с языком</h3><div className="item-weight">120 г</div><div className="item-price">340 ₽</div></div><p className="item-description">Говяжий язык с шампиньонами в сливочном соусе</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Жюльен с грибами</h3><div className="item-weight">120 г</div><div className="item-price">280 ₽</div></div><p className="item-description">Шампиньоны в нежном сливочном соусе</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Жюльен с семгой</h3><div className="item-weight">120 г</div><div className="item-price">340 ₽</div></div><p className="item-description">Лосось с шампиньонами под сырной шапкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Мидии "Киви"</h3><div className="item-weight">5 шт</div><div className="item-price">570 ₽</div></div><p className="item-description">Запечённые мидии с сыром и базиликом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Куриные наггетсы</h3><div className="item-weight">300 г</div><div className="item-price">370 ₽</div></div><p className="item-description">Хрустящие куриные наггетсы с картофелем фри</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Осетинский пирог с мясом</h3><div className="item-weight">900 г</div><div className="item-price">1500 ₽</div></div><p className="item-description">Традиционный пирог с сочной мясной начинкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Осетинский пирог с сыром</h3><div className="item-weight">900 г</div><div className="item-price">1350 ₽</div></div><p className="item-description">Нежный пирог с расплавленным сыром</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Осетинский пирог с картофелем и сыром</h3><div className="item-weight">900 г</div><div className="item-price">1000 ₽</div></div><p className="item-description">Сытный пирог с картофелем и сырной начинкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Куриная отбивная</h3><div className="item-weight">350 г</div><div className="item-price">470 ₽</div></div><p className="item-description">Нежная курица в хрустящей панировке</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Пицца', pizzaImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Пицца Маргарита</h3><div className="item-weight">30 см</div><div className="item-price">430 ₽</div></div><p className="item-description">Классическая пицца с томатами и моцареллой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Пицца Неаполитанская</h3><div className="item-weight">30 см</div><div className="item-price">480 ₽</div></div><p className="item-description">С куриным филе, шампиньонами и свежими томатами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Пицца Венеция</h3><div className="item-weight">30 см</div><div className="item-price">500 ₽</div></div><p className="item-description">С морепродуктами и свежими томатами</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Горячие блюда', mainCoursesImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Мясо по-монастырски</h3><div className="item-weight">230 г</div><div className="item-price">460 ₽</div></div><p className="item-description">Свиная корейка с грибами под сырной корочкой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Жаркое по-домашнему</h3><div className="item-weight">350 г</div><div className="item-price">460 ₽</div></div><p className="item-description">Свинина или курица с картофелем и овощами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Мясной рулет</h3><div className="item-weight">200 г</div><div className="item-price">440 ₽</div></div><p className="item-description">Свинина с шампиньонами под сливочным соусом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Горбуша по-норвежски</h3><div className="item-weight">200 г</div><div className="item-price">430 ₽</div></div><p className="item-description">Запечённая горбуша с овощами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Семга под сливочно-креветочным соусом</h3><div className="item-weight">200 г</div><div className="item-price">750 ₽</div></div><p className="item-description">Нежный лосось с креветками в сливочном соусе</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Курица с ананасом</h3><div className="item-weight">200 г</div><div className="item-price">420 ₽</div></div><p className="item-description">Нежное куриное филе с ананасами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Плов</h3><div className="item-weight">1 кг</div><div className="item-price">1300-1600 ₽</div></div><p className="item-description">С курицей, говядиной или бараниной (заказ от 3 кг)</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Блюда на мангале', grillImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Ассорти с мангала</h3><div className="item-weight">1.5 кг</div><div className="item-price">4100 ₽</div></div><p className="item-description">Свинина мякоть, свинина на кости, люля-кебаб, баранья на кости, крылья</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Свинина мякоть</h3><div className="item-weight">100 г</div><div className="item-price">200 ₽</div></div><p className="item-description">Нежная свиная вырезка на углях</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Свинина на кости</h3><div className="item-weight">100 г</div><div className="item-price">210 ₽</div></div><p className="item-description">Ароматная свинина на ребре</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Баранья мякоть</h3><div className="item-weight">100 г</div><div className="item-price">400 ₽</div></div><p className="item-description">Нежное мясо молодого барашка</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Кара ягнёнка</h3><div className="item-weight">100 г</div><div className="item-price">400 ₽</div></div><p className="item-description">Бедро молодого барашка на углях</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Свиные рёбра</h3><div className="item-weight">100 г</div><div className="item-price">190 ₽</div></div><p className="item-description">Ароматные свиные рёбрышки</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Баранья на кости</h3><div className="item-weight">100 г</div><div className="item-price">340 ₽</div></div><p className="item-description">Баранья корейка на углях</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Люля-кебаб из баранины</h3><div className="item-weight">100 г</div><div className="item-price">330 ₽</div></div><p className="item-description">Традиционный восточный кебаб</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Люля-кебаб из свинины</h3><div className="item-weight">100 г</div><div className="item-price">220 ₽</div></div><p className="item-description">Нежный кебаб из свиного фарша</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Люля-кебаб из телятины</h3><div className="item-weight">100 г</div><div className="item-price">330 ₽</div></div><p className="item-description">Нежный кебаб из телятины</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Люля-кебаб из курицы</h3><div className="item-weight">100 г</div><div className="item-price">210 ₽</div></div><p className="item-description">Диетический вариант кебаба</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Крылья куриные</h3><div className="item-weight">100 г</div><div className="item-price">185 ₽</div></div><p className="item-description">Хрустящие куриные крылышки</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Куриная грудка</h3><div className="item-weight">100 г</div><div className="item-price">190 ₽</div></div><p className="item-description">Нежное куриное филе на углях</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Овощи на мангале</h3><div className="item-weight">100 г</div><div className="item-price">180 ₽</div></div><p className="item-description">Сезонные овощи-гриль</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Семга на мангале</h3><div className="item-weight">100 г</div><div className="item-price">420 ₽</div></div><p className="item-description">Лосось на углях с зеленью</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Картофель на мангале</h3><div className="item-weight">100 г</div><div className="item-price">100 ₽</div></div><p className="item-description">Ароматный картофель с травами</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Грибы шампиньоны</h3><div className="item-weight">100 г</div><div className="item-price">180 ₽</div></div><p className="item-description">Шампиньоны на углях</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Гарниры', garnishesImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Картофель отварной с маслом и зеленью</h3><div className="item-weight">150 г</div><div className="item-price">150 ₽</div></div><p className="item-description">Молодой картофель с ароматным маслом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Картофельное пюре</h3><div className="item-weight">150 г</div><div className="item-price">170 ₽</div></div><p className="item-description">Нежное пюре с молоком и маслом</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Картофельные дольки</h3><div className="item-weight">150 г</div><div className="item-price">200 ₽</div></div><p className="item-description">Хрустящие дольки с кожурой</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Картофель фри</h3><div className="item-weight">150 г</div><div className="item-price">180 ₽</div></div><p className="item-description">Хрустящая золотистая картошка</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Рис басмати</h3><div className="item-weight">150 г</div><div className="item-price">180 ₽</div></div><p className="item-description">Ароматный рассыпчатый рис</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Хлеб', breadImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Лаваш</h3><div className="item-price">100 ₽</div></div><p className="item-description">Традиционный лаваш</p></div>
                                <div className="menu-item"><div className="item-header"><h3>Хлебная корзина</h3><div className="item-price">150 ₽</div></div><p className="item-description">Ассорти из свежего хлеба и лаваша</p></div>
                            </>
                        ))}

                        {renderAccordionItem('Соусы', saucesImg, (
                            <>
                                <div className="menu-item"><div className="item-header"><h3>Соус фирменный к мясу</h3><div className="item-weight">70 г</div><div className="item-price">100 ₽</div></div></div>
                                <div className="menu-item"><div className="item-header"><h3>Соус сметанно-чесночный</h3><div className="item-weight">70 г</div><div className="item-price">100 ₽</div></div></div>
                                <div className="menu-item"><div className="item-header"><h3>Соус барбекю</h3><div className="item-weight">70 г</div><div className="item-price">100 ₽</div></div></div>
                                <div className="menu-item"><div className="item-header"><h3>Соус тартар</h3><div className="item-weight">70 г</div><div className="item-price">90 ₽</div></div></div>
                                <div className="menu-item"><div className="item-header"><h3>Соус сырный</h3><div className="item-weight">70 г</div><div className="item-price">120 ₽</div></div></div>
                                <div className="menu-item"><div className="item-header"><h3>Соус наршараб</h3><div className="item-price">150 ₽</div></div></div>
                            </>
                        ))}

                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '30px' }}>
                    <button id="shareWhatsApp" className="btn whatsapp-btn" onClick={handleShareMenu}>
                        <span>Поделиться в WhatsApp</span>
                        <ion-icon name="logo-whatsapp" className="whatsapp-icon"></ion-icon>
                    </button>
                </div>
                <img src={shape5} width="921" height="1036" loading="lazy" alt="" className="shape shape-2 move-anim" />
                <img src={shape6} width="343" height="345" loading="lazy" alt="" className="shape shape-3 move-anim" />
            </div>
        </section>
    );
}

export default Menu;