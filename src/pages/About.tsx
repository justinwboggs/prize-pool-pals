import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Rafl.ai
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
            David vs. Goliath… for eCommerce
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            If you run a small Shopify store, you know the fight: rising ad costs, shrinking returns, 
            algorithm changes, bigger brands buying the best placements. You're doing everything right—and 
            still feel outgunned.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            So did we.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
            The "aha" moment
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            One day we saw a mega-brand running a headline-grabbing giveaway: a Lamborghini, a Ford Raptor, 
            or $100,000 cash. The engagement was insane. It hit us: what if small businesses could tap the 
            same viral energy—without fronting six figures or taking on massive risk?
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            That's when Pooled Giveaways was born.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
            Play like the big guys—together
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Rafl lets hundreds (even thousands) of small shops join forces to fund a single, share-worthy 
            prize. You tap into the buzz of a huge cash giveaway, but pay only a small monthly fee (about 
            $150–$200). We handle the heavy lifting—compliance, rules, AMOE, fraud controls, and lift 
            measurement—so you can focus on growth.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">
            What you get
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="text-lg text-muted-foreground">
              Share-worthy prizes that actually get clicks and shares
            </li>
            <li className="text-lg text-muted-foreground">
              Higher conversion rates vs. "10% off" popups
            </li>
            <li className="text-lg text-muted-foreground">
              More sales and higher average order value
            </li>
            <li className="text-lg text-muted-foreground">
              Better performing ads (thumb-stopping creatives that don't require deeper discounts)
            </li>
            <li className="text-lg text-muted-foreground">
              Compliant by default (official rules + AMOE included)
            </li>
            <li className="text-lg text-muted-foreground">
              Proof of impact (built-in holdouts show incremental revenue)
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">
            How it works
          </h3>
          <ol className="space-y-3 mb-8 list-decimal list-inside">
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Install on Shopify</strong> – live in minutes, no redesign required.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Join a pooled campaign</strong> – your fee helps fund a major cash prize.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Promote with your existing tools</strong> – Klaviyo/Mailchimp, your popup, your brand.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">See the lift</strong> – we measure incremental orders and margin so you know it's working.
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
            Built by entrepreneurs for entrepreneurs
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're founders and operators who've felt the squeeze of rising CAC on Google and Meta. Rafl is 
            our answer: collective leverage for small businesses. When we pool resources, we don't just 
            survive—we thrive.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">
            Our promise
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Simple:</strong> clear setup, clear pricing, clear results.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Compliant:</strong> legal-safe sweepstakes out of the box.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Respectful:</strong> your brand, your list, your data.
            </li>
            <li className="text-lg text-muted-foreground">
              <strong className="text-foreground">Accountable:</strong> we don't sell "vanity" metrics—we show incremental lift.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground">
            Join the fight
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you're tired of losing ground to bigger budgets, come stand with the Davids. Let's turn boring 
            popups into share-worthy, compliant giveaways—and finally see the results to match your effort.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Install Rafl on Shopify
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              See a 90-second demo
            </Button>
            <Button variant="outline" size="lg">
              Talk to a founder
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
