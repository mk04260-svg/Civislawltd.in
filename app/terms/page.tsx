import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Civis Law',
  description: 'Terms of Service for Civis Law - Counsel. Strategy. Impact.',
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-white/50 mb-12">Effective Date: January 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-white/70 leading-relaxed">
                By accessing and using this website and engaging with Civis Law&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                2. Use License
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Civis Law&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Attempt to decompile or reverse engineer any software contained on the website</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Transmit the materials to another person or &quot;mirror&quot; the materials on any other server</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                3. Disclaimer of Warranties
              </h2>
              <p className="text-white/70 leading-relaxed">
                The materials on Civis Law&apos;s website are provided on an &quot;as is&quot; basis. Civis Law makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                4. Limitations of Liability
              </h2>
              <p className="text-white/70 leading-relaxed">
                In no event shall Civis Law or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Civis Law&apos;s website, even if Civis Law or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                5. Accuracy of Materials
              </h2>
              <p className="text-white/70 leading-relaxed">
                The materials appearing on Civis Law&apos;s website could include technical, typographical, or photographic errors. Civis Law does not warrant that any of the materials on the website are accurate, complete, or current. Civis Law may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                6. Limitations on Use
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">You may not:</p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Use or attempt to use any automated system to access the website without prior written permission</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Disrupt the normal flow of dialogue within the website</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] flex-shrink-0">•</span>
                  <span>Attempt to gain unauthorized access to any portion of the website</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                7. Attorney-Client Privilege
              </h2>
              <p className="text-white/70 leading-relaxed">
                Communication through this website does not establish an attorney-client relationship. Any information provided through this website should not be construed as legal advice unless a formal engagement letter has been executed and accepted by Civis Law. Do not rely on information presented on this website as a substitute for professional legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                8. Confidentiality
              </h2>
              <p className="text-white/70 leading-relaxed">
                Unless otherwise stated, information sent to Civis Law through this website should not be considered confidential or privileged unless we have agreed to represent you and a formal engagement exists. Please do not send any confidential information prior to entering into an engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                9. Modifications
              </h2>
              <p className="text-white/70 leading-relaxed">
                Civis Law may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                10. Dispute Resolution
              </h2>
              <p className="text-white/70 leading-relaxed">
                These terms and conditions are governed by the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts of Delhi, India for the resolution of any disputes arising from your use of this website or engagement with Civis Law&apos;s services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-serif mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-playfair)' }}>
                11. Contact Information
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                For any questions regarding these Terms of Service, please contact:
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded text-white/70">
                <p><strong>Civis Law</strong></p>
                <p>Email: civislawltd@gmail.com</p>
                <p>Phone: +91 92208 46222</p>
                <p>Location: New Delhi, India</p>
              </div>
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
