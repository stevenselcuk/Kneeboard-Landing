import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils"; // Shadcn's utility for conditional classes
import { BookOpen, CheckSquare, LifeBuoy, Mail, Plane } from "lucide-react";
import { useState } from "react";

// ==================================================================
// ⚙️ CONFIGURATION AREA ⚙️
// This is the only place you need to edit for each app.
// ==================================================================
const APP_DATA = {
  appName: "Aviation EFB Pro",
  appDescription: "The all-in-one Electronic Flight Bag for pilots.",
  contactEmail: "support@youraviationapp.com",
  feedbackEmail: "feedback@youraviationapp.com",

  // --- FREQUENTLY ASKED QUESTIONS (No changes here) ---
  faq: [
    {
      question: "How do I create a new flight plan?",
      answer:
        "From the main dashboard, tap the 'New Flight Plan' button. Then, enter your departure and arrival airports. This screenshot shows the exact steps:",
      screenshot: "/screenshots/BRIEFCARD_DEPARTURE.png",
    },
    {
      question: "How do I refresh weather data (METAR/TAF)?",
      answer:
        "While on the map screen or with a flight plan open, tap the cloud icon in the top-right corner to instantly fetch the latest weather data.",
      screenshot: "/screenshots/BRIEFCARD_DEPARTURE.png",
    },
    {
      question: "How can I manage my subscription?",
      answer:
        "Navigate to Settings > Subscription. From there, you can view your current subscription status and manage your plan.",
    },
  ],

  // --- USER GUIDES (UPDATED STRUCTURE) ---
  // Each guide now has a `content` array to build the article.
  // This allows for rich text, headings, images, and lists.
  guides: [
    {
      title: "Getting Started",
      description: "First-time setup and interface overview.",
      icon: <LifeBuoy className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Welcome to Aviation EFB Pro!" },
        {
          type: "paragraph",
          text: "This guide will walk you through the initial setup and familiarize you with the main interface. Let's get you ready for your first flight.",
        },
        { type: "heading", text: "1. Initial App Launch" },
        {
          type: "paragraph",
          text: "When you first open the app, you will be prompted to download the latest aeronautical database. A stable Wi-Fi connection is recommended for this step.",
        },
        {
          type: "image",
          src: "/screenshots/BRIEFCARD_DEPARTURE.png",
          alt: "Initial database download prompt",
        },
        { type: "heading", text: "2. The Main Dashboard" },
        {
          type: "paragraph",
          text: "The dashboard is your central hub. From here, you can create a new flight plan, view recent flights, check weather, and access settings.",
        },
        {
          type: "image",
          src: "/screenshots/BRIEFCARD_DEPARTURE.png",
          alt: "Main dashboard view",
        },
        {
          type: "list",
          items: [
            "**New Flight Plan:** Starts the flight planning process.",
            "**Map:** Opens the interactive moving map.",
            "**Documents:** Access your saved documents and charts.",
            "**Settings:** Configure app preferences and manage your subscription.",
          ],
        },
      ],
    },
    {
      title: "Mastering Checklists",
      description: "Using standard and custom checklists.",
      icon: <CheckSquare className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Effective Checklist Management" },
        {
          type: "paragraph",
          text: "Our checklist feature is designed for safety and efficiency. You can use pre-loaded standard checklists or create your own for any aircraft type.",
        },
        { type: "heading", text: "Creating a Custom Checklist" },
        {
          type: "paragraph",
          text: 'Navigate to the "Checklists" tab and tap the `+` icon. Give your checklist a name (e.g., "Cessna 172 - Pre-flight") and start adding items.',
        },
        {
          type: "image",
          src: "/screenshots/efb/guide-new-checklist.png",
          alt: "Creating a new checklist",
        },
        {
          type: "paragraph",
          text: "You can add items, section headers, and notes. Drag and drop items to reorder them at any time.",
        },
      ],
    },
    {
      title: "Advanced Flight Planning",
      description: "Route, fuel, and W&B calculations.",
      icon: <Plane className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Detailed Flight Planning" },
        {
          type: "paragraph",
          text: "Go beyond basic routing with our advanced flight planning tools. Start by creating a new flight plan from the dashboard.",
        },
        { type: "heading", text: "Weight & Balance (W&B)" },
        {
          type: "paragraph",
          text: 'After defining your route, tap the "Weight & Balance" tab. Enter passenger weights, baggage, and fuel details. The app will automatically calculate your center of gravity (CG) and display it on the envelope.',
        },
        {
          type: "image",
          src: "/screenshots/efb/guide-w-and-b.png",
          alt: "Weight and Balance Calculator",
        },
        {
          type: "paragraph",
          text: "Ensure the calculated CG falls within the certified envelope for safe operation.",
        },
      ],
    },
  ],
};

