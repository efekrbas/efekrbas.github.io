import { createFileRoute, Link } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/discord-badge-manager")({
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
            <span className="text-sm">DISCORD BADGE MANAGER</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <Award className="h-8 w-8 text-editorial-accent" />
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
          <h2 className="mb-6 font-serif text-2xl">What is Discord Badge Manager?</h2>
          <p className="text-editorial-muted mb-4">
            Discord profile badges are a great way to show off your achievements, affiliations, and status within the community. However, managing and previewing these badges before they go live can be tricky. 
          </p>
          <p className="text-editorial-muted">
            The Discord Badge Manager provides a seamless, web-based interface that allows you to preview exactly how different combinations of badges will look on a simulated Discord profile. This tool is perfect for server owners, bot developers, and community managers who want to perfect their aesthetic.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Key Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>Accurate Previews:</strong> See exactly how badges (like HypeSquad, Nitro, Developer) will render on both light and dark themes.</li>
            <li><strong>Export Assets:</strong> Download high-quality renders of your customized badge layouts to use in graphics or presentations.</li>
            <li><strong>Client-side Processing:</strong> All generation happens locally in your browser ensuring complete privacy.</li>
            <li><strong>Modern Interface:</strong> Fast, responsive, and easy to use across desktop and mobile devices.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Can this tool add real badges to my Discord account?</h3>
              <p>No. This tool is strictly a simulator and preview generator. It cannot grant you actual Discord badges on the platform. Official badges must be earned through Discord's official programs.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Is the tool free?</h3>
              <p>Yes, the Discord Badge Manager is completely free to use with no hidden costs or limits.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
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
      
      <Footer />
    </div>
  );
}
