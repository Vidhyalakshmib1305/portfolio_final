import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects } from '../data/content';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky top-24 md:top-32 h-[85vh]" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] flex-shrink-0"
              style={{ fontSize: 'clamp(2rem, 6vw, 90px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category} &middot; {project.period}
              </span>
              <h3 className="hero-heading font-bold uppercase text-xl sm:text-3xl md:text-4xl leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} className="flex-shrink-0 self-start" />
        </div>

        <p className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-wide">{project.tech}</p>

        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2 sm:gap-3">
            {project.points.map((point, i) => (
              <li key={i} className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
