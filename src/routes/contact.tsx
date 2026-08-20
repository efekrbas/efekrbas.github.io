import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base flex flex-col">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Home
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">INFO</span>
            <span className="text-sm">CONTACT</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Contact Us</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-editorial-muted">
          <p>
            Have a question, suggestion, or issue with one of our tools? We'd love to hear from you. We strive to provide the best experience possible and your feedback is invaluable.
          </p>
          
          <div className="mt-12 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
            <h2 className="mb-6 font-serif text-2xl text-white">Get in Touch</h2>
            <ul className="space-y-6">
              <li>
                <strong>Email:</strong> <br />
                You can reach us directly via email at <a href="mailto:hello@archive01.dev" className="text-editorial-accent hover:underline">hello@archive01.dev</a>. We aim to respond to all inquiries within 48 hours.
              </li>
              <li>
                <strong>GitHub:</strong> <br />
                For bug reports, feature requests, or code contributions, please visit our <a href="https://github.com/efekrbas" target="_blank" rel="noopener noreferrer" className="text-editorial-accent hover:underline">GitHub Profile</a> and open an issue on the relevant repository.
              </li>
              <li>
                <strong>Twitter / X:</strong> <br />
                Follow us on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-editorial-accent hover:underline">Twitter</a> for updates and announcements regarding new tool releases.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
