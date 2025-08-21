import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full shadow-none"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-6 px-6">
        {/* Accessible title (hidden visually but available to screen readers) */}
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        
        {/* Your styled name logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-black dark:text-white font-mono tracking-tighter">
            Mukadaz
            <span className="text-blue-400 ml-1">_</span>
          </span>
        </div>
        
        {/* Vertical menu */}
        <NavMenu 
          orientation="vertical" 
          className="mt-12 space-y-4" 
        />
      </SheetContent>
    </Sheet>
  );
};