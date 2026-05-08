import Link from "next/link";
import InfluenceForm from "./components/InfluenceForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 py-20 bg-[#FFF5F2] text-center px-6">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF7F50] mb-6">
            Democratic Power In Your Hands
          </h1>
          <div className="text-lg text-[#505A5A] mb-8 space-y-4 text-center">
            <p>
              Influencing politics doesn&apos;t require voting on everything. It
              requires enough people, focused on the right things, at the right
              moment.
            </p>
            <p>
              The idea is simple. Five issues. Chosen by citizens. Changed when
              politics moves around them.
            </p>
            <p>
              If enough of us agreed on just five priorities and made our
              position clear, the influence on the political process would be
              considerable. A standing instruction from a citizen community
              that isn&apos;t going away.
            </p>
          </div>
          <Link
            href="#donate"
            className="inline-block bg-[#FF7F50] text-white font-semibold px-8 py-3 hover:bg-[#E66B3D] transition-colors no-underline"
          >
            I support this
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
            About The App
          </h2>
          <p className="text-[#0B0C0C] text-lg leading-relaxed">
            Direct Digital Democracy is built by a small group of people with
            many years experience building digital services for the NHS,
            government and the private sector. They want to put that experience
            to work for citizens.
          </p>
        </div>
      </section>

      {/* Influence Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0B0C0C] mb-8 text-center">
            First a simple question:
          </h2>
          <div className="bg-white p-8 border border-[#B1B4B6]">
            <h3 className="text-xl font-semibold text-[#FF7F50] mb-6">
              What would be your suggestion for one of the five? And why?
            </h3>
            <InfluenceForm />
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 px-6 bg-[#FFF5F2]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#FF7F50] mb-4 text-center">
            Support Our Mission
          </h2>
          <p className="text-lg text-[#505A5A] mb-8 text-center">
            Help build a more democratic future. Your contribution will
            directly support the development of an app that will enable more
            citizens to participate in democratic decision-making.
          </p>

          <div className="bg-white p-6 border border-[#B1B4B6] mb-6">
            <h3 className="text-xl font-semibold text-[#FF7F50] mb-4">
              Why Donate?
            </h3>
            <p className="text-[#0B0C0C]">
              Your contribution funds the development of a citizen-owned app —
              open source, secure, and answerable to no party or interest
              group.
            </p>
          </div>

          <div className="bg-white p-8 border border-[#B1B4B6] text-center">
            <h3 className="text-xl font-semibold text-[#FF7F50] mb-3">
              Ready to Support Our Mission?
            </h3>
            <p className="text-lg text-[#505A5A] mb-6">
              Your contribution will help us build a more democratic future.
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
          </div>
        </div>
      </section>
    </>
  );
}
