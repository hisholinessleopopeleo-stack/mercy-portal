
import React, { useState } from "react";
import { Heart, Church, HandHeart, Globe2, Mail, Phone, MessageSquare, User, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function App() {
  const [needOpen, setNeedOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleFakeSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Church className="w-6 h-6" />
            <span className="font-semibold">Bishop of Rome • Mercy Portal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mission" className="hover:text-slate-900">Mission</a>
            <a href="#request" className="hover:text-slate-900">Request Support</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setNeedOpen(true)} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-sm flex items-center gap-1">
              <HandHeart className="w-4 h-4" /> Need Help
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Let Love Lead — Draw Near, Be Heard, Find Help
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A welcoming doorway to the Bishop of Rome’s pastoral care: request assistance, share prayers, and walk with us in service to the poor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setNeedOpen(true)} className="px-5 py-3 rounded-2xl bg-slate-900 text-white flex items-center gap-2 shadow">
                <HandHeart className="w-5 h-5" /> Request Support
              </button>
              <button onClick={() => setPrayerOpen(true)} className="px-5 py-3 rounded-2xl border border-slate-300 flex items-center gap-2">
                <Heart className="w-5 h-5" /> Send a Prayer Intention
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Rooted in the Gospel and inspired by the call to <em>let love lead</em>, we create a simple pathway for anyone to be seen, known, and helped.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Stay close to us</h2>
          <form onSubmit={handleFakeSubmit} className="mt-4 grid sm:grid-cols-3 gap-3">
            <input className="border border-slate-300 rounded-xl px-4 py-3" placeholder="Your email" required />
            <input className="border border-slate-300 rounded-xl px-4 py-3" placeholder="City, Country (optional)" />
            <button className="px-5 py-3 rounded-2xl bg-slate-900 text-white flex items-center justify-center gap-2">
              {sent ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />} Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-slate-500">We never share your email. Unsubscribe anytime.</p>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Bishop of Rome Mercy Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
