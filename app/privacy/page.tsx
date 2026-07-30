import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Civis Law',
  description: 'Privacy Policy for Civis Law - Counsel. Strategy. Impact.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0d1b3e] border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#c9a84c]" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-white text-sm font-semibold">Back to Home</span>
          </Link>
        </div>
      </nav>

      <main className="min-h-screen bg-[#0d1b3e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Privacy Policy
          </h1>
          <p className="text-white/50 mb-12">Effective Date: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                1. Introduction
              </h2>
              <p className="text-white/70 leading-relaxed">
                Civis Law (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                2. Information We Collect
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect on our site includes:</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span><strong>Personal Identification Information:</strong> Name, email address, phone number, and any other information you voluntarily provide through contact forms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span><strong>Device Information:</strong> Browser type, operating system, IP address, and pages visited.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span><strong>Usage Data:</strong> How you interact with our website, including the duration of visits and content accessed.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                3. How We Use Your Information
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>To respond to your inquiries and provide customer service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>To send promotional communications (with your consent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>To improve and optimize our website and services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>To comply with legal obligations and prevent fraud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>To conduct analytics and understand user behaviour patterns</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                4. Data Security
              </h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                5. Data Sharing and Third Parties
              </h2>
              <p className="text-white/70 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-white/70 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance user experience and gather analytics. You can control cookie settings through your browser. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                7. Your Rights
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Access and obtain a copy of your personal data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Correct inaccurate or incomplete information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Request deletion of your personal data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                8. Contact Us
              </h2>
              <p className="text-white/70 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded text-white/70">
                <p><strong>Civis Law</strong></p>
                <p>Email: civislawltd@gmail.com</p>
                <p>Phone: +91 92208 46222</p>
                <p>Location: New Delhi, India</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                9. Policy Updates
              </h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the effective date at the top of this policy. Your continued use of our website after such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-white transition-colors font-semibold"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
