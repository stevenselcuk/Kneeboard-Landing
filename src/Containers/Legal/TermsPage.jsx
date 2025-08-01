// src/pages/TermsPage.jsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  // Bu değişkenleri güncellemeyi unutmayın
  const lastUpdated = "October 26, 2023"; // Buraya güncel tarihi girin
  const appName = "Kneeboard"; // Buraya uygulamanızın adını girin
  const supportEmail = "support@tabbythecat.com"; // Buraya destek e-posta adresinizi girin

  return (
    <section>
      <div className="text-foreground min-h-screen pt-20">
        <div className="container mx-auto max-w-4xl p-4 py-8 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                Terms & Conditions
              </CardTitle>
              <CardDescription className="pt-2">
                Last Updated: {lastUpdated}
              </CardDescription>
            </CardHeader>
            <Separator className="mb-6" />
            <CardContent className="space-y-6 text-muted-foreground leading-7">
              <p>
                PLEASE READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY
                BEFORE USING THE {appName} MOBILE APPLICATION (THE
                "APPLICATION").
              </p>
              <p>
                This Application is licensed, not sold, to you for use only
                under the terms of this license. The licensor,{" "}
                <strong className="text-foreground">Tabby Cat, LLC</strong>,
                ("Licensor," "We," "Us," "Our"), reserves all rights not
                expressly granted to You.
              </p>
              <p>
                By downloading, installing, or using the Application, You
                ("You," "User") signify your agreement to be bound by these
                Terms. If You do not agree to these Terms, do not use the
                Application and delete it from your device.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  1. Critical Notice: Aviation Usage and Disclaimer
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-foreground">
                      For Supplementary Use Only:
                    </strong>{" "}
                    This Application is classified as a{" "}
                    <strong>
                      Type I Electronic Flight Bag (EFB) application
                    </strong>
                    . It is intended for situational awareness and informational
                    purposes ONLY. It is NOT a certified aviation instrument or
                    a primary source of flight-critical information.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Not a Replacement for Official Documents:
                    </strong>{" "}
                    The Application must NOT be used as a replacement for
                    official, approved, and current aeronautical charts,
                    publications, flight manuals, checklists, or any other
                    documentation required by aviation authorities (e.g., FAA,
                    EASA) or aircraft manufacturers.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      User Responsibility:
                    </strong>{" "}
                    The User is solely responsible for verifying the accuracy,
                    currency, and applicability of any information presented by
                    the Application by cross-referencing it with official and
                    approved sources before and during any flight operation.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Assumption of Risk:
                    </strong>{" "}
                    The User expressly acknowledges and agrees that aviation is
                    an inherently high-risk activity. The User assumes ALL risk
                    and responsibility for any use of this Application.
                    Decisions regarding flight safety, navigation, and aircraft
                    operation must ALWAYS be based on official and approved
                    documentation and the pilot-in-command's judgment.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  2. Scope of License
                </h2>
                <p>
                  We grant You a limited, non-exclusive, non-transferable,
                  revocable license to use the Application for your personal,
                  non-commercial use on any mobile device that You own or
                  control, as permitted by the applicable App Store's terms of
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  6. Limitation of Liability
                </h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                  SHALL THE LICENSOR OR ITS AFFILIATES, OR ANY OF ITS OR THEIR
                  RESPECTIVE LICENSORS OR SERVICE PROVIDERS, BE LIABLE FOR ANY
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES WHATSOEVER (INCLUDING, BUT NOT LIMITED TO,
                  DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS
                  INTERRUPTION, PERSONAL INJURY, OR PROPERTY DAMAGE) ARISING OUT
                  OF OR IN ANY WAY RELATED TO YOUR USE OF OR INABILITY TO USE
                  THE APPLICATION, EVEN IF THE LICENSOR HAS BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
              </section>

              {/* Diğer bölümleri de buraya benzer şekilde ekleyebilirsiniz. */}
              {/* Örnek olarak en kritik olanları ekledim. */}

              <section>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                  10. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact
                  us:
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

export default TermsPage;
