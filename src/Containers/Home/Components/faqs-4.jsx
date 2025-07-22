import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
    },
    {
      id: "item-2",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
    },
    {
      id: "item-3",
      question: "Do I need Apple Pencil?",
      answer:
        "Yes, you will need Apple Pencil to use kneeboard. We are planning to add also finger support but taking notes by using finger lowers readability and takes longer time to write.",
    },
    {
      id: "item-4",
      question: "Can I use my own templates?",
      answer:
        "Of course, kneeboard™ is fully customizable. Create your template on your favorite design application and add your kneeboard as png or pdf.",
    },
    {
      id: "item-5",
      question: "Any discount for fleet EFB?",
      answer:
        "Sure, we have special fleet discount if you have more than 10 devices. Please contact with sales@tabbythecat.com ",
    },
    {
      id: "item-6",
      question: "We need custom solutions, can you help?",
      answer:
        "As Tabby Cat, we are building custom solution for your fleet and specialized in aviation IT. Please contact with sales@tabbythecat.com ",
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
            Can't find what you're looking for? Contact our{" "}
            <a
              href="mailto:support@tabbythecat.com"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
