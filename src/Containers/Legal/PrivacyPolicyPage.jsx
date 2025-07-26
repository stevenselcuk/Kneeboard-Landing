// src/pages/PrivacyPolicyPage.jsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  const lastUpdated = "October 26, 2023";
  const appName = "Kneeboard";
  const supportEmail = "support@tabbythecat.com";

  return (
    <section>
      <div className="bg-background text-foreground min-h-screen pt-20">
        <div className="container mx-auto max-w-4xl p-4 py-8 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                Privacy Policy
              </CardTitle>
              <CardDescription className="pt-2">
                Last Updated: {lastUpdated}
              </CardDescription>
            </CardHeader>
            <Separator className="mb-6" />
            <CardContent className="space-y-6 text-muted-foreground leading-7">
              <p>
                This Privacy Policy explains our policies regarding the
                collection, use, and disclosure of information for the {appName}{" "}
                mobile application (the "Application"), provided by{" "}
                <strong className="text-foreground">Tabby Cat, LLC</strong>{" "}
                ("We," "Us," "Our").
              </p>
              <p>
                Your privacy is of the utmost importance to us. This Application
                has been designed from the ground up to respect your privacy.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  1. Core Principle: No Data Collection
                </h2>
                <p>
                  The Application is designed to be a fully offline tool. We do
                  not collect, store, transmit, or have access to any of your
                  personal or non-personal information.
                </p>
                <p className="mt-4">
                  To be perfectly clear,{" "}
                  <strong className="text-foreground">
                    WE DO NOT COLLECT:
                  </strong>
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4">
                  <li>
                    <strong className="text-foreground">
                      Personal Information:
                    </strong>{" "}
                    We do not ask for, access, or collect any personally
                    identifiable information such as your name, email address,
                    phone number, or physical address.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Usage Data & Analytics:
                    </strong>{" "}
                    We do not collect any information about how you interact
                    with the Application. We do not use any analytics tools to
                    track your sessions, screen views, button taps, or other
                    usage - patterns.
                  </li>
                  <li>
                    <strong className="text-foreground">Location Data:</strong>{" "}
                    The Application does not request, access, or track your
                    device's geographic location.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Device and Network Information:
                    </strong>{" "}
                    We do not collect information about your device, such as its
                    model, operating system version, unique device identifiers,
                    or network information.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  2. How Information is Stored
                </h2>
                <p>
                  All data created by you or used by the Application (such as
                  settings, calculations, or user-entered data) is stored{" "}
                  <strong className="text-foreground">
                    exclusively on your local device
                  </strong>
                  . This data is not sent to our servers or any third party. If
                  you delete the Application, this data will be removed, subject
                  to the operating system's standard behavior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                  <br />
                  <strong>Developer:</strong> Selcuk Dolapci on behalf of Tabby
                  Cat, LLC
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-primary hover:underline"
                  >
                    {supportEmail}
                  </a>
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
