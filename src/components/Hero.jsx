import React from "react";
import '../assets/css/hero.css'
import pizzaHero from '../assets/img/pizza_casera.jpg'

const Hero = () => {
    return (
        <section id = "header" className="jumbotron text-center background-hero" style={{ backgroundImage: `url(${pizzaHero})` }} >
            <h1 className="display-3 text-light">¡Mamma Mia Pizza!</h1>
            <p className="lead text-light">¡Siempre con los mejores ingredientes naturales!</p>
        </section >
    )
}
export default Hero;