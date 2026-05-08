import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e40af] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Direct Digital Democracy. All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="text-blue-200 hover:text-white no-underline text-sm transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-blue-200 hover:text-white no-underline text-sm transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white no-underline text-sm transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
