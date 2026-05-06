export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Your{" "}
          <span className="text-[#58a6ff]">Cash Flow</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceFlow analyzes your invoice payment patterns to predict cash flow gaps before they happen — so you can plan projects, not panic.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $29/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-xs text-[#8b949e] mt-1">Payment prediction accuracy</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">2.3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Faster cash gap detection</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. overdraft fees saved</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited invoice tracking",
              "ML-based payment predictions",
              "Cash flow gap alerts",
              "Optimal project timing suggestions",
              "CSV & API export",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the payment prediction work?</h3>
            <p className="text-sm text-[#8b949e]">InvoiceFlow analyzes your historical invoice data — client payment habits, invoice amounts, and due dates — to build a model that forecasts when payments will actually arrive versus when they're due.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What data do I need to get started?</h3>
            <p className="text-sm text-[#8b949e]">Just your past invoices. You can import via CSV or connect your invoicing tool. The more history you have, the more accurate your predictions become — but even 3 months of data is enough to start.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. No contracts, no lock-in. Cancel from your account dashboard at any time and you won't be charged again. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} InvoiceFlow. All rights reserved.
      </footer>
    </main>
  );
}
