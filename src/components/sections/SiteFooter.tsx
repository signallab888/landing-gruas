export function SiteFooter() {
  return (
    <footer className="bg-brand-navy-dark border-t border-white/[0.06] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gruas-general-4446/logo.svg"
          alt="Logo empresa"
          width={160}
          height={26}
        />
        <p className="text-white/30 text-sm text-center">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-white/30 text-xs">
          <span>Aviso de privacidad</span>
          <span>·</span>
          <span>Términos de uso</span>
        </div>
      </div>
    </footer>
  );
}
