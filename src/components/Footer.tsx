export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo / Name */}
        <h3 className="text-2xl font-black text-gold-gradient mb-4">
          Chitti Vechhadanam
        </h3>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Where luck isn&apos;t earned — it&apos;s sat upon.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/20 mx-auto mb-8" />

        {/* Fun links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted/60 mb-8">
          <span className="hover:text-gold transition-colors cursor-pointer">Privacy Policy (lol)</span>
          <span>•</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Terms of Luck</span>
          <span>•</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Refund Policy (no)</span>
        </div>

        {/* Copyright */}
        <p className="text-muted/40 text-sm mb-2">
          &copy; 2026 Chitti Vechhadanam. All luck reserved.
        </p>
        <p className="text-muted/30 text-xs mb-2">
          No beds were harmed in the making of this website.
        </p>
        <p className="text-muted/20 text-[10px]">
          This website is purely for fun. But also, it works.
        </p>
      </div>
    </footer>
  );
}
