import { useEffect, useRef, useState } from 'react';
import { marqueeWords } from '../data/content';

function tripleArray<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Words = tripleArray(marqueeWords.slice(0, 12));
  const row2Words = tripleArray(marqueeWords.slice(12));

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1Words.map((word, i) => (
            <MarqueeTile key={`r1-${i}`} word={word} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2Words.map((word, i) => (
            <MarqueeTile key={`r2-${i}`} word={word} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeTile({ word }: { word: string }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl border border-[#2a2a2a] bg-[#131313] flex items-center justify-center px-6"
      style={{ width: '260px', height: '110px' }}
    >
      <span className="hero-heading font-bold uppercase tracking-wide text-lg sm:text-xl text-center">
        {word}
      </span>
    </div>
  );
}
