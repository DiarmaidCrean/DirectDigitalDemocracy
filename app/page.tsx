import Link from "next/link";
import InfluenceForm from "./components/InfluenceForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center bg-[#FFF5F2]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF7F50] mb-4">
          Democratic Power In Your Hands
        </h1>
        <p className="text-lg md:text-xl text-[#505A5A] mb-8 max-w-2xl mx-auto">
          Build a citizen owned app to better instruct our elected political
          leaders
        </p>
        <Link
          href="#donate"
          className="inline-block bg-[#FF7F50] text-white font-semibold px-8 py-3 hover:bg-[#E66B3D] transition-colors no-underline"
        >
          I support this
        </Link>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FF7F50] mb-6">
          About The App
        </h2>
        <p className="text-[#0B0C0C] text-lg leading-relaxed">
          Direct Digital Democracy brings together experts with many years of
          experience who have protected your health and finance data from
          continual cyber attacks, made it easier for you to work with public
          sector through Gov.uk and NHS.UK and built some of the most successful
          apps to help with your everyday lives. Now they would like your
          support to put democracy in all our hands.
        </p>
      </section>

      {/* Influence Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0B0C0C] mb-8">
              First a simple question:
            </h2>
            <div className="bg-white p-8 border border-[#B1B4B6]">
              <h3 className="text-xl font-semibold text-[#FF7F50] mb-6">
                What issue would you want direct political influence over?
              </h3>
              <InfluenceForm />
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section
        id="donate"
        className="py-16 px-6 bg-[#FFF5F2]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#FF7F50] mb-4">
              Support Our Mission
            </h2>
            <p className="text-lg text-[#505A5A] mb-8">
              Help build a more democratic future. Your contribution will
              directly support the development of an app that will enable more
              citizens to participate in democratic decision-making.
            </p>

            <div className="bg-white p-6 border border-[#B1B4B6] mb-6">
              <h3 className="text-xl font-semibold text-[#FF7F50] mb-4">
                Why Donate?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#0B0C0C]">
                <li>Support open-source development of democratic tools</li>
                <li>Help maintain and improve our secure voting system</li>
                <li>Enable more communities to adopt direct democracy</li>
                <li>
                  Contribute to a more transparent and participatory future
                </li>
              </ul>
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
        </div>
      </section>
    </>
  );
}
