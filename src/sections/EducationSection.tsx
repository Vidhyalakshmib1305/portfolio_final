import FadeIn from '../components/FadeIn';
import { education, certifications, publication, leadership } from '../data/content';

export default function EducationSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-6 mb-20 sm:mb-28">
        {education.map((edu, i) => (
          <FadeIn key={edu.school} delay={i * 0.1} y={20}>
            <div
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-6"
              style={{ borderBottom: i < education.length - 1 ? '1px solid rgba(215, 226, 234, 0.15)' : 'none' }}
            >
              <div>
                <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}>
                  {edu.school}
                </h3>
                <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base mt-1">{edu.degree}</p>
              </div>
              <span className="text-[#D7E2EA]/50 uppercase tracking-wide text-sm flex-shrink-0">{edu.period}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 sm:gap-16">
        <FadeIn delay={0.1} y={20}>
          <div>
            <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl mb-5">
              Certifications
            </h3>
            <ul className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7E2EA]/70 text-sm sm:text-base font-light hover:text-[#D7E2EA] transition-colors"
                  >
                    {cert.name} <span className="text-[#D7E2EA]/40">-- {cert.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div>
            <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl mb-5">
              Leadership & Hackathons
            </h3>
            <ul className="flex flex-col gap-3">
              {leadership.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7E2EA]/70 text-sm sm:text-base font-light hover:text-[#D7E2EA] transition-colors"
                  >
                    {item.name} <span className="text-[#D7E2EA]/40">-- {item.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} y={20}>
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 pt-10" style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}>
          <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl mb-3">
            Publication
          </h3>
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 text-sm sm:text-base font-light hover:text-[#D7E2EA] transition-colors leading-relaxed block max-w-3xl"
          >
            {publication.title}
          </a>
          <p className="text-[#D7E2EA]/40 text-xs sm:text-sm mt-1">{publication.venue}</p>
        </div>
      </FadeIn>
    </section>
  );
}
