import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-main mb-4">404</h1>
        <p className="text-xl text-text-main/70 mb-8">
          Pagina căutată nu a fost găsită.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}

