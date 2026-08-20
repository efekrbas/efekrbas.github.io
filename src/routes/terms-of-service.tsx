import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServiceComponent,
});

function TermsOfServiceComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base flex flex-col">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Home
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">LEGAL</span>
            <span className="text-sm">TERMS OF SERVICE</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Terms of Service</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-editorial-muted">
          <p>Last updated: August 2026</p>
          
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website (efekrbas.github.io) and its associated tools, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">2. Use of Tools</h2>
          <p>
            The tools provided on this website are for educational and personal use. You agree to use these tools responsibly and in accordance with the terms of service of the respective platforms (such as Discord and GitHub). We are not responsible for any actions taken against your accounts by third-party platforms as a result of using our tools.
          </p>
          
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">3. No Warranty</h2>
          <p>
            All tools and scripts are provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">4. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and intellectual property rights. You may not copy, redistribute, use or publish any such parts of the Site, except as allowed by the open-source licenses provided with specific tools.
          </p>
          
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">5. Modifications to Terms</h2>
          <p>
            We reserve the right to change these terms from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
