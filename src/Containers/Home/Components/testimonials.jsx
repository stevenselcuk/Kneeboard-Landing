import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mark Chen",
    role: "Private Pilot, Cessna 172",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "This app replaced a mountain of paper in my flight bag. The built-in templates are perfect for quick flights, and importing my POH checklists was a game-changer. It just works.",
  },
  {
    name: "Samuel Rivera",
    role: "CFI / CFII",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote:
      "I recommend Kneeboard to all my students. It helps them organize their notes for debriefs and gets them comfortable with digital tools in the cockpit early on. The PDF export is fantastic for reviewing their cross-country planning.",
  },
  {
    name: "David Lee",
    role: "Student Pilot - 65hrs",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    quote:
      "Honestly, copying clearances used to be my biggest source of anxiety. With Kneeboard, I can just scribble it down fast and zoom in later. My instructor noticed the improvement immediately. Total confidence booster.",
  },
  {
    name: "Alex Johnson",
    role: "Instrument Rated Pilot",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    quote:
      "For IFR flights, this is indispensable. I have my approach briefs and custom templates loaded up before I even start the engine. It's clean, fast, and makes single-pilot IFR feel significantly less chaotic.",
  },
  {
    name: "Marco Garcia",
    role: "Cirrus SR22 Owner",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    quote:
      "Finally, an app that understands what pilots actually need. The UI is uncluttered and the Apple Pencil response is flawless. It feels like it was designed by a pilot, not just a programmer.",
  },
  {
    name: "Jason Davies",
    role: "Charter Pilot, Part 135",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "In the charter world, every second counts. I have a Kneeboard template for each aircraft in our fleet. It makes switching from our Baron to the PC-12 seamless and keeps my workflow consistent and professional.",
  },
  {
    name: "Chris Baxter",
    role: "King Air 250 Pilot",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "This app is a core part of my professional flight deck. It keeps everything organized per flight and the ability to create custom templates for our specific ops is invaluable. Looks clean, works reliably.",
  },
  {
    name: "Ryan Peterson",
    role: "Mooney M20J Owner",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    quote:
      "My favorite feature is the simple PDF import. I have all my Mooney-specific checklists and performance charts in one place. It makes my pre-flight and in-flight workflows so much smoother.",
  },
  {
    name: "Ethan White",
    role: "Helicopter Pilot, Bell 407",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    quote:
      "The stability in a high-vibration environment is key. Tapping and writing is easy, and not having to worry about papers flying around the bubble canopy is a huge plus. Great for survey flights.",
  },
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

// Ensure there are testimonials before attempting to chunk them
const testimonialChunks =
  testimonials.length > 0
    ? chunkArray(testimonials, Math.ceil(testimonials.length / 3))
    : [];

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold tracking-tight">
              Trusted in the Cockpit
            </h2>
            <p className="text-body mt-4 max-w-2xl mx-auto">
              From student pilots to professional flight crews, here's what the
              aviation community is saying about Kneeboard.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-4">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index} className="break-inside-avoid">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-4 pt-6">
                      <Avatar className="size-10">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold text-base">{name}</h3>
                        <span className="text-muted-foreground block text-sm">
                          {role}
                        </span>
                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                            "{quote}"
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
