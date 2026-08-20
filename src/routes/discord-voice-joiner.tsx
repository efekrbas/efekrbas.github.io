import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/discord-voice-joiner")({
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
            <span className="text-sm">DISCORD VOICE JOINER</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Mic className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Utility
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Discord Voice Joiner</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          Keep your Discord accounts active in voice channels 24/7. A powerful Python script designed for automation and AFK management.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">What is the Voice Joiner?</h2>
          <p className="text-editorial-muted mb-4">
            Sometimes you need your bot or alternate account to stay constantly connected to a specific voice channel—perhaps to listen for commands, record audio, or simply maintain a presence in the community.
          </p>
          <p className="text-editorial-muted">
            The Discord Voice Joiner is a lightweight, easy-to-configure Python script that automates this process. It handles connection drops, automatic reconnections, and status management so you don't have to leave the heavy official Discord client open all day.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Key Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>24/7 Presence:</strong> Ensures the account immediately reconnects if disconnected by server outages or restarts.</li>
            <li><strong>Automated AFK Management:</strong> Prevents the account from being automatically moved to the AFK channel due to inactivity.</li>
            <li><strong>Multi-Account Support:</strong> Can be configured to run multiple instances for different accounts and servers.</li>
            <li><strong>Low Resource Usage:</strong> Runs natively in Python, consuming almost zero RAM compared to Electron apps.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Can I run this on a Raspberry Pi?</h3>
              <p>Yes, absolutely. Because it is written in Python, it is cross-platform and can easily be deployed on a cheap VPS or a local Raspberry Pi running Linux.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Does this support playing audio?</h3>
              <p>By default, this tool is strictly for maintaining a voice presence. However, since the source code is provided, you can easily implement the Discord.py audio modules to stream music or files.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/discord-voice-joiner"
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
