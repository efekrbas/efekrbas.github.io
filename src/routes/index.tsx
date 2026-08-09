import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import iconCode from "../assets/icon-code.png";
import iconTypography from "../assets/icon-typography.png";
import iconColor from "../assets/icon-color.png";
import iconDhm from "../assets/dhm.png";
import iconDmCleaner from "../assets/dmcleaner.png";
import iconGunsLol from "../assets/gunslol.png";
import iconVoiceJoiner from "../assets/voicejoiner.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "efekrbas.github.io — Curated Digital Utilities" },
      {
        name: "description",
        content:
          "A curated index of digital tools for designers, developers, and makers. One page. No noise.",
      },
      {
        property: "og:title",
        content: "efekrbas.github.io — Curated Digital Utilities",
      },
      {
        property: "og:description",
        content:
          "A curated index of digital tools for designers, developers, and makers.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Category = "All" | "Discord" | "GitHub" | "Guns.lol";

interface Tool {
  id: string;
  title: string;
  description: string;
  category: Category;
  href: string;
  icon: "motion" | "utility" | "ai" | "code" | "typography" | "color" | "dmcleaner" | "gunslol" | "voicejoiner";
}

const tools: Tool[] = [
  {
    id: "discord-badge-manager",
    title: "Discord Badge Manager",
    description:
      "A specialized tool for managing and generating Discord badges and profile assets.",
    category: "Discord",
    href: "/discord-badge-manager",
    icon: "utility",
  },
  {
    id: "discord-dm-cleaner",
    title: "Discord DM Cleaner",
    description: "A modern, user-friendly Discord Direct Message cleaning tool with a beautiful GUI interface.",
    category: "Discord",
    href: "/discord-dm-cleaner",
    icon: "dmcleaner",
  },
  {
    id: "guns-lol-username-checker",
    title: "Guns.lol Username Checker",
    description: "Find unclaimed guns.lol usernames quickly and efficiently.",
    category: "Guns.lol",
    href: "/guns-lol-username-checker",
    icon: "gunslol",
  },
  {
    id: "clicord",
    title: "clicord",
    description: "Use Discord directly in your terminal. A powerful CLI built for developers.",
    category: "Discord",
    href: "/clicord",
    icon: "code",
  },
  {
    id: "github-unfollowers",
    title: "GitHub Unfollowers",
    description: "Quickly discover who unfollowed you on GitHub with this lightweight script.",
    category: "GitHub",
    href: "/github-unfollowers",
    icon: "code",
  },
  {
    id: "discord-voice-joiner",
    title: "Discord Voice Joiner",
    description: "Keep your Discord accounts active in voice channels 24/7 with this Python script.",
    category: "Discord",
    href: "/discord-voice-joiner",
    icon: "voicejoiner",
  },
];

const categories: Category[] = [
  "All",
  "Discord",
  "GitHub",
  "Guns.lol"
];

function ToolIcon({ icon }: { icon: Tool["icon"] }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-surface transition-colors group-hover:border-editorial-accent/50">
      {icon === "motion" && (
        <div className="h-5 w-5 rounded-sm bg-editorial-accent/20" />
      )}
      {icon === "utility" && (
        <img
          src={iconDhm}
          alt=""
          loading="lazy"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      )}
      {icon === "ai" && (
        <div className="h-5 w-2 rounded-full bg-editorial-accent" />
      )}
      {icon === "code" && (
        <img
          src={iconCode}
          alt=""
          loading="lazy"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      )}
      {icon === "typography" && (
        <img
          src={iconTypography}
          alt=""
          loading="lazy"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      )}
      {icon === "color" && (
        <img
          src={iconColor}
          alt=""
          loading="lazy"
          width={20}
          height={20}
          className="h-5 w-5 rounded-full object-cover"
        />
      )}
      {icon === "dmcleaner" && (
        <img
          src={iconDmCleaner}
          alt=""
          loading="lazy"
          width={24}
          height={24}
          className="h-6 w-6 rounded object-contain"
        />
      )}
      {icon === "gunslol" && (
        <img
          src={iconGunsLol}
          alt=""
          loading="lazy"
          width={24}
          height={24}
          className="h-6 w-6 rounded object-contain"
        />
      )}
      {icon === "voicejoiner" && (
        <img
          src={iconVoiceJoiner}
          alt=""
          loading="lazy"
          width={24}
          height={24}
          className="h-6 w-6 rounded object-contain"
        />
      )}
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group flex h-full flex-col border border-white/5 bg-base p-8 transition-colors hover:border-white/10">
      <div className="mb-12 flex items-start justify-between">
        <ToolIcon icon={tool.icon} />
        <span className="rounded border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-tighter text-editorial-muted">
          {tool.category}
        </span>
      </div>
      <h3 className="mb-3 font-serif text-2xl">{tool.title}</h3>
      <p className="mb-8 flex-grow text-sm leading-relaxed text-editorial-muted">
        {tool.description}
      </p>
      <a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-between bg-surface px-6 py-4 font-medium transition-all duration-300 hover:bg-editorial-accent hover:text-base"
      >
        <span>Access Tool</span>
        <span className="text-lg">→</span>
      </a>
    </div>
  );
}

function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools
    .filter((tool) => activeCategory === "All" || tool.category === activeCategory)
    .filter(
      (tool) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-end justify-between">
          <div>
            <h1 className="font-serif text-4xl italic tracking-tight md:text-6xl">
              efekrbas<span className="text-editorial-accent">.</span>github<span className="text-editorial-accent">.</span>io
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-editorial-muted">
              Curated Digital Utilities
            </p>
          </div>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">UPDATED</span>
            <span className="text-sm">AUG 2026 — {tools.length} TOOLS</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-white/5 pb-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-editorial-accent text-base"
                    : "border border-white/10 text-editorial-muted hover:border-white/30 hover:text-white"
                }`}
              >
                {category === "All" ? "All Tools" : category}
              </button>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-surface/50 px-6 py-2 text-sm text-white placeholder:text-editorial-muted transition-colors focus:border-editorial-accent focus:outline-none focus:ring-1 focus:ring-editorial-accent md:w-72"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-white/5 px-6 py-12 md:flex-row md:justify-between">
        <p className="text-xs uppercase tracking-widest text-editorial-muted">
          Archive Project &copy; 2026
        </p>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-editorial-accent"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-editorial-accent"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@archive01.dev"
            className="transition-colors hover:text-editorial-accent"
          >
            Suggest Tool
          </a>
        </div>
      </footer>
    </div>
  );
}
