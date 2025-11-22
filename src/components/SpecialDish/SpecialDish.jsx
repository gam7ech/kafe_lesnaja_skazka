import './SpecialDish.scss';
import dishBanner from '../../assets/images/special-dish-banner.webp';
import badge from '../../assets/images/badge-1.png';
import shape4 from '../../assets/images/shape-4.png';
import shape9 from '../../assets/images/shape-9.png';

function SpecialDish() {
    return (
        <section className="special-dish text-center" aria-label="brand" id="brand">
            <div className="special-dish-banner">
                <img src={dishBanner} width="940" height="900" loading="lazy" alt="Фирменный шашлык" className="img-cover" />
            </div>
            <div className="special-dish-content bg-black-10">
                <div className="container">
                    <img src={badge} width="28" height="41" loading="lazy" alt="Значок" className="abs-img" />
                    <p className="section-subtitle label-2">Фирменный шедевр</p>
                    <h2 className="headline-1 section-title">Шашлык из свиной шеи</h2>
                    <p className="section-text">
                        Мраморная свинина на дубовых углях, замаринованная на 12 часов в секретной смеси специй. Идеальный баланс хрустящей корочки снаружи и сочной нежности внутри. Только ручная нарезка и дубовый жар..
                    </p>
                    <div className="wrapper">
                        <del className="del body-3">100 грамм</del>
                        <span className="span body-1">230 рублей</span>
                    </div>
                    <a href="#menu" className="btn btn-primary">
                        <span className="text text-1">Весь ассортимент</span>
                        <span className="text text-2" aria-hidden="true">На мангале</span>
                    </a>
                </div>
            </div>
            <img src={shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
            <img src={shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
        </section>
    );
}

export default SpecialDish;