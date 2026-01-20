import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navigation backgroundColor="transparent" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Last updated: January 20, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  By accessing and using the ASAP DBA website and services, you
                  agree to be bound by these Terms of Service. If you do not
                  agree with any part of these terms, you must not use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  2. Description of Services
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  ASAP DBA provides database management, monitoring, security,
                  and administrative services. We reserve the right to modify or
                  discontinue any part of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  3. User Responsibilities
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Users are responsible for maintaining the confidentiality of
                  their account information and for all activities that occur
                  under their account. You agree to provide accurate and
                  complete information when contacting us or using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  4. Intellectual Property
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  All content, logos, and materials on the ASAP DBA website are
                  the property of ASAP DBA and are protected by intellectual
                  property laws. You may not use our materials without prior
                  written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  5. Limitation of Liability
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  ASAP DBA shall not be liable for any direct, indirect,
                  incidental, or consequential damages arising from the use or
                  inability to use our services, even if we have been advised of
                  the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  6. Governing Law
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  These Terms of Service are governed by and construed in
                  accordance with the laws of the jurisdiction in which ASAP DBA
                  operates, without regard to its conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  7. Changes to Terms
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We reserve the right to update these Terms of Service at any
                  time. Your continued use of the website and services after any
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  8. Contact Us
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please
                  contact us at legal@asapdba.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
