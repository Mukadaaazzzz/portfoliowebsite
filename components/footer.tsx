import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LinkedInLogo, GithubLogo, XLogo } from "./icons";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Taofeeq Mukadaz.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://github.com/Mukadaaazzzz" target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/MukadazT" target="_blank">
              <XLogo className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/mukadaz-taofeeq" target="_blank">
              <LinkedInLogo className="h-5 w-5" />
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
