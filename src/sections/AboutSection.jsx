import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Briefcase,
  TrendingUp,
  HardHat,
  Gem,
  CheckCircle2,
  Building,
} from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-primary text-white font-display overflow-hidden">
      {/* HERO SECTION: THE CORPORATE MANDATE */}
      <section className="relative min-h-[60vh] flex items-center pt-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <ShieldCheck className="text-secondary w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Registered & Certified: CS092120425
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Driving Excellence Through{" "}
              <span className="text-secondary">Strategic Synergy</span>
            </h1>
            <p className="text-lg text-white/70 border-l-2 border-secondary pl-6 mb-8 max-w-xl">
              Incorporated under the Companies Act, 2019 (Act 992), AG-LINC
              Holdings & Associates Ltd serves as the foundational backbone for
              high-impact industrial operations across West Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square bg-gradient-to-tr from-secondary/20 to-transparent rounded-2xl p-8 border border-white/5 backdrop-blur-3xl">
              <Building className="w-full h-full text-secondary opacity-20 absolute -bottom-10 -right-10" />
              <div className="relative z-10 space-y-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-secondary font-bold uppercase tracking-tighter text-sm mb-2">
                    Primary Mandate
                  </h3>
                  <p className="text-white font-light italic">
                    "To provide world-class managerial, administrative and
                    financial services to our global partners."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-2xl font-bold text-secondary">2025</p>
                    <p className="text-[10px] uppercase opacity-50">
                      Incorporated
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <p className="text-2xl font-bold text-secondary">Act 992</p>
                    <p className="text-[10px] uppercase opacity-50">
                      Legal Compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SPECIALIZATIONS */}
      <section className="py-24 px-6 lg:px-24 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Industrial Ecosystem
            </h2>
            <p className="text-white/50">
              Our authorized operations span critical infrastructure and
              resource sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 hover:border-secondary/50 transition-all duration-500 rounded-lg"
              >
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary transition-colors">
                  <sector.icon className="text-secondary group-hover:text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{sector.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP & CONSTITUTION */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Guided by Integrity
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold">Constitutional Governance</h4>
                  <p className="text-sm text-white/50">
                    Operated as a Private Company Limited by Shares under
                    Section 18 of the Act[cite: 37, 41].
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold">Strategic Oversight</h4>
                  <p className="text-sm text-white/50">
                    Led by high-capacity directors focused on sustainable growth
                    and regional development[cite: 33, 35].
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold">Financial Prudence</h4>
                  <p className="text-sm text-white/50">
                    Comprehensive financial advisory and debt management support
                    for subsidiaries[cite: 16].
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-8 border border-white/10 bg-white/5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={120} />
              </div>
              <h3 className="text-secondary font-bold mb-4 uppercase tracking-widest text-xs">
                Headquarters
              </h3>
              <address className="not-italic text-lg space-y-2">
                <p className="font-bold">Lincoln Avenue, Agbogba</p>
                <p className="text-white/60">House No. CB 515, Accra</p>
                <p className="text-white/60 text-sm">
                  Digital Address: GE-087-4830
                </p>
                <p className="text-secondary text-sm mt-4">
                  Greater Accra Region, Ghana
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const sectors = [
  {
    title: "Resource Extraction",
    icon: Gem,
    desc: "Licensed for the mining of Gold, Bauxite, and Manganese, including the purchase, sale, and global export of precious minerals[cite: 16].",
  },
  {
    title: "Civil Engineering",
    icon: HardHat,
    desc: "Specializing in building and road construction, electrical works, and large-scale structural engineering projects[cite: 16].",
  },
  {
    title: "Management Services",
    icon: Briefcase,
    desc: "Providing holistic managerial and administrative support to Debtpro Ghana Ltd and Zeta International Ltd[cite: 16].",
  },
  {
    title: "Financial Advisory",
    icon: TrendingUp,
    desc: "Strategic financial services and investment development to drive corporate solvency and regional expansion[cite: 16].",
  },
  {
    title: "Real Estate Development",
    icon: Building,
    desc: "Developing modern residential and commercial infrastructures across Ghana's growing urban centers[cite: 16].",
  },
  {
    title: "International Trade",
    icon: Globe,
    desc: "Managing a robust import and export network for general goods and precious commodities[cite: 16].",
  },
];

export default AboutPage;
