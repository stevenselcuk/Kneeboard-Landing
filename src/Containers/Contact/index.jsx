import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Handshake, LifeBuoy, Mail, Newspaper } from "lucide-react";

// ==================================================================
// ⚙️ CONFIGURATION AREA ⚙️
// Sadece uygulamanızın adını ve e-posta adreslerini burada güncelleyin.
// ==================================================================
const APP_CONFIG = {
  appName: "Kneeboard", // E-posta konusuna eklenecek uygulama adı
  supportEmail: "support@tabbythecat.com",
  feedbackEmail: "feedback@tabbythecat.com",
  partnershipEmail: "sales@tabbythecat.com",
  pressEmail: "steven@tabbythecat.com",
};

// ==================================================================
// Reusable Contact Card Component
// Her bir iletişim seçeneği için bu kartı kullanacağız.
// ==================================================================
function ContactCard({
  icon,
  title,
  description,
  buttonText,
  email,
  emailSubject,
}) {
  // E-posta konusunu tarayıcıların anlayacağı formata çevirir (boşlukları %20 yapar vb.)
  const encodedSubject = encodeURIComponent(emailSubject);
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}`;

  return (
    <Card className="flex flex-col text-center sm:text-left transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center sm:items-start">
        <div className="bg-primary/10 text-primary p-3 rounded-lg mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="justify-center sm:justify-start">
        <Button asChild>
          <a href={mailtoLink}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

// ==================================================================
// Main Contact Page Component
// ==================================================================
export default function ContactUsPage() {
  return (
    <div className="min-h-screen mx-auto max-w-5xl px-6 pt-20">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactCard
            icon={<LifeBuoy className="h-8 w-8" />}
            title="Technical Support"
            description="Have a technical issue or need help using a feature? Our support team is ready to assist you."
            buttonText="Contact Support"
            email={APP_CONFIG.supportEmail}
            emailSubject={`Support Request: ${APP_CONFIG.appName}`}
          />
          <ContactCard
            icon={<Handshake className="h-8 w-8" />}
            title="Partnerships & Sales"
            description="Interested in collaborating, bulk licensing, or enterprise solutions? Let's talk about how we can work together."
            buttonText="Reach Out"
            email={APP_CONFIG.partnershipEmail}
            emailSubject={`Partnership Inquiry: ${APP_CONFIG.appName}`}
          />
          <ContactCard
            icon={<Mail className="h-8 w-8" />}
            title="Feedback & Suggestions"
            description="Have a great idea for a new feature or a suggestion to improve the app? We're all ears."
            buttonText="Share Your Idea"
            email={APP_CONFIG.feedbackEmail}
            emailSubject={`Feedback for ${APP_CONFIG.appName}`}
          />
          <ContactCard
            icon={<Newspaper className="h-8 w-8" />}
            title="Press & Media"
            description="For all press inquiries, media kits, and interviews, please contact our media relations team."
            buttonText="Contact Media Team"
            email={APP_CONFIG.pressEmail}
            emailSubject={`Press Inquiry: ${APP_CONFIG.appName}`}
          />
        </div>

        {/* Fallback Contact */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Can't find the right department? <br className="sm:hidden" />
            Email us at{" "}
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {APP_CONFIG.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
