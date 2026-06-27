import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { about } from '../data/content';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <CornerGlyph variant="moon" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <CornerGlyph variant="node" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <CornerGlyph variant="block" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <CornerGlyph variant="cluster" />
      </FadeIn>

      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={about.paragraph}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
        />

        <div className="mt-6 sm:mt-10 md:mt-14">
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
}

function CornerGlyph({ variant }: { variant: 'moon' | 'node' | 'block' | 'cluster' }) {
  const common = (
    <defs>
      <linearGradient id={`g-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#646973" />
        <stop offset="100%" stopColor="#BBCCD7" />
      </linearGradient>
    </defs>
  );

  if (variant === 'moon') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label="Decorative crescent graphic">
        {common}
        <circle cx="100" cy="100" r="70" fill="none" stroke={`url(#g-${variant})`} strokeWidth="2" opacity="0.7" />
        <path d="M120 40 A 70 70 0 1 0 120 160 A 55 55 0 1 1 120 40 Z" fill={`url(#g-${variant})`} opacity="0.85" />
      </svg>
    );
  }
  if (variant === 'node') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label="Decorative network node graphic">
        {common}
        <circle cx="100" cy="60" r="10" fill={`url(#g-${variant})`} />
        <circle cx="50" cy="140" r="10" fill={`url(#g-${variant})`} />
        <circle cx="150" cy="140" r="10" fill={`url(#g-${variant})`} />
        <line x1="100" y1="60" x2="50" y2="140" stroke={`url(#g-${variant})`} strokeWidth="2" />
        <line x1="100" y1="60" x2="150" y2="140" stroke={`url(#g-${variant})`} strokeWidth="2" />
        <line x1="50" y1="140" x2="150" y2="140" stroke={`url(#g-${variant})`} strokeWidth="2" />
      </svg>
    );
  }
  if (variant === 'block') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label="Decorative cube graphic">
        {common}
        <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" fill="none" stroke={`url(#g-${variant})`} strokeWidth="2" />
        <line x1="100" y1="30" x2="100" y2="100" stroke={`url(#g-${variant})`} strokeWidth="2" opacity="0.6" />
        <line x1="30" y1="65" x2="100" y2="100" stroke={`url(#g-${variant})`} strokeWidth="2" opacity="0.6" />
        <line x1="170" y1="65" x2="100" y2="100" stroke={`url(#g-${variant})`} strokeWidth="2" opacity="0.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label="Decorative cluster graphic">
      {common}
      <circle cx="70" cy="70" r="35" fill={`url(#g-${variant})`} opacity="0.85" />
      <circle cx="135" cy="115" r="22" fill="none" stroke={`url(#g-${variant})`} strokeWidth="2" />
      <circle cx="100" cy="155" r="14" fill={`url(#g-${variant})`} opacity="0.6" />
    </svg>
  );
}
