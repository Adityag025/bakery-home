import {business,destinations} from "../config/business";
export function Header() { return <header className="site-header"><a className="wordmark" href="#home" aria-label={`${business.name} home`}><span className="wordmark-mark">b.</span><span className="wordmark-name">{business.name}<small>BAKED WITH A LITTLE LOVE</small></span></a><nav className="main-nav" aria-label="Main navigation"><a href="#menu">The menu</a><a href="#story">Our story</a><a href="#visit">Find us</a></nav><a className="button button-dark header-order" href={destinations.order}>Order Now <span aria-hidden="true">&#8599;</span></a></header>; }




