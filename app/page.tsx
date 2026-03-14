"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GiftCard } from "@/components/GiftCard";
import { ContactCard } from "@/components/ContactCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-aurora relative w-full overflow-hidden">
      {/* Aurora glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen bg-aurora"></div>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-gold border border-gold/30 rounded-full px-4 py-1.5 mb-8 font-medium bg-gold/5 backdrop-blur-sm"
        >
          ELVTE × Victory Christian Fellowship · New Castle, DE
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], filter: ["drop-shadow(0 0 10px rgba(245,185,66,0.4))", "drop-shadow(0 0 40px rgba(245,185,66,0.8))", "drop-shadow(0 0 10px rgba(245,185,66,0.4))"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl sm:text-7xl mb-6 relative"
        >
          <span className="relative z-10">🕯️</span>
          <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-black leading-[1.05] tracking-tight mb-4 text-glow bg-gradient-to-br from-gold via-warm to-amber bg-clip-text text-transparent [font-family:var(--font-playfair)]"
        >
          Be the Bridge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif italic text-lg sm:text-xl text-light-text max-w-sm leading-relaxed mb-10 [font-family:var(--font-dm-serif)]"
        >
          Your gift is not an accident.<br />
          It&apos;s your mission field — right here, right now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gold/[0.04] border border-gold/20 rounded-2xl p-5 text-sm text-gold italic max-w-sm mb-16 leading-relaxed shadow-[0_0_20px_#f5b9420d] backdrop-blur-md"
        >
          &quot;You are the light of the world. A town built on a hill cannot be hidden.&quot; — Matthew 5:14
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-light-text text-[10px] tracking-[0.2em] uppercase cursor-pointer hover:text-gold transition-colors"
          onClick={() => document.getElementById("giftsGrid")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Find Your Gift</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* Gifts Grid Section */}
      <section id="giftsGrid" className="relative z-10 pt-16 pb-24 px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-warm mb-3 [font-family:var(--font-playfair)]">Find Your Gift</h2>
          <p className="text-light-text text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            Tap a gift below to explore your career path, free resources, and how to be a light through it.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <GiftCard
            title="Stock Trading & Finance"
            subtitle="Build wealth. Fund vision."
            icon="📈"
            iconBg="rgba(52,199,89,0.12)"
            steps={[
              "Learn market fundamentals — stocks, bonds, ETFs",
              "Practice with paper trading before real money",
              "Study for Series 65 or CFA for professional roles",
              "Explore: Financial Analyst, Investment Advisor, Trader"
            ]}
            resources={[
              { name: "Investopedia", url: "https://www.investopedia.com", freeType: "Free", icon: "💻" },
              { name: "Khan Academy — Finance", url: "https://www.khanacademy.org/economics-finance-domain", freeType: "Free", icon: "🎓" },
              { name: "Yahoo Finance", url: "https://finance.yahoo.com", freeType: "Free", icon: "📊" },
              { name: "Yale Financial Markets (Coursera)", url: "https://www.coursera.org/learn/financial-markets-global", freeType: "Audit Free", icon: "🏛️" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="Use your financial gift to fund kingdom work, mentor underserved communities in wealth-building, and model ethical stewardship in an industry that often chases greed. Financial freedom creates capacity to give generously."
            faithVerse='"Wealth gained hastily will dwindle, but whoever gathers little by little will increase it." — Proverbs 13:11'
          />

          <GiftCard
            title="Visual Art & Design"
            subtitle="Create beauty. Carry meaning."
            icon="🎨"
            iconBg="rgba(255,149,0,0.12)"
            steps={[
              "Build a portfolio — start on Instagram, Behance, or ArtStation",
              "Learn digital tools: Procreate, Adobe Illustrator, Photoshop",
              "Explore: Graphic Designer, Illustrator, Art Director, Gallery Artist",
              "Look into RISD, SCAD, or free community college programs"
            ]}
            resources={[
              { name: "Proko (YouTube)", url: "https://www.youtube.com/@Proko", freeType: "Free", icon: "🎥" },
              { name: "Behance Portfolio", url: "https://www.behance.net", freeType: "Free", icon: "🖼️" },
              { name: "Envato Tuts+ Design", url: "https://design.tutsplus.com", freeType: "Free Lessons", icon: "✏️" },
              { name: "Canva Design School", url: "https://www.canva.com/designschool", freeType: "Free", icon: "🎓" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="Art has always carried the gospel — from cathedral windows to modern murals. Your brush, your canvas, your design can speak truth before a word is said. Create work that points people toward the Author of all beauty."
            faithVerse='"He has filled them with skill to do all kinds of work as engravers... and designers." — Exodus 35:35'
          />

          <GiftCard
            title="Architecture & Design"
            subtitle="Shape spaces. Shape lives."
            icon="🏛️"
            iconBg="rgba(90,200,250,0.12)"
            steps={[
              "Take drafting, geometry, and physics seriously in school",
              "Learn AutoCAD, SketchUp, or Revit (free student licenses)",
              "Pursue a B.Arch (5-year program) or Interior Design degree",
              "Explore: Architect, Urban Planner, Interior Designer, Civil Engineer"
            ]}
            resources={[
              { name: "Autodesk (Free for Students)", url: "https://www.autodesk.com/education/edu-software/overview", freeType: "Free", icon: "🖥️" },
              { name: "ArchDaily — Daily Inspiration", url: "https://www.archdaily.com", freeType: "Free", icon: "🌐" },
              { name: "SketchUp Free", url: "https://www.sketchup.com/plans-and-pricing/sketchup-free", freeType: "Free", icon: "📐" },
              { name: "MIT OpenCourseWare — Architecture", url: "https://ocw.mit.edu/search/?d=Architecture", freeType: "Free", icon: "🎓" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="God was the first architect — designing cosmos, creation, and community. Design spaces that bring dignity to underserved neighborhoods, build affordable housing, and create gathering places where people encounter peace. Every structure is an opportunity to serve."
            faithVerse='"Unless the Lord builds the house, the builders labor in vain." — Psalm 127:1'
          />

          <GiftCard
            title="Music & Performance"
            subtitle="Move hearts. Shift atmospheres."
            icon="🎵"
            iconBg="rgba(175,82,222,0.12)"
            steps={[
              "Record yourself consistently — build your sound identity",
              "Learn music theory, production, and audio engineering",
              "Explore: Musician, Producer, Music Therapist, Sound Designer",
              "Look into Berklee Online, YouTube, or your local arts school"
            ]}
            resources={[
              { name: "MusicTheory.net", url: "https://www.musictheory.net", freeType: "Free", icon: "🎼" },
              { name: "BandLab (Free DAW)", url: "https://www.bandlab.com", freeType: "Free", icon: "🎛️" },
              { name: "Berklee Free Music Lessons", url: "https://online.berklee.edu/free-music-lessons", freeType: "Free", icon: "🎓" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="Music softens walls nothing else can break. Your melody can carry the gospel into rooms where preaching never gets an invitation. Write songs that tell the truth. Perform in spaces that need hope."
            faithVerse='"Sing to the Lord a new song; sing to the Lord, all the earth." — Psalm 96:1'
          />

          <GiftCard
            title="Technology & Coding"
            subtitle="Build tools. Solve problems."
            icon="💻"
            iconBg="rgba(50,215,75,0.12)"
            steps={[
              "Start with Python, JavaScript, or Scratch — free everywhere",
              "Build projects, not just tutorials",
              "Explore: Software Engineer, AI Developer, UX Designer, Cybersecurity",
              "Free bootcamps and college scholarships available for CS"
            ]}
            resources={[
              { name: "freeCodeCamp", url: "https://www.freecodecamp.org", freeType: "Free", icon: "🔵" },
              { name: "Code.org", url: "https://code.org", freeType: "Free", icon: "💡" },
              { name: "Harvard CS50", url: "https://cs50.harvard.edu", freeType: "Free", icon: "🎓" },
              { name: "GitHub (Portfolio)", url: "https://github.com", freeType: "Free", icon: "🐙" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="Technology reaches billions. Build apps for the underserved. Create platforms for justice. Use AI to amplify the gospel. The most शक्तिशाली mission fields of this generation are digital, and God is calling builders who know Him."
            faithVerse='"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23'
          />

          <GiftCard
            title="Business & Entrepreneurship"
            subtitle="Create companies. Create jobs."
            icon="🚀"
            iconBg="rgba(255,214,10,0.12)"
            steps={[
              "Start a small business now — sell a skill, product, or service",
              "Learn marketing, sales, operations, and leadership",
              "Look into DECA, NFTE, or Young Entrepreneurs of America",
              "Explore: Founder, Product Manager, Marketing Strategist, CEO"
            ]}
            resources={[
              { name: "SCORE Free Mentorship", url: "https://www.score.org", freeType: "Free", icon: "🤝" },
              { name: "SBA Business Guide", url: "https://www.sba.gov/business-guide", freeType: "Free", icon: "🏛️" },
              { name: "GaryVee (YouTube)", url: "https://www.youtube.com/@GaryVee", freeType: "Free", icon: "🎥" },
            ]}
            faithTitle="Your Light in This Field"
            faithBody="Kingdom entrepreneurs build businesses that solve real problems and employ their communities. Your company can be a platform for generosity, ethics, and living proof that faith and excellence are not opposites."
            faithVerse='"She considers a field and buys it; out of her earnings she plants a vineyard." — Proverbs 31:16'
          />
        </div>
      </section>

      {/* Gospel Bridge Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-gold/10 to-amber/5 border border-gold/25 rounded-[32px] p-8 sm:p-12 text-center shadow-[0_20px_40px_-15px_#f5b9421a] backdrop-blur-xl">
          <div className="text-4xl mb-4 text-glow">🔥</div>
          <h2 className="font-serif text-2xl sm:text-3xl text-gold mb-3 [font-family:var(--font-playfair)]">
            How to Share the Gospel Through Your Gift
          </h2>
          <p className="text-light-text text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Your career is not separate from your calling. Here&apos;s how to carry the light wherever your gift takes you:
          </p>

          <ul className="text-left space-y-5 text-sm sm:text-[15px] text-warm">
            <li className="flex gap-4 items-start group">
              <span className="w-7 h-7 bg-gold text-midnight font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">1</span>
              <p><strong className="text-gold group-hover:text-warm transition-colors">Be excellent.</strong> Excellence earns access. People will ask <em>why</em> you work differently. That&apos;s your opening.</p>
            </li>
            <li className="flex gap-4 items-start group">
              <span className="w-7 h-7 bg-gold text-midnight font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">2</span>
              <p><strong className="text-gold group-hover:text-warm transition-colors">Serve before you sell.</strong> Use your gift to solve a real problem in your community — especially for those who can&apos;t pay you back.</p>
            </li>
            <li className="flex gap-4 items-start group">
              <span className="w-7 h-7 bg-gold text-midnight font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">3</span>
              <p><strong className="text-gold group-hover:text-warm transition-colors">Tell your story.</strong> Don&apos;t hide where your gift came from. Your testimony is part of your brand.</p>
            </li>
            <li className="flex gap-4 items-start group">
              <span className="w-7 h-7 bg-gold text-midnight font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">4</span>
              <p><strong className="text-gold group-hover:text-warm transition-colors">Build for the margins.</strong> Ask: who doesn&apos;t have access to what I&apos;m building? Then build toward them.</p>
            </li>
            <li className="flex gap-4 items-start group">
              <span className="w-7 h-7 bg-gold text-midnight font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">5</span>
              <p><strong className="text-gold group-hover:text-warm transition-colors">Stay connected to the source.</strong> Gifts without character become stumbling blocks. Stay rooted.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-warm mb-3 [font-family:var(--font-playfair)]">Your Local Network</h2>
          <p className="text-light-text text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
            Real organizations in New Castle County ready to invest in you. Reach out this week.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Finance */}
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-semibold mb-6 pb-2 border-b border-white/10 w-full sm:w-auto sm:inline-flex">
              <span className="text-lg">📈</span> Finance & Entrepreneurship
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ContactCard
                name="Junior Achievement of Delaware"
                tags={["Finance", "Biz"]}
                desc="Free financial literacy, entrepreneurship, and work readiness programs delivered directly to youth in churches, community centers, and schools across New Castle County. Ask them to come to VCF."
                links={[
                  { type: "email", label: "Niesha.LawlerOkonkwo@ja.org", href: "mailto:Niesha.LawlerOkonkwo@ja.org" },
                  { type: "url", label: "delaware.ja.org", href: "https://delaware.ja.org" }
                ]}
              />
              <ContactCard
                name="YMCA Black Achievers Program"
                tags={["Career", "Mentorship"]}
                desc="Pairs African American teens with professional mentors across business and finance. Weekly meetings at Walnut Street YMCA in Wilmington for one full year."
                links={[{ type: "url", label: "ymcade.org", href: "https://www.ymcade.org/programs/youth-leadership" }]}
              />
              <ContactCard
                name="NCC Youth Workforce Development"
                tags={["Jobs", "Internships"]}
                desc="New Castle County places youth (ages 14–21) in paid internship-style roles with local employers — including finance, arts, and tech organizations."
                links={[
                  { type: "url", label: "newcastlede.gov/859", href: "https://www.newcastlede.gov/859" },
                  { type: "phone", label: "302-395-5555" }
                ]}
              />
            </div>
          </div>

          {/* Art & Music */}
          <div>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-semibold mb-6 pb-2 border-b border-white/10 w-full sm:w-auto sm:inline-flex">
              <span className="text-lg">🎨</span> Art & Music
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ContactCard
                name="Christina Cultural Arts Center"
                tags={["Art", "Music", "Drama"]}
                desc="Delaware's only comprehensive arts and education program. Offers music, visual art, dance on a sliding-fee scale. Nearly 80 years serving Wilmington — 10 min from New Castle."
                links={[
                  { type: "address", label: "705 N. Market St, Wilmington DE 19801" },
                  { type: "url", label: "ccacde.org", href: "https://ccacde.org" }
                ]}
              />
              <ContactCard
                name="YMCA Essence Legacy Performing Arts"
                tags={["Music", "Performance"]}
                desc="A performing arts program specifically for New Castle County teens — choir, percussion, color guard, and more. Competes across the Mid-Atlantic. 90+ performers enrolled."
                links={[{ type: "url", label: "ymcade.org", href: "https://www.ymcade.org/programs/youth-leadership" }]}
              />
              <ContactCard
                name="The Delaware Contemporary — ARC"
                tags={["Visual Art", "Portfolio"]}
                desc="Artist-in-Residence program for emerging artists. Offers 1-on-1 mentorship, supplies funding, exhibition opportunity. Equity-focused — built for students who need access."
                links={[{ type: "url", label: "decontemporary.org", href: "https://www.decontemporary.org/artist-in-residence-program" }]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Architecture */}
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-semibold mb-6 pb-2 border-b border-white/10 w-full sm:w-auto sm:inline-flex">
                <span className="text-lg">🏛️</span> Architecture & Engineering
              </div>
              <div className="grid grid-cols-1 gap-4 h-full">
                <ContactCard
                  name="ACE Mentor Program of Delaware"
                  tags={["Arch", "Eng", "Scholarships"]}
                  desc="Works with high schoolers across New Castle County through field trips, professional spotlights, and a full-season project. Awarded $30,000+ in student scholarships in 2024. This is the one to call first."
                  links={[{ type: "url", label: "acementordelaware.org", href: "https://acementordelaware.org" }]}
                />
              </div>
            </div>

            {/* Leadership */}
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-semibold mb-6 pb-2 border-b border-white/10 w-full sm:w-auto sm:inline-flex">
                <span className="text-lg">🚀</span> Leadership & All Gifts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[calc(100%-48px)]">
                <ContactCard
                  name="Delaware Youth Leadership Network"
                  tags={["Leadership", "Networking"]}
                  desc="A 9-month program with speakers, mentorship, and skill-building. Monthly meetings in New Castle County. Open to rising juniors with a 3.0+ GPA."
                  links={[{ type: "url", label: "coons.senate.gov", href: "https://www.coons.senate.gov/student-community-and-leadership-opportunities" }]}
                />
                <ContactCard
                  name="Volunteer Delaware"
                  tags={["Community", "All Ages"]}
                  desc="Delaware's official statewide volunteer platform. Find opportunities by gift area, location, and time commitment. Log hours. Make your impact visible."
                  links={[{ type: "url", label: "volunteer.delaware.gov", href: "https://volunteer.delaware.gov" }]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Actions */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-warm mb-3 [font-family:var(--font-playfair)]">Serve Your Block</h3>
            <p className="text-light-text text-sm sm:text-base mb-6">You don&apos;t have to leave New Castle to change the world. Start here.</p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: "📈", text: <><strong className="text-warm">Finance students:</strong> Host a free "Money Basics" workshop at VCF or the New Castle Public Library. Partner with JA Delaware.</> },
              { icon: "🎨", text: <><strong className="text-warm">Artists:</strong> Volunteer a mural, logo, or design project for a local church, school, or community organization.</> },
              { icon: "🏛️", text: <><strong className="text-warm">Architecture students:</strong> Connect with Habitat for Humanity of New Castle County — they place youth volunteers on real housing builds.</> },
              { icon: "🎵", text: <><strong className="text-warm">Musicians:</strong> Perform at nursing homes, youth programs, or community events. Bring the atmosphere.</> },
              { icon: "💻", text: <><strong className="text-warm">Tech students:</strong> Build a free website or tool for a local nonprofit or small church ministry. Real project. Real impact.</> },
              { icon: "🕯️", text: <><strong className="text-warm">Every gift:</strong> The first step is <em>showing up</em>. Register at <a href="https://volunteer.delaware.gov" target="_blank" className="text-faith hover:underline">volunteer.delaware.gov</a> this week.</> }
            ].map((action, i) => (
              <div key={i} className="glass-card flex gap-4 items-start rounded-2xl p-4 sm:p-5 hover:border-gold/20 transition-all group">
                <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{action.icon}</span>
                <p className="text-sm sm:text-[15px] text-light-text leading-relaxed">{action.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-16 px-6 border-t border-card-border/50 bg-black/20">
        <p className="text-gold font-semibold font-serif text-lg mb-2 [font-family:var(--font-playfair)] tracking-wide">
          ELVTE × Victory Christian Fellowship
        </p>
        <p className="text-light-text/80 text-sm mb-8">New Castle, Delaware · March 2026</p>

        <div className="max-w-md mx-auto">
          <p className="text-warm/90 font-medium leading-relaxed italic mb-3">
            &quot;Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&quot;
          </p>
          <p className="text-gold/80 text-xs font-semibold tracking-[0.1em] uppercase">Matthew 5:16</p>
        </div>
      </footer>
    </main>
  );
}
