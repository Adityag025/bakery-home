import Image from "next/image";
import { destinations } from "../config/business";

type Product = { n: string; category: string; title: string; description: string; color: string; image: string; alt: string };
const products: Product[] = [
  { n: "01", category: "THE HAPPY CLASSIC", title: "Handmade donuts", description: "Pillowy, glazed, and made to brighten your day.", color: "donut-card", image: "/donut-cutout.png", alt: "Pink glazed donut with colorful sprinkles" },
  { n: "02", category: "FOLDED WITH CARE", title: "Butter croissants", description: "Golden layers, a delicate crunch, a soft middle.", color: "croissant-card", image: "/croissant-cutout.png", alt: "Golden flaky butter croissant" },
  { n: "03", category: "SLOW MADE, WELL LOVED", title: "Artisan bread", description: "A deeply golden crust with a lovely open crumb.", color: "bread-card", image: "/artisan-bread-cutout.png", alt: "Round flour-dusted artisan sourdough loaf" },
  { n: "04", category: "MADE FOR YOUR MOMENT", title: "Custom cakes", description: "A little something special for the big day.", color: "cake-card", image: "/custom-cake-cutout.png", alt: "Pink celebration cake with strawberries and flowers" },
];

export function FeaturedProducts() {
  return <section className="products-section section-pad" id="menu">
    <div className="section-heading"><div><span className="eyebrow"><i/> BAKED HERE, LOVED EVERYWHERE</span><h2>A Little Something<br/><em>for Everyone</em></h2></div><p>From the first coffee of the morning to the last bite of something sweet, there’s always a good reason to stop by.</p></div>
    <div className="product-grid">{products.map(item => <article className={`product-card ${item.color}`} key={item.n}>
      <div className="card-art"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, 25vw"/><span className="card-number">{item.n}</span></div>
      <div className="card-meta"><span>{item.category}</span><a href={item.n === "04" ? destinations.customCake : destinations.order} aria-label={`Learn more about ${item.title}`}>↗</a></div>
      <h3>{item.title}</h3><p>{item.description}</p>
    </article>)}</div>
    <div className="menu-actions"><a className="button button-dark" href={destinations.menu}>Ask About the Full Menu <span>↗</span></a><a className="text-link" href={destinations.customCake}>Order a Custom Cake <span>↗</span></a></div>
  </section>;
}

