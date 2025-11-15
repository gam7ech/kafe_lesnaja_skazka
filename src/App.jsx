import { useState, useEffect } from 'react';
import './App.scss';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import SpecialDish from './components/SpecialDish/SpecialDish';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import Delivery from './components/Delivery/Delivery';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.classList.add('loaded');
        }, 3000);

        const parallaxItems = document.querySelectorAll("[data-parallax-item]");

        const handleMouseMove = (event) => {
            let x = (event.clientX / window.innerWidth * 10) - 5;
            let y = (event.clientY / window.innerHeight * 10) - 5;
            x = x - (x * 2);
            y = y - (y * 2);

            for (let i = 0, len = parallaxItems.length; i < len; i++) {
                const speed = Number(parallaxItems[i].dataset.parallaxSpeed);
                parallaxItems[i].style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <Preloader isLoading={isLoading} />
            <Header />
            <main>
                <article>
                    <Hero />
                    <Offers />
                    <About />
                    <SpecialDish />
                    <Menu />
                    <Services />
                    <Delivery />
                    <Features />
                    <Contact />
                </article>
            </main>
            <Footer />
            <BackToTopButton />
        </>
    );
}

export default App;