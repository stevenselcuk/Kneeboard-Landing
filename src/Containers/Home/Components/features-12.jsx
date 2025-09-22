import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
export default function Features({ featuresRef }) {
  const [activeItem, setActiveItem] = useState("item-1");

  const imgs = {
    "item-1": {
      img: "/feature_3.jpeg",
      alt: "Templates",
    },
    "item-2": {
      img: "/feature_4.PNG",
      alt: "Security authentication",
    },
    "item-3": {
      img: "/feature_1.PNG",
      alt: "Identity management",
    },
    "item-4": {
      img: "/feature_2.PNG",
      alt: "Export Options and Debrief",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32" ref={featuresRef}>
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Everything You Need, Nothing You Don't.
          </h2>
          <p>
            Kneeboard is built with a singular focus: to be the best digital
            replacement for your paper kneeboard.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Built-in Templates
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Ready for Takeoff: Start with our built-in templates, including
                Departure & Arrival brief cards, ATIS/AWOS worksheets, and
                various note styles (lined, grid, dot, blank)
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Your Cockpit, Your Way
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Import any PDF or PNG to use as a template. Your
                aircraft-specific checklists, performance charts, or custom
                layouts are always just a tap away.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Cockpit Organization, Perfected
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <b>Find Anything, Instantly:</b> All your notes are saved and
                searchable. Give them custom names, filter by category, or pull
                up your favorites in a dedicated section. <br />
                <br />
                <b>Categorize Your Flights:</b> Create custom categories like
                "Training," "Cross-Country," or by aircraft tail number to keep
                your logbook organized and tidy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Share & Archive with Ease
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <b>Professional PDF Exports:</b> With a single tap, export any
                note as a high-quality PDF. It merges your handwriting and the
                template into a clean, professional document. <br />
                <br />
                <b>Log & Debrief:</b> Perfect for student pilots to share with
                CFIs, for logging flight details, or for personal
                record-keeping.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="bg-background relative w-[calc(100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <img
                    src={imgs[activeItem].img}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={imgs[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
