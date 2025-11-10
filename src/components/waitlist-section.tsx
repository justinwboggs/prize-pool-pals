import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-card">
            <WaitlistForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
