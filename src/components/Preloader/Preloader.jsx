import './Preloader.scss';

function Preloader({ isLoading }) {
    return (
        <div className={`preload ${!isLoading ? 'loaded' : ''}`}>
            <div className="circle"></div>
            <p className="text">Кафе-Бар <br /> "Лесная Сказка"</p>
        </div>
    );
}

export default Preloader;