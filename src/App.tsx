import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PhoneMissed, 
  Clock, 
  UserMinus, 
  PhoneIncoming, 
  BrainCircuit, 
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Download,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { EmailModal } from './components/EmailModal';

export default function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToWorkflow = () => {
    document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Do people actually trust talking to AI?",
      answer: "Yes. Modern voice AI is conversational, empathetic, and indistinguishable from a helpful human assistant. It doesn't sound robotic; it listens, pauses, and responds naturally, focusing entirely on getting the caller's needs met immediately."
    },
    {
      question: "What if they ask a complex real estate question?",
      answer: "The assistant knows its boundaries. If a caller asks a highly specific question about a property's history or a complex negotiation detail, the AI gracefully takes a message, reassures the caller, and lets them know you will follow up personally."
    },
    {
      question: "Is this really free to install?",
      answer: "Yes. I am offering a free 9-minute call to help you install and customize this specific workflow for your business at no cost, to prove its value to your operations."
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium text-gray-500 tracking-wide uppercase">
          <span>Prepared Exclusively For</span>
          <span className="text-black font-semibold tracking-normal capitalize">David Kiernan • Compass</span>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* 1. Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Custom AI Workflow Ready
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Stop losing motivated buyers to voicemail while you're out at a showing.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              David, I noticed your recent listings (like the beautiful Sussex 2-story). I've built a custom AI Call Handling Workflow designed specifically to capture your after-hours leads, qualify buyers, and book showings 24/7.
            </p>

            <button 
              onClick={scrollToWorkflow}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10"
            >
              See Your Custom Workflow
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </section>

        {/* 2. Pain Points */}
        <section className="bg-white py-24 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Real Estate Reality</h2>
              <p className="text-gray-500 text-lg">Opportunities are lost in the margins of your schedule.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <PhoneMissed className="w-6 h-6 text-red-500" />,
                  title: "The Showing Dilemma",
                  desc: "Letting new leads go to voicemail while you're giving a private tour or meeting with clients."
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-500" />,
                  title: "After-Hours Misses",
                  desc: "Missing crucial calls on weekends or late evenings when families are actively discussing real estate."
                },
                {
                  icon: <UserMinus className="w-6 h-6 text-red-500" />,
                  title: "The Speed-to-Lead Trap",
                  desc: "Losing motivated buyers and sellers to the next agent simply because they answered the phone first."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Outcomes */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Intelligent Solution</h2>
            <p className="text-gray-500 text-lg">A seamless extension of your real estate business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <PhoneIncoming className="w-6 h-6 text-emerald-600" />,
                title: "Instant Response",
                desc: "Answers every single call instantly, 24/7, sounding indistinguishable from a real person."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-emerald-600" />,
                title: "Smart Qualification",
                desc: "Qualifies buyers and sellers naturally based on your specific criteria before escalating."
              },
              {
                icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
                title: "Calendar Integration",
                desc: "Books showings and listing appointments straight into your calendar effortlessly."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Comparison */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">The Cost of Missed Opportunities</h2>
              <p className="text-gray-400 text-lg">Traditional hiring vs. the modern AI approach.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Human */}
              <div className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 pb-6 border-b border-gray-700">Traditional Human Receptionist</h3>
                <ul className="space-y-4">
                  {[
                    "Costs $40,000+ per year",
                    "Limited to 9-to-5 operating hours",
                    "Can only handle one call at a time",
                    "Takes sick days and vacations",
                    "Requires ongoing training & management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <XCircle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-gray-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    My Offer
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-6 pb-6 border-b border-gray-700">Custom AI Receptionist</h3>
                <ul className="space-y-4">
                  {[
                    "$0 Salary / Free Installation",
                    "Available 24/7/365, never sleeps",
                    "Handles infinite simultaneous calls",
                    "Zero sick days or downtime",
                    "Pre-trained on your specific workflow"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-100 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Workflow Delivery */}
        <section id="workflow" className="py-24 max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[2.5rem] bg-gray-50 border border-gray-200 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-black rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-8">
                <Download className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Custom Workflow</h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                I've mapped out the exact architecture for your business. It includes the complete AI Assistant build with Retell AI, two n8n workflows (Appointment Scheduling & Call Summary), your installation guide, checklist, and setup diagram.
              </p>

              <a 
                href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg w-full md:w-auto"
              >
                Access Workflow
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* 6. FAQ */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-2xl overflow-hidden transition-colors ${openFaq === index ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's get this running for you, David.</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Reply to my previous message or book a quick, free 9-minute call. I'll personally help you install and customize this for your business at no cost.
          </p>
          
          <button 
            onClick={() => setIsEmailModalOpen(true)}
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10"
          >
            Email Ankit
          </button>
        </section>
      </main>

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
        email="ankit@agentbydesign.in" 
      />
    </div>
  );
}

function ExternalLinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