// ==================================================================
// SUB-COMPONENT FOR THE GUIDES TAB
// This component handles the two-column layout for the guides.
// ==================================================================
function GuidesContent() {
  // Set the first guide as the default selected one
  const [selectedGuide, setSelectedGuide] = useState(APP_DATA.guides[0]);

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        {/* Left Column: List of Guides */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r p-4">
          <h3 className="text-lg font-semibold mb-4 px-2">All Guides</h3>
          <div className="flex flex-col space-y-1">
            {APP_DATA.guides.map((guide, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full flex justify-start items-center text-left h-auto py-2",
                  selectedGuide.title === guide.title &&
                    "bg-accent text-accent-foreground"
                )}
                onClick={() => setSelectedGuide(guide)}
              >
                {guide.icon}
                <div>
                  <p className="font-semibold">{guide.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {guide.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Column: Guide Content */}
        <div className="md:col-span-8 p-6 sm:p-8">
          {selectedGuide && (
            <article className="prose prose-sm sm:prose-base max-w-none">
              {/* Render content based on its type */}
              {selectedGuide.content.map((block, index) => {
                switch (block.type) {
                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="font-bold text-2xl mt-8 mb-4 border-b pb-2"
                      >
                        {block.text}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-muted-foreground leading-7"
                      >
                        {block.text}
                      </p>
                    );
                  case "image":
                    return (
                      <img
                        key={index}
                        src={block.src}
                        alt={block.alt}
                        className="rounded-lg border bg-muted shadow-md w-full my-6"
                        loading="lazy"
                      />
                    );
                  case "list":
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                        {block.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground"
                            dangerouslySetInnerHTML={{
                              __html: item.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          ></li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </article>
          )}
        </div>
      </div>
    </Card>
  );
}

// ==================================================================
// MAIN SUPPORT PAGE COMPONENT
// ==================================================================
export default function SupportPage() {
  return (
    <div className="text-foreground mx-auto max-w-5xl px-6 pt-20">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {APP_DATA.appName} Support Center
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            {APP_DATA.appDescription}
          </p>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <TabsList>
              <TabsTrigger value="faq">
                <LifeBuoy className="w-4 h-4 mr-2" /> FAQ
              </TabsTrigger>
              <TabsTrigger value="guides">
                <BookOpen className="w-4 h-4 mr-2" /> Guides
              </TabsTrigger>
              <TabsTrigger value="contact">
                <Mail className="w-4 h-4 mr-2" /> Contact Us
              </TabsTrigger>
            </TabsList>
            <div className="relative w-full sm:w-64">
              {/*<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="pl-10" />*/}
            </div>
          </div>

          {/* FAQ Content */}
          <TabsContent value="faq">
            {/* ... (This part is unchanged) ... */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Find quick answers to the most common questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {APP_DATA.faq.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-base">
                        <p className="text-muted-foreground">{item.answer}</p>
                        {item.screenshot && (
                          <img
                            src={item.screenshot}
                            alt={`Screenshot for ${item.question}`}
                            className="rounded-lg border bg-muted shadow-md w-full max-w-xl mx-auto"
                            loading="lazy"
                          />
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guides Content (Now uses the new component) */}
          <TabsContent value="guides">
            <GuidesContent />
          </TabsContent>

          {/* Contact Content */}
          <TabsContent value="contact">
            {/* ... (This part is unchanged) ... */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Couldn't find an answer? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-muted-foreground">
                      This is the fastest way to get help. We typically respond
                      within 24 hours.
                    </p>
                    <Button asChild className="mt-3">
                      <a
                        href={`mailto:${APP_DATA.contactEmail}?subject=Support Request for ${APP_DATA.appName}`}
                      >
                        Contact Support
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <LifeBuoy className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Feedback & Suggestions</h3>
                    <p className="text-muted-foreground">
                      Have an idea for a new feature? We'd love to hear it.
                    </p>
                    <Button variant="outline" asChild className="mt-3">
                      <a
                        href={`mailto:${APP_DATA.feedbackEmail}?subject=Feedback for ${APP_DATA.appName}`}
                      >
                        Share Feedback
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
