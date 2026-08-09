import { createFileRoute, Link } from "@tanstack/react-router";
import iconDhm from "../assets/dhm.png";

export const Route = createFileRoute("/discord-badge-manager")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Tools
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">TOOL</span>
            <span className="text-sm">DISCORD BADGE MANAGER</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <img src={iconDhm} alt="Discord Badge Manager Icon" className="h-8 w-8 object-contain" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Utility
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Discord Badge Manager</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          A specialized tool for managing and generating Discord badges and profile assets. Customize your profile representation easily and securely.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li>Generate accurate previews of Discord profile badges.</li>
            <li>Manage multiple profile configurations.</li>
            <li>Export high-quality assets.</li>
            <li>Modern, fast, and completely free to use.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://efekrbas.github.io/discord-badge-manager/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-editorial-accent px-8 py-4 font-medium text-base transition-transform hover:scale-105 active:scale-95"
          >
            <span>Launch Tool</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </main>
    </div>
  );
}
