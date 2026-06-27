import FadeIn from '../components/FadeIn';
import { experience } from '../data/content';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
        {experience.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.1} y={30}>
            <div className="flex flex-col gap-3" style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)', paddingBottom: '2.5rem' }}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
                  {job.company}
                </h3>
                <span className="text-[#0C0C0C]/50 uppercase tracking-wide text-sm">{job.period}</span>
              </div>
              <p className="text-[#0C0C0C]/70 font-light" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
                {job.role}
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {job.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-[#0C0C0C]/60 font-light leading-relaxed"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-[#0C0C0C]/40 text-xs sm:text-sm uppercase tracking-wide mt-2">{job.tech}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
