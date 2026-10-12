import {business} from "../config/business";
export function LocationSection(){return <section className="visit-section section-pad" id="visit"><div className="visit-top"><span className="eyebrow"><i/> COME SAY HELLO</span><h2>A good day<br/>starts <em>right here.</em></h2></div><div className="visit-bottom"><div><span className="visit-label">FIND OUR LITTLE CORNER</span><p>{business.name}<br/>{business.streetAddress}<br/>{business.postalCode}</p></div><div><span className="visit-label">WHEN THE OVEN’S ON</span><p>Opening hours<br/>{business.openingHours}</p></div><a className="button button-cream" href="#visit">Plan your visit <span>↗</span></a></div></section>}


