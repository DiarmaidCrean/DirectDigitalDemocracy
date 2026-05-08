import ContactForm from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Direct Digital Democracy",
  description: "Get in touch with the Direct Digital Democracy team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center bg-[#FFF5F2]">
        <h1 className="text-4xl font-bold text-[#FF7F50] mb-3">Contact Us</h1>
        <p className="text-lg text-[#505A5A]">We&apos;d love to hear from you</p>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 border border-[#B1B4B6] shadow-sm">
            <h2 className="text-2xl font-bold text-[#FF7F50] mb-6">
              How can we help?
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
