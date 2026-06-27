import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { profile } from '../data/content';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/70 text-center max-w-xl mx-auto font-light leading-relaxed mb-12 sm:mb-16" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)' }}>
          I'm always glad to talk about AI, agents, and interesting problems. Reach out below.
        </p>
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
        <ContactLink icon={<Mail size={18} />} label={profile.email} href={`mailto:${profile.email}`} />
        <ContactLink icon={<Phone size={18} />} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
        <ContactLink icon={<Linkedin size={18} />} label="LinkedIn" href={profile.linkedin} />
        <ContactLink icon={<Github size={18} />} label="GitHub" href={profile.github} />
      </div>

      <p className="text-center text-[#D7E2EA]/30 text-xs uppercase tracking-widest mt-20 sm:mt-28">
        &copy; {new Date().getFullYear()} Vidhyalakshmi B
      </p>
    </section>
  );
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {icon}
      {label}
    </a>
  );
}
