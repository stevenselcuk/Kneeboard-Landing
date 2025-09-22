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
import {
  BookOpen,
  CheckSquare,
  LifeBuoy,
  Mail,
  Plane,
  UploadCloud,
} from "lucide-react";
import { useState } from "react";

// ==================================================================
// ⚙️ CONFIGURATION AREA ⚙️
// Updated for the Kneeboard App
// ==================================================================
const APP_DATA = {
  appName: "Kneeboard",
  appDescription: "Smart notes and templates for the modern pilot.",
  contactEmail: "support@tabbythecat.com",
  feedbackEmail: "feedback@tabbythecat.com",

  // --- FREQUENTLY ASKED QUESTIONS ---
  faq: [
    {
      question: "How do I create my own custom template?",
      answer:
        "You have two great options. The easiest method is to create an A4 or US Letter sized document in an app like Google Docs, Microsoft Word, or Pages, and then export it as a PDF. For a pixel-perfect fit, you can create a PNG image with a resolution of 2064px (width) by 2752px (height). Once you have your PDF or PNG, you're ready to import it.",
      screenshot: "/screenshots/kneeboard/create-template-guide.png", // TODO: Replace with an image showing a doc being made
    },
    {
      question: "How do I import my own template (PDF/PNG)?",
      answer:
        "From the 'Templates' gallery, tap the '+' icon in the top-right corner. This will open a file importer. Select the PDF or PNG file you wish to use as a template, and it will be automatically added to your 'Custom Templates' category.",
      screenshot: "/screenshots/kneeboard/import-template.png", // TODO: Replace with actual screenshot
    },
    {
      question: "How do I rename a note I've saved?",
      answer:
        "While editing a note, tap the info icon (ⓘ) in the top-right toolbar. This will open the 'Note Settings' screen where you can give your note a new name and save it.",
      screenshot: "/screenshots/kneeboard/rename-note.png", // TODO: Replace with actual screenshot
    },
    {
      question: "How can I organize my saved notes?",
      answer:
        "You can organize notes in two ways. First, long-press on any note in the 'Your Notes' grid to 'Add to favorites'. Second, you can assign notes to categories. Long-press a note, select 'Change Category', and pick one. You can manage your categories from the folder icon in the main toolbar.",
    },
    {
      question: "How do I export or share a note as a PDF?",
      answer:
        "From the 'Your Notes' screen, long-press (or right-click) on the note you want to export. A context menu will appear. Tap on 'Export PDF' to open the standard iOS Share Sheet, from where you can save it to your files, airdrop it, or send it via another app.",
      screenshot: "/screenshots/kneeboard/export-pdf.png", // TODO: Replace with actual screenshot
    },
  ],

  // --- USER GUIDES ---
  guides: [
    {
      title: "Getting Started: Your First Note",
      description: "Learn the basics of creating and saving your first note.",
      icon: <Plane className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Welcome to Kneeboard!" },
        {
          type: "paragraph",
          text: "This guide will walk you through creating your very first note, from selecting a template to saving your work.",
        },
        { type: "heading", text: "1. Choose a Template" },
        {
          type: "paragraph",
          text: "The first screen you see is the 'Templates' gallery. This is where all your available note backgrounds live. For this example, let's tap on the 'Arrival' template under the 'Brief Cards' category.",
        },
        {
          type: "image",
          src: "/screenshots/brief-card-arrival.png", // Using the image you provided
          alt: "Selecting the Arrival brief card template",
        },
        { type: "heading", text: "2. Take Your Notes" },
        {
          type: "paragraph",
          text: "The template will open full-screen. Use your Apple Pencil to start writing directly on the canvas. You can write down ATIS information, runway conditions, or any other notes for your arrival. Use two fingers to pinch-to-zoom or pan around the canvas.",
        },
        { type: "heading", text: "3. Save Your Note" },
        {
          type: "paragraph",
          text: "Kneeboard saves automatically. When you are finished, simply tap the '< Back' button in the top-left corner. If you've written anything, the note will be saved and you'll see it in the 'Your Notes' tab.",
        },
      ],
    },
    {
      title: "Mastering Your Templates",
      description: "Importing and managing your custom templates.",
      icon: <UploadCloud className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Beyond the Built-ins" },
        {
          type: "paragraph",
          text: "Kneeboard's power shines when you use your own materials. You can import any PDF or PNG as a reusable template.",
        },
        { type: "heading", text: "1. Importing a Template" },
        {
          type: "paragraph",
          text: "In the 'Templates' gallery, tap the `+` icon in the top-right corner. Your device's file browser will appear. Navigate to and select the PDF or PNG file you want to import.",
        },
        {
          type: "image",
          src: "/screenshots/kneeboard/import-flow.png", // TODO: Replace with actual screenshot
          alt: "Importing a PDF checklist",
        },
        { type: "heading", text: "2. Finding and Using Your Template" },
        {
          type: "paragraph",
          text: "Once imported, your file will appear in a new 'Custom Templates' section in the gallery. You can tap on it to create a new note just like any other template.",
        },
        { type: "heading", text: "3. Managing Templates" },
        {
          type: "list",
          items: [
            "**Favoriting:** Long-press any template (built-in or custom) and select 'Add to favorites' to make it appear in the top 'Favorites' row for quick access.",
            "**Deleting:** You can only delete custom templates. Long-press on a custom template and tap 'Delete your template' to permanently remove it and its associated file from the app.",
          ],
        },
      ],
    },
    {
      title: "Organizing Your Cockpit",
      description: "Using categories, favorites, and search to find notes.",
      icon: <CheckSquare className="h-5 w-5 mr-2" />,
      content: [
        { type: "heading", text: "Keeping Your Notes Tidy" },
        {
          type: "paragraph",
          text: "As you create more notes, organization becomes key. Kneeboard provides powerful tools to keep everything in its right place.",
        },
        { type: "heading", text: "1. Managing Categories" },
        {
          type: "paragraph",
          text: "In the 'Your Notes' view, tap the folder icon (`folder.badge.plus`) in the toolbar to manage your categories. Here you can add new categories (e.g., 'Cessna 172', 'IFR Training') or delete existing ones.",
        },
        {
          type: "image",
          src: "/screenshots/kneeboard/manage-categories.png", // TODO: Replace with actual screenshot
          alt: "Category management screen",
        },
        { type: "heading", text: "2. Assigning Notes to Categories" },
        {
          type: "paragraph",
          text: "Long-press any note in the grid and select 'Change Category' from the context menu. Tap the desired category to assign the note to it. You can filter your notes by category using the menu on the right side of the search bar.",
        },
        {
          type: "list",
          items: [
            "**Favorites:** Long-press a note and tap 'Add to favorites' to make it stand out.",
            "**Search:** Use the search bar at the top to find notes by their name instantly.",
          ],
        },
      ],
    },
  ],
};

// ==================================================================
// SUB-COMPONENT FOR THE GUIDES TAB
// This component handles the two-column layout for the guides.
// No changes needed here.
// ==================================================================
function GuidesContent() {
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
                  "w-full flex justify-start items-center text-left h-auto py-2 cursor-pointer",
                  selectedGuide.title === guide.title &&
                    "bg-accent text-accent-foreground"
                )}
                onClick={() => setSelectedGuide(guide)}
              >
                {guide.icon}
                <div>
                  <p className="font-semibold text-wrap">{guide.title}</p>
                  <p className="text-xs text-muted-foreground text-wrap">
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
// No changes needed here.
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
              <TabsTrigger value="faq" className="cursor-pointer">
                <LifeBuoy className="w-4 h-4 mr-2" /> FAQ
              </TabsTrigger>
              <TabsTrigger value="guides" className="cursor-pointer">
                <BookOpen className="w-4 h-4 mr-2" /> Guides
              </TabsTrigger>
              <TabsTrigger value="contact" className="cursor-pointer">
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
