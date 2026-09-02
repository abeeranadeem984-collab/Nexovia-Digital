import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Monitor,
  Layers,
  ShieldCheck,
  Search,
  GraduationCap,
  Award,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'services'>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Nexovia Digital</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={activeTab === 'home' ? 'text-indigo-400 font-semibold' : 'text-slate-400 hover:text-white'}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={activeTab === 'services' ? 'text-indigo-400 font-semibold' : 'text-slate-400 hover:text-white'}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={activeTab === 'courses' ? 'text-indigo-400 font-semibold' : 'text-slate-400 hover:text-white'}
            >
              Academy
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <>
          <header className="max-w-7xl mx-auto px-6 py-24 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm">
              <Sparkles className="w-4 h-4" /> Next-Gen Digital Solutions & Academy
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Empowering Brands & Training Digital Leaders
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Nexovia Digital delivers high-impact marketing, creative media solutions, and expert-led digital skills training.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('courses')}
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium text-white flex items-center gap-2 transition"
              >
                Explore Courses <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 font-medium text-slate-300 transition"
              >
                Our Agency Services
              </button>
            </div>
          </header>

          {/* Features Grid */}
          <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <Monitor className="w-8 h-8 text-indigo-400" />
              <h3 className="text-xl font-bold">Digital Marketing</h3>
              <p className="text-slate-400 text-sm">Data-driven marketing campaigns designed to scale client revenue and engagement.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <Layers className="w-8 h-8 text-indigo-400" />
              <h3 className="text-xl font-bold">Creative Media & Animation</h3>
              <p className="text-slate-400 text-sm">Custom visual design, video editing, and modern graphics tailored for brands.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
              <h3 className="text-xl font-bold">Nexovia Academy</h3>
              <p className="text-slate-400 text-sm">Hands-on practical programs designed to teach high-ticket freelancing skills.</p>
            </div>
          </section>
        </>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Agency Services</h2>
            <p className="text-slate-400">Comprehensive digital strategies built for modern business growth.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <ShieldCheck className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">Performance Marketing</h3>
              <p className="text-slate-400">Targeted ad sets, conversion tracking, and campaign optimization across Meta and Google ecosystems.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <Search className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">Brand Identity & Web Assets</h3>
              <p className="text-slate-400">Landing pages, design systems, and visual branding crafted for international market standards.</p>
            </div>
          </div>
        </section>
      )}

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Nexovia Academy Programs</h2>
            <p className="text-slate-400">Master real-world skills with practical project workflows.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['Social Media Marketing Masterclass', 'Digital Content Creation & Design', 'Freelancing & Client Acquisition'].map((course, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <Award className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-xl font-bold">{course}</h3>
                  <p className="text-slate-400 text-sm">Step-by-step training covering tools, templates, and career guidance.</p>
                </div>
                <button className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium text-white text-sm transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nexovia Digital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
