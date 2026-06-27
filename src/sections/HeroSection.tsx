import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { profile } from '../data/content';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            hi, i&apos;m vidhya
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {profile.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <HeroPortrait />
        </Magnet>
      </FadeIn>
    </section>
  );
}

function HeroPortrait() {
  return (
    <svg viewBox="0 0 520 420" className="w-full h-auto" role="img" aria-label="Abstract portrait illustration">
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#7621B0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7621B0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="260" cy="195" rx="230" ry="195" fill="url(#glow)" />
      <g opacity="0.9">
        <path
          d="M260 50 C 340 50, 400 110, 400 200 C 400 290, 350 360, 260 380 C 170 360, 120 290, 120 200 C 120 110, 180 50, 260 50 Z"
          fill="none"
          stroke="url(#heroGrad)"
          strokeWidth="3"
        />
        <circle cx="195" cy="190" r="10" fill="url(#heroGrad)" />
        <circle cx="325" cy="190" r="10" fill="url(#heroGrad)" />
        <path d="M210 260 Q260 290 310 260" stroke="url(#heroGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M120 200 C 90 180, 70 220, 90 260 C 105 290, 140 290, 150 260" stroke="url(#heroGrad)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M400 200 C 430 180, 450 220, 430 260 C 415 290, 380 290, 370 260" stroke="url(#heroGrad)" strokeWidth="2" fill="none" opacity="0.6" />
      </g>
      <g opacity="0.5">
        <line x1="160" y1="400" x2="360" y2="400" stroke="url(#heroGrad)" strokeWidth="2" />
      </g>
    </svg>
  );
}
