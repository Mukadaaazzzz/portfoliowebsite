"use client";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface LinkItem {
  label: string;
  url: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: () => React.ReactNode;
  technologies: string[];
  links?: LinkItem[];
  index: number;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  links = [],
  index
}: ExperienceItemProps) => {
  return (
    <motion.div 
      className="relative mb-12 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Content card */}
      <div className="relative flex gap-6 group">
        {/* Timeline dot */}
        <div className="flex-shrink-0 relative z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-blue-200 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 font-medium">{company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-700 mb-5 leading-relaxed">
            {description()}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline"
                className="px-3 py-1 bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 rounded-full font-medium text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
              {links.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 rounded-lg transition-colors duration-200 text-sm font-medium border border-blue-200/50"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    
    {
      title: "Machine Learning Engineer & Full Stack Developer",
      company: "Tinpear LLC",
      period: "June 2025 - Present",
      description: () => (
        <>
          Leading the development of an innovative e-learning platform at{' '}
          <span className="font-semibold text-blue-600">Tinpear</span>
          , designed and taught comprehensive Machine Learning and AI courses, and implemented advanced ML algorithms for personalized learning experiences.
        </>
      ),
      technologies: [
        "React", "Next.js", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Tailwind CSS", "Typescript CSS"
      ],
      links: [
        { label: "Live Platform", url: "https://tinpear.org" },
      ],
    },
    {
      title: "Web/Mobile Developer",
      company: "Holive Services Inc.",
      period: "January 2025 - June 2025",
      description: () => (
        <>
          Architected and developed a comprehensive Fintech platform with both web and mobile applications at{' '}
          <span className="font-semibold text-blue-600">Holive Services Inc.</span>
          , mentored junior developers, and implemented enterprise-grade solutions.
        </>
      ),
      technologies: [
        "Next.js", "React", "React Native", "Node.js", "Tailwind CSS", "Javascript",
        "Supabase", "PostgreSQL", "Paystack API", "Jest", "GitHub Actions"
      ],
      links: [
        { label: "Live Site", url: "https://holiveservices.com.ng" },
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Mihaela Coaching Hub",
      period: "2024 - 2025",
      description: () => (
        <>
          Developed and maintained a modern coaching platform at{' '}
          <span className="font-semibold text-blue-600">Mihaela Coaching Hub</span>
          , implementing responsive designs with TypeScript for enhanced code reliability.
        </>
      ),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      links: [
        { label: "Live Site", url: "https://mihaelaprundu.com" },
      ],
    },
    {
      title: "Frontend Developer",
      company: "Mukadaz Labs",
      period: "2023",
      description: () => (
        <>
          Designed and developed the official website for{' '}
          <span className="font-semibold text-blue-600">Mukadaz Labs</span>
          , a consulting firm specializing in IT strategy and digital transformation. 
          Created a modern, performant website with excellent SEO and responsive design 
          to showcase the company's services and expertise.
        </>
      ),
      technologies: [
        "Astro", "Tailwind CSS", "JavaScript", "Responsive Design", "SEO Optimization"
      ],
      links: [
        { label: "Visit Website", url: "https://mukadazlabs.com.ng" },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 border-0 text-blue-700 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
              <Sparkles className="w-3 h-3 mr-1" />
              Work Experience
            </Badge>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and the innovative solutions I've built
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-100"></div>
          
          {/* Experience items */}
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;