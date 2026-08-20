import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base flex flex-col">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Home
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">INFO</span>
            <span className="text-sm">ABOUT US</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <h1 className="mb-6 font-serif text-5xl md:text-7xl">About Efe Kırbaş Tools</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-editorial-muted">
          <p>
            Welcome to my curated collection of digital utilities. I am Efe Kırbaş, a developer and open-source enthusiast dedicated to building high-quality, practical tools for developers, designers, and regular users.
          </p>
          <p>
            This website serves as a central hub for all my projects, specifically focusing on Discord utilities, GitHub tools, and other helpful resources. Our mission is to provide clean, ad-light, and efficient applications that respect user privacy and save time.
          </p>
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Our Mission</h2>
          <p>
            We believe that good software should be accessible to everyone. The tools listed here are designed to be intuitive and fast, without compromising on functionality. Whether you're managing a Discord server, cleaning up DMs, or analyzing your GitHub profile, we aim to provide the best possible experience.
          </p>
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Why Use Our Tools?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Open Source Focus:</strong> Many of our tools are open source, meaning you can inspect the code, learn from it, and contribute.</li>
            <li><strong>Privacy First:</strong> We prioritize your privacy. Our tools are designed to work locally or securely without unnecessary data collection.</li>
            <li><strong>Continuous Updates:</strong> We actively maintain our utilities to ensure they work with the latest platform updates.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
