import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Link as LinkIcon } from "lucide-react";

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
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  links = [],
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description()}</p>

        {/* Divider and Links */}
        {links.length > 0 && (
          <> 
            <div className="border-t border-muted mt-4 mb-2" />
            <div className="flex flex-wrap gap-4">
              {links.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <LinkIcon className="size-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </>
        )}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Senior Full Stack Developer",
      company: "Holive Services Inc.",
      period: "2025 - Present",
      description: () => (
        <>
          Led the development of a SaaS platform with enterprise-scale web technologies at{' '}
          
            Holive Services Inc.
          
          , mentored junior developers, and implemented best practices for code quality and performance optimization.
        </>
      ),
      technologies: [
        "Nextjs",
        "React",
        "Tailwind",
        "Supabase",
        "PostgreSQL",
        "Paystack API",
        "Jest",
        "GitHub Actions (CI/CD)",
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
          Developed and maintained the brand’s website at{' '}
         
            Mihaela Coaching Hub
          , implemented responsive designs, and integrated third-party APIs for enhanced functionality.
        </>
      ),
      technologies: ["Nextjs", "React", "Typescript", "Tailwind", "PostgreSQL"],
      links: [
        { label: "Live Site", url: "https://mihaelaprundu.com" },
      ],
    },
    {
      title: "Frontend Developer",
      company: "Yemidyn Fashion",
      period: "2023 - 2024",
      description: () => (
        <>
          Created responsive and interactive user interfaces for an eCommerce platform at{' '}
          
            Yemidyn Fashion
        
          , collaborated with designers, and optimized application performance.
        </>
      ),
      technologies: ["React", "JavaScript", "Material UI", "Jest"],
      links: [
        { label: "Live Site", url: "https://yemidyn.com" },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
