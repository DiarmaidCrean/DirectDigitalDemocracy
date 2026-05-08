import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The app - Direct Digital Democracy",
  description:
    "The Direct Digital Democracy app is where the movement becomes something citizens carry with them and use. Built to GDS standards, open source, and freely available.",
};

const phases = [
  {
    name: "Discovery",
    description:
      "Understanding what citizens actually need before a line of code is written. Real user research, not assumptions.",
  },
  {
    name: "Alpha",
    description:
      "Building and testing the riskiest parts of the idea quickly and cheaply, with real people, before committing to a full build.",
  },
  {
    name: "Beta",
    description:
      "A working version released to a wider group of users, iterated continuously based on what the evidence shows.",
  },
  {
    name: "Live",
    description:
      "A service that is monitored, maintained, and improved based on ongoing user feedback and changing needs.",
  },
];

export default function AppPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 py-20 bg-[#FFF5F2] px-6">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF7F50] mb-6">
            The app
          </h1>
          <p className="text-lg text-[#505A5A] leading-relaxed">
            The Direct Digital Democracy app is where the movement becomes
            something citizens carry with them and use.
          </p>
          <p className="text-lg text-[#505A5A] leading-relaxed mt-4">
            When the platform has sufficient support - through donations and a
            growing participant base - the app will be built and made freely
            available. It will be the primary way citizens engage as active DDD
            participants: deliberating on the six issues, voting, ranking, and
            seeing the results feed back into the political process in real
            time.
          </p>
        </div>
      </section>

      {/* How it will be built */}
      <section className="py-20 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            How it will be built
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-8">
            The app will be built to the standards set out in the Government
            Digital Service manual - the same rigorous process used to build
            GOV.UK and NHS.UK, and the gold standard for citizen-facing digital
            services in the UK.
          </p>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-8">
            Those standards cover every stage of development:
          </p>
          <div className="space-y-6">
            {phases.map((phase) => (
              <div key={phase.name} className="border-l-4 border-[#FF7F50] pl-6">
                <h3 className="text-lg font-bold text-[#0B0C0C] mb-1">
                  {phase.name}
                </h3>
                <p className="text-[#505A5A] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mt-8">
            At every stage the process is open. Progress will be published.
            What works and what does not will be shared publicly.
          </p>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            Accessibility is not optional
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-4">
            At least one in five people in the UK has a long-term illness,
            impairment, or disability. Many more have temporary or situational
            access needs. The app will meet WCAG 2.2 AA accessibility standards
            as a minimum - the legal requirement for public-facing digital
            services - and will be tested with real users across a range of
            assistive technologies throughout development, not just at the end.
          </p>
          <p className="text-[#0B0C0C] text-lg font-semibold">
            A democracy that is not accessible to everyone is not a democracy.
          </p>
        </div>
      </section>

      {/* Open source */}
      <section className="py-20 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            Open source by design
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed">
            The app&apos;s code will be publicly available. Anyone will be able
            to inspect it, audit it, and verify that it does what it says it
            does. This is not just good practice - it is a democratic
            principle. A platform asking citizens to trust it with their
            political participation cannot hide behind closed code.
          </p>
        </div>
      </section>

      {/* When */}
      <section className="py-20 px-6 bg-[#FFF5F2]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            When does it get built?
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-4">
            Building starts when there is enough to build it properly. That
            means sufficient donations to fund a small, experienced team through
            the discovery and alpha phases without cutting corners.
          </p>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-4">
            The GDS process exists precisely because cutting corners on
            citizen-facing services produces expensive failures. The history of
            UK government IT is full of them. This project will not add to that
            history.
          </p>
          <p className="text-[#505A5A] text-lg leading-relaxed mb-8">
            If you want to make the build happen sooner, donate. Every
            contribution moves the start date forward.
          </p>
          <a
            href="https://www.crowdfunder.co.uk/p/ddd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF7F50] text-white font-semibold text-lg px-8 py-4 hover:bg-[#E66B3D] transition-colors no-underline"
          >
            ♥ Donate Now ↗
          </a>
          <p className="mt-3 text-sm text-[#505A5A]">
            Opens in a new tab · Secure payment via Crowdfunder
          </p>
          <p className="mt-12 text-[#505A5A]">
            <a
              href="https://www.gov.uk/service-manual"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7F50] hover:text-[#E66B3D]"
            >
              Full details of the GDS Service Manual and the standards the app
              will follow are available at gov.uk/service-manual.
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
