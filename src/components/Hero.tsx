import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Play } from "lucide-react";

export default function Hero() {
  return (
    // scroll-mt-20 makes sure that when we jump here with #home, the
    // sticky navbar (h-16) doesn't cover the top of the section.
    <section
      id="home"
      className="relative flex min-h-[600px] scroll-mt-20 items-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/hero.jpg"
        alt="Aadikavi Bhanubhakta Campus buildings"
        fill
        priority
        className="object-cover"
      />
      {/* Dark blue overlay so the white text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-950/70 to-blue-950/60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white ring-1 ring-white/30">
          <BadgeCheck size={14} />
          Affiliated to Tribhuvan University
        </div>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Aadikavi Bhanubhakta Campus
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
          Empowering Minds, Enriching Futures. A leading institution
          committed to academic excellence in Tanahun, Nepal. We shape the
          leaders of tomorrow through holistic development and rigorous
          education.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#faculty"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0E76BD] shadow-sm transition-transform hover:scale-[1.02]"
          >
            Admissions Open 2026
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Play size={16} />
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}
