import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-card">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready for a Smarter Cockpit?
          </h2>
          <p className="mt-4">
            Reduce clutter, stay organized, and fly with confidence. Download
            Kneeboard from the App Store and discover the future of flight
            note-taking.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://apps.apple.com/us/app/kneeboard-for-pilots/id6749446180">
                <span>Get the App</span>
              </a>
            </Button>
          </div>
        </div>

        <ShineBorder shineColor="dark" />
      </div>
    </section>
  );
}
