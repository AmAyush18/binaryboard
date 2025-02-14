import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Laptop2Icon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <Laptop2Icon className="size-8 text-sage" />
          <span className="bg-gradient-to-r from-sage to-mist bg-clip-text text-transparent">
            BinaryBoard
          </span>
        </Link>

        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
