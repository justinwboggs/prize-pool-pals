import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 10, 2025</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-foreground leading-relaxed">
              <strong>Who we are:</strong> Rafl ("Rafl," "we," "us," "our") provides a Shopify app that helps merchants run sweepstakes, giveaways, and similar promotions ("Services"). This Privacy Policy explains how we process personal data for merchants and promotion entrants.
            </p>
          </section>

          <section>
            <p className="text-foreground leading-relaxed">
              <strong>Contact:</strong> privacy@rafl.ai | Rafl AI LLC, 4411 Putting Green Drive, Corona, CA 92883, USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1) Roles</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For merchant data (e.g., store owner/admin users), Rafl is an independent controller.
            </p>
            <p className="text-foreground leading-relaxed">
              For shopper/entrant data collected from a merchant's store, Rafl acts as a processor/service provider to that merchant (the "Merchant"), processing only under the Merchant's instructions and our Data Processing Addendum (DPA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2) Data we process</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Merchant data:</strong> name, email, job role, Shopify shop domain and ID, permission scopes, plan/billing info (via Shopify Billing), support tickets, product usage, IP address, device/OS, and logs/telemetry.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Entrant/customer data (on Merchant's behalf):</strong> name, email, phone number, addresses, order IDs/values (if the Merchant maps purchase actions to entries), user IDs, consent flags/opt-ins, IP address, device/OS, browser, referral URL, and promotion interaction history.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Cookies/SDKs:</strong> if you use our embedded app or widgets, we may use necessary cookies and local storage for session/auth; Merchants may optionally enable analytics A/B testing or fraud-prevention cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3) Sources</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Data provided by Merchants in the app or via Shopify APIs.</li>
              <li>Data provided by entrants in promotion forms hosted on the Merchant's site or Rafl-hosted pages.</li>
              <li>Automatic collection from devices/browsers when using our app or widgets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4) How we use data</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>To provide the Services:</strong> authenticate via Shopify, configure campaigns, calculate entries, anti-fraud, determine winners, deliver notifications, and provide support.</li>
              <li><strong>To operate and improve:</strong> diagnostics, analytics, quality assurance, security, and feature development.</li>
              <li><strong>To bill:</strong> through Shopify Billing and to send service-related notices.</li>
              <li><strong>As processor:</strong> only per Merchant instructions (e.g., to fulfill entrant access/deletion requests, to sync winners to the store's systems).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5) Lawful bases (GDPR/UK GDPR)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Merchants (controller):</strong> performance of contract, legitimate interests (e.g., security, product improvement), and legal obligations.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Entrants (processor):</strong> we rely on the Merchant's lawful basis; typically consent or legitimate interests. Merchants are responsible for providing appropriate notices and obtaining required consents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6) Sharing & subprocessors</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use vetted subprocessors (e.g., cloud hosting, email/SMS delivery, error monitoring, analytics, and payment/billing). We require equivalent privacy and security commitments via contracts. We do not sell or "share" personal information as defined by CCPA/CPRA.
            </p>
            <p className="text-foreground leading-relaxed">
              Current subprocessors: [Link to live list] (e.g., cloud hosting, database, email/SMS, analytics, logging). We'll update that page before adding or replacing a subprocessor where feasible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7) Data retention</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Merchant account data:</strong> kept for the life of the account and then deleted or anonymized within 90 days of termination, unless longer retention is required by law (e.g., tax records).
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Entrant/customer data (processor):</strong> retained per Merchant configuration and instructions. Following a shop/redact webhook (sent by Shopify after uninstall), we delete store-linked personal data within 30 days.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Backups/logs:</strong> rotate and purge within 35–180 days depending on medium/purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8) Deletion & data subject rights</h2>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Shopify-mandated privacy webhooks:</strong> we honor customers/data_request, customers/redact, and shop/redact.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Merchants:</strong> can request access, correction, or deletion of their data via the app or privacy@rafl.ai.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Entrants:</strong> should contact the Merchant directly. If an entrant contacts us, we will notify the Merchant and assist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9) International transfers</h2>
            <p className="text-foreground leading-relaxed">
              We may process data in the United States and other countries. When required, we use approved transfer mechanisms such as the EU Standard Contractual Clauses and UK Addendum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10) Security</h2>
            <p className="text-foreground leading-relaxed">
              We use industry-standard measures: encryption in transit and at rest, access controls and MFA for staff, least-privilege, audit logging, vulnerability management, and regular backups. No method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11) Children</h2>
            <p className="text-foreground leading-relaxed">
              Rafl is not intended to process personal data of children under 13 (or the applicable age of consent) unless the Merchant's promotion is configured to comply with all applicable laws. Merchants are responsible for age-gating and obtaining parental consent where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12) Your choices</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Merchants can adjust app settings, retention, and integrations.
            </p>
            <p className="text-foreground leading-relaxed">
              Entrants can opt out of Merchant marketing via links provided by the Merchant or by contacting the Merchant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">13) California Notice (CPRA)</h2>
            <p className="text-foreground leading-relaxed">
              We collect identifiers, commercial information (if mapped), internet activity, geolocation (coarse/IP), and inferences (anti-fraud). Purposes include service delivery, security/anti-fraud, debugging, analytics, and compliance. We act as a service provider for entrant data. We do not sell or share personal information as defined by CPRA. We honor limit/delete requests routed through Shopify's webhooks or Merchant instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">14) Changes</h2>
            <p className="text-foreground leading-relaxed">
              We may update this Policy. Material changes will be notified in-app or by email and will take effect upon posting unless otherwise stated.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
