"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Github, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes, useState } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    "Next.js", "React", "React-Native", "Node.js", "Python", "Astro", "TensorFlow"
  ];

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-screen-lg mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <ProfileImage 
            className="hidden lg:block flex-shrink-0" 
            isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />

          {/* Content */}
          <div className="flex-1 lg:text-left">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 border-0 text-blue-700 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                <Sparkles className="w-3 h-3 mr-1" />
                About Me
              </Badge>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
            </div>

            <ProfileImage 
              className="mb-8 block lg:hidden" 
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Passionate about building software that{" "}
              <span className="">
                scales
                
              </span>
              .
            </h2>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed"> Driven by a passion for technology, I design and develop scalable web and mobile applications that solve real-world problems. My expertise lies in leveraging modern frameworks to deliver clean, efficient, and future-ready solutions.
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="https://github.com/mukadaaazzzz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub profile"
                className="group"
              >
                <Button className="rounded-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Github className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  View GitHub
                  <ExternalLink className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => (
  <div 
    className={cn(
      "relative w-56 h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0 cursor-pointer group",
      className
    )} 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    {...props}
  >
    {/* Animated border rings */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-30 animate-spin-slow"></div>
    
    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-1">
      <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-2xl">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image 
            src="/mukadaz.jpeg" 
            alt="Portrait of Mukadaz - Full-stack Developer" 
            className={cn(
              "object-cover transition-all duration-700",
              isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
            )}
            fill
            priority
          />
          
          {/* Overlay gradient on hover */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}></div>
        </div>
      </div>
    </div>

    {/* Floating particles */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
    <div className="absolute top-1/3 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-300"></div>
  </div>
);

export default About;