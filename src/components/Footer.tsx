import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 border-t border-white/5 px-6 py-12 md:flex-row md:justify-between text-white bg-base">
      <p className="text-xs uppercase tracking-widest text-editorial-muted">
        Efe Kırbaş &copy; {new Date().getFullYear()}
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-widest">
        <Link to="/" className="transition-colors hover:text-editorial-accent text-editorial-muted">
          Home
        </Link>
        <Link to="/about" className="transition-colors hover:text-editorial-accent text-editorial-muted">
          About
        </Link>
        <Link to="/privacy-policy" className="transition-colors hover:text-editorial-accent text-editorial-muted">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="transition-colors hover:text-editorial-accent text-editorial-muted">
          Terms of Service
        </Link>
        <Link to="/contact" className="transition-colors hover:text-editorial-accent text-editorial-muted">
          Contact
        </Link>
      </div>
    </footer>
  );
}
