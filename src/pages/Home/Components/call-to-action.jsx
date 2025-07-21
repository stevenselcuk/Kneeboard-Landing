import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-card">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Start Building
          </h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="/">
                <span>Get Started</span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="/">
                <span>Book Demo</span>
              </a>
            </Button>
          </div>
        </div>

        <ShineBorder shineColor="dark" />
      </div>
    </section>
  );
}
