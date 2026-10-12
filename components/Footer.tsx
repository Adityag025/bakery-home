import {business} from "../config/business";
export function Footer(){return <footer className="site-footer" id="order"><a className="footer-wordmark" href="#home">{business.name}<span>Good Things Rise.</span></a><div className="footer-links"><a href="#menu">The menu</a><a href="#story">Our story</a><a href="#cakes">Custom cakes</a><a href="#visit">Find us</a></div><span className="footer-email">{business.email}</span><div className="footer-bottom"><span>© {business.year} {business.name}. MADE WITH A LITTLE LOVE.</span><span>{business.city} · GOOD THINGS RISE HERE.</span></div></footer>}


