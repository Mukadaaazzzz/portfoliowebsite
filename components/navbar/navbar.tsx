import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedInLogo } from "../icons";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-14 bg-background/80 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full shadow-sm hover:shadow-md transition-shadow">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        {/* Name Logo with black text */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-black dark:text-white font-mono tracking-tighter">
            Mukadaz
            <span className="text-blue-400 ml-1 animate-pulse"></span>
          </span>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/mukadaz-taofeeq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none hover:bg-blue-50 dark:hover:bg-blue-900/30"
              size="icon"
            >
              <LinkedInLogo />
            </Button>
          </a>
          <a
            href="https://github.com/mukadaaazzzz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Button
              variant="outline"
              className="rounded-full shadow-none hover:bg-gray-50 dark:hover:bg-gray-800"
              size="icon"
            >
              <GithubLogo className="h-5 w-5" />
            </Button>
          </a>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;