import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navigation backgroundColor="transparent" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  At ASAP DBA, we are committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your personal information when you visit our website or use
                  our database management services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  2. Information We Collect
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We may collect personal information such as your name, email
                  address, and company details when you contact us via our
                  website. We also collect non-personal information through
                  cookies to improve our website experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  3. How We Use Your Information
                </h2>
                <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To respond to your inquiries and support requests.</li>
                  <li>To analyze website usage and optimize performance.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  4. Cookie Policy
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We use cookies to enhance your experience. You can control
                  cookie preferences through our cookie banner or your browser
                  settings. Essential cookies are necessary for the website to
                  function correctly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  5. Data Security
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We implement robust security measures to protect your data.
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  6. Your Rights
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  You have the right to access, update, or delete your personal
                  information. If you wish to exercise these rights, please
                  contact us at support@asapdba.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  7. Changes to This Policy
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  8. Contact Us
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us at support@asapdba.com.
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
