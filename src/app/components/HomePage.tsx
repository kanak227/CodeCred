"use client";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050806] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050806] via-[#071409] to-[#050806] z-0" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E4429] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#006D32] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#26A641] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <header className="flex justify-between items-center py-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent tracking-tight">
            CodeCred
          </h1>
          <button
            onClick={() => signIn("github")}
            className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 text-sm uppercase tracking-wide"
          >
            Sign in with GitHub
          </button>
        </header>

        {/* Hero Section */}
        < section className="flex flex-col items-center justify-center text-center mt-40 space-y-8 mb-32">
          <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Track Your Verified Contributions
            </span>
          </h2>
          <p className="text-xl text-emerald-100/80 max-w-2xl leading-relaxed font-light">
            CodeCred helps you showcase your open-source journey — from GSoC, Hacktoberfest, to MLH and beyond.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-[#26A641] font-mono text-sm">01.</span>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#26A641] to-[#39D353] bg-clip-text text-transparent">
              Features
            </h3>
            <span className="text-[#26A641] font-mono">{`</>`}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Contribution Analytics",
                desc: "Visual insights into your open-source impact",
                icon: "📊"
              },
              {
                title: "Achievement Badges",
                desc: "Earn badges for various contributions",
                icon: "🏆"
              },
              {
                title: "Verify Credentials",
                desc: "Automated verification of contributions",
                icon: "✅"
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-800/20 hover:border-green-700/30 transition-all group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-green-300 mb-2">{feature.title}</h4>
                <p className="text-emerald-100/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-[#26A641] font-mono text-sm">02.</span>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#26A641] to-[#39D353] bg-clip-text text-transparent">
              How It Works
            </h3>
            <span className="text-[#26A641] font-mono">{'{}'}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              {
                step: "1",
                title: "Connect GitHub",
                desc: "Link your GitHub account securely",
                icon: "🔗"
              },
              {
                step: "2",
                title: "Verify Contributions",
                desc: "We scan and verify your open source work",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Showcase Profile",
                desc: "Share your verified developer credentials",
                icon: "✨"
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0E4429] to-[#006D32] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative p-6 bg-[#0A1F0D] rounded-lg border border-[#26A641]/20">
                  <span className="text-[#26A641] text-xs font-mono mb-2 block">Step {step.step}</span>
                  <div className="text-2xl mb-4">{step.icon}</div>
                  <h4 className="text-xl font-semibold text-[#39D353] mb-2">{step.title}</h4>
                  <p className="text-[#A6F0C6]/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Programs Section */}
        <section className="py-24 bg-[#071409]/50 -mx-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className="text-[#26A641] font-mono text-sm">03.</span>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#26A641] to-[#39D353] bg-clip-text text-transparent">
                Featured Programs
              </h3>
              <span className="text-[#26A641] font-mono">[_]</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Google Summer of Code",
                  icon: "/gsoc-icon.png",
                  desc: "Contribute to open source projects with Google"
                },
                {
                  name: "Hacktoberfest",
                  icon: "/hacktoberfest-icon.png",
                  desc: "Annual celebration of open source contributions"
                },
                {
                  name: "MLH Fellowship",
                  icon: "/mlh-icon.png",
                  desc: "Remote software engineering internships"
                }
              ].map((program, i) => (
                <div key={i} className="p-6 bg-gradient-to-b from-[#0E4429]/50 to-transparent rounded-lg border border-[#26A641]/20 hover:border-[#26A641]/40 transition-all">
                  <h4 className="text-xl font-semibold text-[#39D353] mb-3">{program.name}</h4>
                  <p className="text-[#A6F0C6]/70">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Testimonial Section */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg bg-[#0E4429]/20 border border-[#26A641]/20 overflow-hidden">
              <div className="bg-[#050806] p-3 border-b border-[#26A641]/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#26A641]" />
                  <span className="text-sm text-[#A6F0C6]/70">developer_review.md</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-[#39D353]"># CodeCred helped me showcase my open source journey</p>
                <p className="text-[#A6F0C6]/70 mt-4">
                  "Finally, a platform that understands developer credentials. 
                  My verified contributions helped me land my dream role." 
                </p>
                <p className="text-[#26A641] mt-4">- Sarah Chen, Open Source Contributor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Developers" },
              { number: "50K+", label: "Contributions Verified" },
              { number: "1000+", label: "Organizations" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-[#26A641] font-mono text-sm">04.</span>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#26A641] to-[#39D353] bg-clip-text text-transparent">
              FAQ
            </h3>
            <span className="text-[#26A641] font-mono">?</span>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "How does verification work?",
                a: "We use GitHub's API to verify contributions and cross-reference with program databases to ensure authenticity of your open-source participation."
              },
              {
                q: "What programs are supported?",
                a: "Currently we support GSoC, Hacktoberfest, MLH Fellowship, GitHub Campus Expert Program, and various other open-source initiatives. More programs are being added regularly."
              },
              {
                q: "Can I verify my private repositories?",
                a: "Yes, you can verify private repositories where you have appropriate access permissions. Your private data remains secure and is never shared publicly."
              },
              {
                q: "How do I showcase my verified credentials?",
                a: "You get a personalized profile page with verified badges, contribution statistics, and an embeddable widget for your portfolio or resume."
              },
              {
                q: "Is there an API available?",
                a: "Yes, we provide a REST API for developers to integrate CodeCred verification into their applications or hiring platforms."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-[#26A641]/20 rounded-lg overflow-hidden hover:border-[#26A641]/40 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <button className="w-full p-4 text-left flex justify-between items-center hover:bg-[#0E4429]/30">
                  <span className="text-[#A6F0C6]">{faq.q}</span>
                  <span className="text-[#26A641] font-mono">{openFaq === i ? '-' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="p-4 bg-[#0E4429]/10 text-[#A6F0C6]/70 border-t border-[#26A641]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Ready to Showcase Your Impact?
          </h3>
          <button
            onClick={() => signIn("github")}
            className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            Get Started with GitHub
          </button>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#26A641]/10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#A6F0C6]/70 text-sm">
              © 2025 CodeCred. Made with 💚
            </div>
            <a 
              href="https://github.com/yourusername/codecred" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#39D353] hover:text-[#26A641] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
