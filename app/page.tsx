import Link from "next/link";
import InfluenceForm from "./components/InfluenceForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 py-20 bg-[#FFF5F2] px-6">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF7F50] mb-6">
            Democratic power in your hands
          </h1>
          <div className="text-lg text-[#505A5A] mb-8 space-y-4">
            <p>
              Influencing politics doesn&apos;t require us voting on everything. It
              just requires enough people, focused on the right things, at the
              right moment.
            </p>
            <p>
              The idea is simple. Six issues. Directly decided by citizens.
              Changed whenever the politics moves.
            </p>
            <p>
              If enough of us agreed on just six priorities and made our
              position clear, the influence on the political process would be
              considerable. A standing instruction from a citizen community
              that isn&apos;t going away.
            </p>
          </div>
          <Link
            href="/blog/welcome-to-ddd"
            className="text-[#FF7F50] font-semibold hover:text-[#E66B3D] no-underline hover:underline block mb-8"
          >
            Read more about what we are building →
          </Link>
          <Link
            href="/issues"
            className="inline-block bg-[#FF7F50] text-white font-semibold px-8 py-3 hover:bg-[#E66B3D] transition-colors no-underline"
          >
            See the six issues
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            About the app
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed mb-4">
            The website is the starting point. It is where the movement is
            built and where the six issues are collated. The app - built to
            the highest standard for citizen-facing digital services in the UK
            - is where active DDD participants will deliberate, vote, rank, and
            engage. It gets built when there is enough support to build it
            properly.
          </p>
          <Link
            href="/app"
            className="text-[#FF7F50] font-semibold hover:text-[#E66B3D] no-underline hover:underline"
          >
            Find out how the app will be built →
          </Link>
        </div>
      </section>

      {/* Influence Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0B0C0C] mb-8">
            First a simple question:
          </h2>
          <div className="bg-white p-8 border border-[#B1B4B6]">
            <h3 className="text-xl font-semibold text-[#FF7F50] mb-6">
              What would be your suggestion for one of the six? And why?
            </h3>
            <InfluenceForm />
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 px-6 bg-[#FFF5F2]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-4">
            Support our mission
          </h2>
          <p className="text-lg text-[#505A5A] mb-8">
            Every contribution moves the app build date forward. Choose the
            level of involvement that suits you.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 border border-[#B1B4B6]">
              <h3 className="text-lg font-bold text-[#FF7F50] mb-1">
                Supporter — £3 per month
              </h3>
              <p className="text-[#0B0C0C]">You are funding the movement.</p>
            </div>
            <div className="bg-white p-6 border border-[#B1B4B6]">
              <h3 className="text-lg font-bold text-[#FF7F50] mb-1">
                Participant — £10 per month
              </h3>
              <p className="text-[#0B0C0C]">
                Part of the early beta testing for the app before it launches,
                plus regular updates on progress and how donations are being
                used.
              </p>
            </div>
            <div className="bg-white p-6 border border-[#B1B4B6]">
              <h3 className="text-lg font-bold text-[#FF7F50] mb-1">
                Founding member — £25 per month
              </h3>
              <p className="text-[#0B0C0C]">
                Everything in Participant, plus a seat on the citizen
                assessment panel. At each phase of the app build - discovery,
                alpha, and beta - founding members review progress, challenge
                assumptions, and decide whether the team is ready to move
                forward.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-[#B1B4B6]">
            <p className="text-lg text-[#505A5A] mb-6">
              Join on Patreon and choose your level of involvement.
            </p>
            <a
              href="https://www.patreon.com/c/directdigitaldemocracy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF7F50] text-white font-semibold text-lg px-8 py-4 hover:bg-[#E66B3D] transition-colors no-underline"
            >
              ♥ Donate Now ↗
            </a>
            <p className="mt-3 text-sm text-[#505A5A]">
              Via Patreon
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
