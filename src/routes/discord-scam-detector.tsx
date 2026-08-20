import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkle } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/discord-scam-detector")({
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
            <span className="text-sm">DISCORD SCAM DETECTOR</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Sparkle className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Security / Bot
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Discord Scam Detector</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          A powerful Discord bot built with discord.js designed to protect your servers by detecting and neutralizing scam links and phishing attempts.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">What is the Discord Scam Detector?</h2>
          <p className="text-editorial-muted mb-4">
            Discord servers are constantly targeted by phishing bots, fake Nitro gifts, and compromised accounts spamming malicious links. The Discord Scam Detector is an open-source, easily deployable bot that actively monitors chat for these threats.
          </p>
          <p className="text-editorial-muted">
            Using a regularly updated database of known malicious domains and heuristic analysis, it instantly deletes dangerous messages and can automatically moderate the offending user, keeping your community safe.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Key Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>Real-time Scanning:</strong> Automatically scans every message sent in your server for known scam domains.</li>
            <li><strong>Auto-Moderation:</strong> Can be configured to mute, kick, or ban users who post phishing links.</li>
            <li><strong>Customizable Database:</strong> Add your own blacklisted domains or integrate with community anti-phishing APIs.</li>
            <li><strong>Modern Discord.js:</strong> Built using the latest Discord.js features for maximum stability and performance.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">How do I host this bot?</h3>
              <p>You will need a Node.js environment (like a VPS or a free host like Railway/Render). Simply clone the repository, run npm install, configure your bot token in the .env file, and start the script.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Can it read my messages?</h3>
              <p>The bot requires the Message Content Intent to read chat and analyze links. However, the open-source code ensures that no messages are logged or saved to any external servers.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/discord-scam-detector"
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
