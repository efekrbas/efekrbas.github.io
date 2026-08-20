import { createFileRoute, Link } from "@tanstack/react-router";
import { UserMinus } from "lucide-react";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/github-unfollowers")({
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
            <span className="text-sm">GITHUB UNFOLLOWERS</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-surface">
            <UserMinus className="h-8 w-8 text-editorial-accent" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-editorial-muted">
            Code
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl md:text-7xl">GitHub Unfollowers</h1>
        <p className="mb-12 text-lg leading-relaxed text-editorial-muted md:text-xl">
          Quickly discover who unfollowed you on GitHub. A lightweight, simple script to cross-reference your followers and following lists.
        </p>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">How does it work?</h2>
          <p className="text-editorial-muted mb-4">
            GitHub doesn't natively notify you when someone unfollows you, making it difficult to keep track of your connections. This tool utilizes the official GitHub API to fetch the list of people you follow, and the list of people who follow you.
          </p>
          <p className="text-editorial-muted">
            It then runs a quick cross-reference algorithm to identify the gap: users that you follow, but who do not follow you back. This is perfect for maintaining an active and reciprocal developer network.
          </p>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Features</h2>
          <ul className="list-inside list-disc space-y-4 text-editorial-muted">
            <li><strong>Accuracy:</strong> Uses up-to-date information directly from GitHub's official API.</li>
            <li><strong>Privacy First:</strong> The script runs entirely on your local machine. No data is sent to external servers.</li>
            <li><strong>Fast Execution:</strong> Processes hundreds of followers in seconds.</li>
            <li><strong>Developer Friendly:</strong> Written cleanly so you can easily integrate it into your own CI/CD pipelines or cron jobs.</li>
          </ul>
        </div>
        
        <div className="mb-16 rounded-2xl border border-white/10 bg-surface p-8 md:p-12">
          <h2 className="mb-6 font-serif text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-6 text-editorial-muted">
            <div>
              <h3 className="text-white font-medium mb-2">Do I need a Personal Access Token (PAT)?</h3>
              <p>For accounts with a small number of followers, you can use the public API without authentication. However, to bypass rate limits for larger accounts, you can optionally provide a GitHub PAT.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Can it automatically unfollow them?</h3>
              <p>No, the script is designed purely for analytics. It will generate a list, but you must manually unfollow the users if you choose to do so. We believe in keeping API actions explicit and safe.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row pb-12">
          <a
            href="https://github.com/efekrbas/GitHubUnfollowers"
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
