import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyComponent,
});

function PrivacyPolicyComponent() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-editorial-accent selection:text-base flex flex-col">
      <header className="border-b border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-serif text-2xl italic tracking-tight transition-colors hover:text-editorial-accent">
            ← Back to Home
          </Link>
          <div className="hidden text-right md:block">
            <span className="block text-xs text-editorial-muted">LEGAL</span>
            <span className="text-sm">PRIVACY POLICY</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-24 flex-grow">
        <h1 className="mb-6 font-serif text-5xl md:text-7xl">Privacy Policy</h1>
        
        <div className="space-y-6 text-lg leading-relaxed text-editorial-muted">
          <p>Last updated: August 2026</p>
          
          <p>
            At Efe Kırbaş Tools, accessible from efekrbas.github.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our website and how we use it.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Information We Collect</h2>
          <p>
            Most of the tools provided on this website operate locally in your browser or require you to download a script. We do not collect, store, or process your personal data, Discord tokens, or GitHub tokens on our servers. Any tokens or credentials you provide to our tools are used locally or directly communicate with the respective APIs (Discord, GitHub) without passing through our infrastructure.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Log Files</h2>
          <p>
            Our website follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Cookies and Web Beacons</h2>
          <p>
            Like any other website, we use "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
          
          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Google AdSense</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
          </p>

          <h2 className="font-serif text-3xl text-white mt-12 mb-4">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
