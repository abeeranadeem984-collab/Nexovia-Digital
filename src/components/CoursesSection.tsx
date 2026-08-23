import React, { useState } from 'react';
import { GraduationCap, Clock, Award, CheckCircle2, Sparkles, Search, Monitor, ShieldCheck, Layers, PlayCircle, Users, MessageSquare } from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/agencyData';

interface CoursesSectionProps {
  onEnrollCourse?: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnrollCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Marketing', 'Design', 'Development', 'Freelancing', 'E-Commerce', 'Content'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses-section" className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span>Nexovia Digital Academy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Professional Digital Courses
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            Learn practical digital skills with structured, career-focused courses.
          </p>

          {/* PAYMENT & ENROLLMENT NOTICE BANNER */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-semibold max-w-2xl text-left sm:text-center mt-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>Payment is handled manually via WhatsApp. Contact us for payment details and enrollment confirmation.</span>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* COURSES GRID */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 font-medium">No courses found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400 underline"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-gray-50/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/80 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between h-full backdrop-blur-sm"
              >
                <div>
                  {/* COURSE IMAGE & BADGES */}
                  <div className="relative aspect-16/9 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>

                    {/* TOP BADGES */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm">
                        Duration: 1 Month
                      </span>
                      <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                        <Monitor className="w-3 h-3" />
                        <span>Mode: Online</span>
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>Certified</span>
                      </span>
                    </div>

                    {/* LEVEL OVERLAY */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20 text-[11px]">
                        Level: {course.level}
                      </span>
                      <span className="text-amber-300 text-[11px] font-extrabold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>By {course.instructor}</span>
                      </span>
                    </div>
                  </div>

                  {/* COURSE CONTENT */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {course.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 font-sans">
                      {course.description}
                    </p>

                    {/* MANDATORY FEATURES HIGHLIGHTS */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-800 space-y-2">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Course Includes</span>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Certificate provided upon successful completion</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PlayCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>Lifetime access to course recordings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Practical assignments & real project work</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>Direct instructor support via WhatsApp</span>
                        </div>
                      </div>
                    </div>

                    {/* PRICE DISPLAY */}
                    <div className="pt-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Course Fee:</span>
                      <div className="text-right">
                        {course.pricePKR && (
                          <div className="flex items-baseline gap-2">
                            <span className="font-heading text-xl font-black text-blue-600 dark:text-blue-400">
                              {course.pricePKR}
                            </span>
                            {course.originalPricePKR && (
                              <span className="text-xs text-gray-400 line-through font-semibold">
                                {course.originalPricePKR}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ENROLL NOW ON WHATSAPP BUTTON */}
                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={`https://wa.me/923476811866?text=${encodeURIComponent(
                      `Hello Nexovia Digital, I want to enroll in ${course.name}. Please send me the payment details and course information.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enroll in ${course.name} on WhatsApp`}
                    title={`Enroll in ${course.name} on WhatsApp`}
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0 transition-transform group-hover/btn:scale-110" />
                    <span>Enroll Now on WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 font-medium">
                    Direct enrollment & manual payment confirmation via WhatsApp
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
