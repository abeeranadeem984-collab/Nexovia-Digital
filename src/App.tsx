import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  Search,
  Monitor,
  ShieldCheck,
  Layers,
  MessageSquare,
  Star,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const COURSES_DATA: any[] = [];

interface CoursesSectionProps {
  onEnrollCourse?: (course: any) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onEnrollCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'E-Commerce', 'Development', 'Design', 'Content', 'Freelancing'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses-section" className="py-20 bg-white dark:bg-[#080b11] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Master the skills needed to succeed in the digital agency ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
