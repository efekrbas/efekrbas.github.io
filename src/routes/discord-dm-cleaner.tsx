import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/discord-dm-cleaner")({
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
            <span className="text-sm">DISCORD DM CLEANER</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Trash2 className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Utility
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Discord DM Cleaner</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          A modern, user-friendly Discord Direct Message cleaning tool with a beautiful GUI interface. Easily manage and clean up your chat history securely.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">What is Discord DM Cleaner?</h2>
          <p className="text-editorial-muted mb-4">
            Discord DM Cleaner is a dedicated utility application designed to help you regain control over your Discord Direct Messages. Unlike complicated command-line scripts, this tool provides a sleek, modern Graphical User Interface (GUI) that makes deleting hundreds of messages as easy as a few clicks.
          </p>
          <p className="text-editorial-muted">
            Whether you are protecting your privacy, deleting old embarrassing chats, or just trying to organize your active DMs, this cleaner works seamlessly by automating the message deletion process securely on your machine.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Key Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>User-Friendly GUI:</strong> No coding required. Select the DM channel and let the app do the rest.</li>
            <li><strong>High-Speed Deletion:</strong> Uses optimized API requests to delete messages as fast as rate-limits allow.</li>
            <li><strong>Secure & Transparent:</strong> The tool runs locally. Your token never leaves your computer and is only used to communicate with Discord's official API.</li>
            <li><strong>Open-Source:</strong> Fully open-source so you can verify the security and logic yourself.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Can Discord ban me for using this?</h3>
              <p>While this tool uses your token to automate actions (which technically violates Discord's Terms of Service against self-botting), it operates at a safe speed to mimic human behavior. Use at your own discretion and risk.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Can it delete messages sent by the other person?</h3>
              <p>No. On Discord, you can only delete messages that you have authored. The tool will automatically skip messages sent by the other party.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/discord-dm-cleaner"
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
