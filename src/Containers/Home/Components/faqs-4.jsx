import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-3",
      question: "Is an Apple Pencil required?",
      answer:
        "For the most precise and authentic note-taking experience, Kneeboard™ is optimized for the Apple Pencil. It provides the clarity and speed of writing on paper. While support for finger input is on our roadmap, we highly recommend the Apple Pencil to unlock the app's full potential.",
    },
    {
      id: "item-4",
      question: "Can I import my own templates?",
      answer:
        "Absolutely. Customization is a core feature of Kneeboard™. You can design your own templates using any external tool and seamlessly import them as PNG or PDF files to make your kneeboard truly your own.",
    },
    {
      id: "item-5",
      question: "Do you offer discounts for fleet or bulk purchases?",
      answer:
        "Yes, we provide special pricing for fleet-wide EFB deployments. If you are looking to equip 10 or more devices, please get in touch with us at sales@tabbythecat.com to discuss your requirements and receive a tailored offer.",
    },
    {
      id: "item-6",
      question: "Our airline/MRO needs a custom solution. Can you help?",
      answer:
        "Definitely. As specialists in aviation IT, we excel at developing bespoke solutions to meet the unique operational needs of your fleet. To explore custom development options, please reach out to our solutions team at sales@tabbythecat.com.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about{" "}
            <b>kneeboard</b>™
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? See{" "}
            <a
              href="/support"
              className="text-primary font-medium hover:underline"
            >
              support page
            </a>{" "}
            or contact our{" "}
            <a
              href="mailto:support@tabbythecat.com"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
