"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight, Play, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
  const project = {
    title: "Bioncolab",
    description: "A cutting-edge collaborative research platform with real-time collaboration, AI-powered insights, and modern architecture. Built with Next.js and Supabase for seamless data management.",
    image: "/lll.png",
    technologies: ["Next.js", "Supabase", "Gemini API", "Node.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://bioncolab.netlify.app",
    featured: true,
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-blue-50 border-blue-200 text-blue-700">
            <Sparkles className="size-4 mr-2" />
            Featured Project
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Project Showcase
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A deep dive into my flagship project showcasing modern web development
          </p>
        </motion.div>

        {/* Centered Project Card */}
        <motion.div 
          className="group relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5">
                  <Star className="size-4 fill-current" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Image Section */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Quick action overlay */}
              {project.liveUrl && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="lg"
                    className="bg-white/95 text-gray-900 hover:bg-white backdrop-blur-sm shadow-lg px-6"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="size-5 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center justify-center size-10 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-200 group-hover:scale-110"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ArrowUpRight className="size-5 text-gray-600" />
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="px-3 py-1.5 bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {project.liveUrl && (
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-3" 
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 size-5" />
                    View Live Project
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" size="lg" className="rounded-lg border-gray-300 px-8" asChild>
            <a href="https://github.com/Mukadaaazzzz" target="_blank" rel="noopener noreferrer">
              View more on GitHub
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;