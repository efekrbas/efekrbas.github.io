import { createFileRoute, Link } from "@tanstack/react-router";
import { Crosshair } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/guns-lol-username-checker")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base flex flex-col">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Tools
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">TOOL</span>
            <span className="text-sm">GUNS.LOL USERNAME CHECKER</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Crosshair className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Utility
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Guns.lol Username Checker</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          Quickly find and claim available usernames on guns.lol. A fast, efficient, and open-source tool for checking username availability.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Why Use This Checker?</h2>
          <p className="text-editorial-muted mb-4">
            Securing a short, unique, or "OG" username on platforms like Guns.lol is highly competitive. Manually typing in usernames to see if they are taken is slow and tedious. 
          </p>
          <p className="text-editorial-muted">
            This tool allows you to automate the process. By feeding it a dictionary or a generated list of character combinations, the checker rapidly queries the platform to find unregistered usernames so you can claim them immediately.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Key Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>High-Speed Async Checks:</strong> Uses asynchronous requests to check hundreds of names per minute.</li>
            <li><strong>Proxy Support:</strong> Configure proxies to avoid rate-limiting or IP bans during large scans.</li>
            <li><strong>Customizable Wordlists:</strong> Supports any text file list, making it easy to check dictionary words, 3-letter, or 4-letter usernames.</li>
            <li><strong>Open-Source:</strong> Written in clear, readable code so you can modify it for other platforms if needed.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Can this tool claim the username for me?</h3>
              <p>No, this is purely an availability checker. Once the tool outputs that a name is "Available," you must manually register it on the website yourself.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Will my IP get banned?</h3>
              <p>If you check too many names too quickly from a single IP, you might hit a temporary rate limit. We recommend using a delay between requests or utilizing the built-in proxy support for bulk checking.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/guns.lol-username-checker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-editorial-accent px-8 py-4 font-medium text-base transition-transform hover:scale-105 active:scale-95"
          >
            <span>Download & View Source</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
