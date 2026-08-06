import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import iconCode from "../assets/icon-code.png";
import iconTypography from "../assets/icon-typography.png";
import iconColor from "../assets/icon-color.png";
import iconDhm from "../assets/dhm.png";

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

type Category = "All";

interface Tool {
  id: string;
  title: string;
  description: string;
  category: Category;
  href: string;
  icon: "motion" | "utility" | "ai" | "code" | "typography" | "color";
}

const tools: Tool[] = [
  {
    id: "discord-badge-manager",
    title: "Discord Badge Manager",
    description:
      "A specialized tool for managing and generating Discord badges and profile assets.",
    category: "All",
    href: "https://efekrbas.github.io/discord-badge-manager/",
    icon: "utility",
  },

];

const categories: Category[] = [
  "All",
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
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group flex h-full flex-col bg-base p-8">
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

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

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
        <div className="mb-16 flex flex-wrap items-center gap-4 border-b border-white/5 pb-8">
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

        <div className="grid grid-cols-1 gap-px border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
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
