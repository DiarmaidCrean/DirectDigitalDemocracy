import type { Metadata } from "next";
import InfluenceForm from "../components/InfluenceForm";

export const metadata: Metadata = {
  title: "Six ideas. Where the conversation starts - Direct Digital Democracy",
  description:
    "Six issues a sufficiently large and organised citizen body could realistically force onto the political agenda. These are a starting point. The community decides the final six.",
};

const issues = [
  {
    number: "1",
    title: "Citizens set spending priorities",
    description:
      "Every year, citizens decide how much weight to give each area of government spending - how much goes to health, how much to defence, how much to housing and education. Government fills in the detail, but the proportions are set by the public, not the Treasury.",
    context:
      "The Chancellor currently decides how money is allocated across government with minimal democratic input between elections. This proposal does not ask citizens to write a budget line by line. It asks them to set the priorities - and holds government to delivering within them.",
  },
  {
    number: "2",
    title: "Clean money in politics",
    description:
      "Publicly funded campaigns as the only source of political party funding, with the exception of membership fees. No donor, corporation, or union can buy political influence.",
    context:
      "Large donors do not give money to political parties out of civic generosity. They give it because it works. This proposal removes the financial mechanism through which concentrated wealth shapes political outcomes, replacing it with public funding accountable to citizens rather than benefactors. Membership fees remain permitted - they represent citizens voluntarily supporting a party with their own money, which is different in kind from donor or corporate influence.",
  },
  {
    number: "3",
    title: "A citizens assembly with binding powers",
    description:
      "Once per parliamentary term, a randomly selected citizens assembly deliberates on one major issue and produces a recommendation that government is legally required to act on. Citizens do not just advise - they decide.",
    context:
      "Citizens assemblies have been used in Ireland and the UK with significant success, but their recommendations are advisory. Governments can ignore them. This proposal gives the process teeth - a randomly selected, evidence-informed group of citizens with the power to produce decisions that must be implemented.",
  },
  {
    number: "4",
    title: "A free press that is actually accountable",
    description:
      "Require all news organisations above a certain circulation threshold to join a statutory-backed regulator with real sanctions. Replace the current voluntary system with one that has teeth.",
    context:
      "The UK press is currently self-regulated in all but name. Outlets that knowingly mislead the public face no meaningful consequence. This proposal implements what the Leveson Inquiry recommended over a decade ago and successive governments have refused to act on.",
  },
  {
    number: "5",
    title: "Arms sales accountability",
    description:
      "If a country is sanctioned by the UN, ICC, or equivalent international body, DDD participants can vote to remove any existing parliamentary approval for arms sales to that country.",
    context:
      "The UK currently sells arms to governments under active international sanction. Those decisions are made behind closed doors with no meaningful citizen input. This proposal creates a direct mechanism for citizens to withdraw approval when the international community has already judged a government's conduct unacceptable.",
  },
  {
    number: "6",
    title: "Reform the House of Lords",
    description:
      "Withdraw the parliamentary approval of ten members of the House of Lords each year. DDD participants vote and rank their preferences to decide who should go.",
    context:
      "The House of Lords has 800 members. Nobody elected them. Many were appointed by the prime ministers they served. This proposal does not abolish the Lords. It begins returning it to democratic accountability, one year at a time, through citizen choice rather than party patronage.",
  },
];

export default function IssuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 py-20 bg-[#FFF5F2] px-6">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF7F50] mb-6">
            Six ideas. Where the conversation starts.
          </h1>
          <div className="text-lg text-[#505A5A] space-y-4">
            <p>
              Direct Digital Democracy is built on a simple premise: citizens
              should decide what matters most, not the people who built the
              platform. The issues below are not a manifesto. They are six
              possibilities - the kind of decisions that a sufficiently large
              and organised citizen body could realistically force onto the
              political agenda.
            </p>
            <p>
              They are here to make the idea concrete. To show that this is not
              abstract. To invite you to tell us what you would change, add, or
              replace.
            </p>
            <p>
              The community decides the final six. These are where the
              conversation starts.
            </p>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="py-20 px-6">
        <div className="max-w-[680px] mx-auto space-y-12">
          {issues.map((issue) => (
            <div key={issue.number} className="border-l-4 border-[#FF7F50] pl-6">
              <h2 className="text-2xl font-bold text-[#FF7F50] mb-3">
                {issue.number}. {issue.title}
              </h2>
              <p className="text-[#0B0C0C] text-lg leading-relaxed mb-3">
                {issue.description}
              </p>
              <p className="text-[#505A5A] leading-relaxed">{issue.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Suggestion form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[680px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0B0C0C] mb-4">
            What would you change?
          </h2>
          <p className="text-lg text-[#505A5A] mb-8">
            These six are a starting point. The community decides the final six
            through the same deliberative process the platform is built on. If
            you think something is missing, wrongly framed, or should be
            replaced entirely, tell us.
          </p>
          <div className="bg-white p-8 border border-[#B1B4B6]">
            <h3 className="text-xl font-semibold text-[#FF7F50] mb-6">
              What would be your suggestion for one of the six? And why?
            </h3>
            <InfluenceForm />
          </div>
        </div>
      </section>
    </>
  );
}
