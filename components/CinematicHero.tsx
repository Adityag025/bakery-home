'use client';

import { business, destinations } from '../config/business';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const moments = [
  { eyebrow: 'A LITTLE JOY, MADE WITH CARE', title: <>Good Things<br /><em>Rise.</em></>, copy: 'A warm welcome starts with something wonderful from the oven.' },
  { eyebrow: 'THE EVERYDAY LITTLE TREAT', title: <>A little<br /><em>delight.</em></>, copy: 'Soft dough. Strawberry-pink glaze. A happy tumble of sprinkles.' },
  { eyebrow: 'GOLDEN, FLAKY, GONE TOO SOON', title: <>Layers of<br /><em>lovely.</em></>, copy: 'Croissants made slowly, folded by hand, and baked until golden.' },
  { eyebrow: 'SLOW DOUGH, GOOD CRUST', title: <>Made with<br /><em>patience.</em></>, copy: 'Honest ingredients and time make a loaf worth gathering around.' },
  { eyebrow: 'YOUR NEXT GOOD THING', title: <>Come on in<br /><em>for more.</em></>, copy: 'Explore the menu and find your new favorite.' },
];
const mobileStory = [
  { moment: moments[1], image: '/donut-cutout.png', alt: 'Pink glazed donut with colorful sprinkles', number: '01' },
  { moment: moments[2], image: '/croissant-cutout.png', alt: 'Golden croissant', number: '02' },
  { moment: moments[3], image: '/artisan-bread-cutout.png', alt: 'Artisan bread loaf', number: '03' },
  { moment: moments[4], image: '/custom-cake-cutout.png', alt: 'Custom celebration cake', number: '04' },
];

export default function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  const product = useRef<HTMLDivElement>(null);
  const scenes = useRef<HTMLDivElement[]>([]);
  const progress = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 759px), (pointer: coarse)').matches;
    const items = scenes.current.filter(Boolean);
    // Mobile uses a normal document flow story below the opening hero. This keeps
    // each scene reachable with native touch scrolling and avoids pinning the page.
    if (reduced || mobile) {
      if (mobile) root.current?.classList.add('mobile-story-mode');
      items.forEach((el, i) => gsap.set(el, { autoAlpha: i === 0 ? 1 : 0 }));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(items.slice(1), { autoAlpha: 0, y: 38 });
      gsap.fromTo(product.current, { autoAlpha: 0, scale: 0.74, rotate: -12 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'power3.out' });
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: '+=380%', scrub: 0.7, pin: true, anticipatePin: 1 } });
      tl.to('.scroll-cue', { autoAlpha: 0, duration: 0.12 }, 0.18);
      items.forEach((scene, i) => {
        if (!i) return;
        const at = [0, 0.76, 1.6, 2.47, 3.1][i];
        if (i === 2) tl.to('.donut-image', { autoAlpha: 0, duration: 0.35 }, at).to('.hero-croissant', { autoAlpha: 1, duration: 0.4 }, at + 0.15);
        if (i === 3) tl.to('.hero-croissant', { autoAlpha: 0, duration: 0.35 }, at).to('.hero-bread', { autoAlpha: 1, duration: 0.4 }, at + 0.15);
        if (i === 4) tl.to('.hero-bread', { autoAlpha: 0, duration: 0.35 }, at).to('.donut-image', { autoAlpha: 1, duration: 0.4 }, at + 0.15);
        tl.to(items[i - 1], { autoAlpha: 0, y: -34, duration: 0.22 }, at)
          .to(scene, { autoAlpha: 1, y: 0, duration: 0.28 }, at + 0.16)
          .to(product.current, { rotate: i % 2 ? 8 : -7, scale: i === 1 ? 1.16 : i === 4 ? 0.86 : 1, x: i === 2 ? -30 : i === 3 ? 22 : 0, duration: 0.9 }, at)
          .to(root.current, { '--scene-tint': i === 2 ? '#f2c39e' : i === 3 ? '#ece2d2' : i === 1 ? '#f9dce2' : '#fff1e5', duration: 0.75 }, at);
      });
      ScrollTrigger.create({ trigger: root.current, start: 'top top', end: '+=380%', onUpdate: s => { if (progress.current) progress.current.style.transform = `scaleX(${s.progress})`; } });
      gsap.to('.crumb', { y: -24, x: 15, rotate: 90, stagger: 0.13, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, root);
    return () => ctx.revert();
  }, { scope: root });

  return <section className="cinematic-hero" id="home" ref={root} aria-label="Good Things Rise bakery introduction">
    <div className="hero-progress"><span ref={progress} /></div>
    <div className="hero-grain" aria-hidden="true" />
    <div className="hero-layout">
      <div className="hero-copy">{moments.map((m, i) => <div className={`hero-scene scene-${i}`} key={m.eyebrow} ref={n => { if (n) scenes.current[i] = n; }}>
        <span className="eyebrow"><i />{m.eyebrow}</span>{i === 0 ? <h1>{m.title}</h1> : <h2>{m.title}</h2>}<p>{m.copy}</p>
        <a className="button button-pink" href={i === 4 ? destinations.menu : destinations.order}>{i === 4 ? 'Explore the Menu' : 'Order Now'}<span aria-hidden="true">↗</span></a>
      </div>)}</div>
      <div className="hero-visual"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="product-halo" />
        <div className="hero-product" ref={product}><Image src="/donut-cutout.png" alt="Pink glazed donut scattered with colorful sprinkles" fill priority sizes="(max-width: 760px) 90vw, 52vw" className="donut-image" /><Image src="/croissant-cutout.png" alt="" aria-hidden="true" fill sizes="(max-width: 760px) 0px, 52vw" className="hero-alt hero-croissant" /><Image src="/artisan-bread-cutout.png" alt="" aria-hidden="true" fill sizes="(max-width: 760px) 0px, 52vw" className="hero-alt hero-bread" /></div>
        <span className="crumb crumb-one" aria-hidden="true">✳</span><span className="crumb crumb-two" aria-hidden="true">✦</span><span className="crumb crumb-three" aria-hidden="true">·</span><div className="visual-note"><span>01 / 04</span><i /> BAKED WITH CARE</div>
      </div>
    </div>
    <div className="scroll-cue"><span>SCROLL TO FEEL THE GOOD</span><i /></div><div className="hero-caption">{business.city} · SINCE {business.year}</div>
    <div className="mobile-story" aria-label="Bakery product story">{mobileStory.map(({ moment, image, alt, number }) => <article className="mobile-story-scene" key={number}>
      <div className="mobile-story-art"><span>{number}</span><Image src={image} alt={alt} fill sizes="(max-width: 759px) 84vw, 0px" /></div>
      <div className="mobile-story-copy"><span className="eyebrow"><i />{moment.eyebrow}</span><h2>{moment.title}</h2><p>{moment.copy}</p><a className="text-link" href={destinations.menu}>Explore the menu <span aria-hidden="true">↗</span></a></div>
    </article>)}</div>
  </section>;
}



