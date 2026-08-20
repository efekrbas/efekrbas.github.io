import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/clicord")({
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
            <span className="text-sm">CLICORD</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Terminal className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Code
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">clicord</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          Use Discord directly in your terminal. A powerful Command Line Interface for Discord built for developers who prefer living in the shell.
        </p>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">What is clicord?</h2>
          <p className="text-editorial-muted mb-4">
            clicord is an open-source, lightweight command-line interface (CLI) client for Discord. Designed explicitly for power users, developers, and sysadmins, it allows you to connect to Discord, view channels, and send messages without ever leaving your terminal environment. 
          </p>
          <p className="text-editorial-muted">
            By eliminating the heavy Electron-based desktop app overhead, clicord uses minimal system resources and provides a distraction-free environment where you can stay connected while you code.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>Lightweight & Fast:</strong> Consumes a fraction of the RAM compared to the official desktop application.</li>
            <li><strong>Terminal-Native:</strong> Fully keyboard-driven interface with customizable keybindings.</li>
            <li><strong>Cross-Platform:</strong> Works on Windows, macOS, and Linux terminal environments.</li>
            <li><strong>Open Source:</strong> Written in Node.js/JavaScript. You can review the code, fork it, and contribute.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Is it safe to use?</h3>
              <p>Yes. The tool connects directly to the Discord API using standard libraries. However, please be aware that using self-bots or automated scripts on user accounts can be against Discord's Terms of Service. It's recommended to use this responsibly.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Do I need a bot token?</h3>
              <p>You can configure it to use either a bot token or a user token, depending on what you want to achieve. Detailed instructions are available in the repository README.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/clicord"
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
