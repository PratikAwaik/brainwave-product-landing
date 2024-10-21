import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="w-screen items-center justify-between p-4 hidden md:flex">
        <Link href={"/"} className="text-2xl font-bold">
          Brainwave.io
        </Link>
        <nav>
          <ul className="flex items-center gap-x-10">
            {navLinks.map((link) => (
              <li
                key={link.title}
                className="font-bold text-sm hover:underline"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="font-bold">Buy now - Starting at $99</Button>
      </header>
      <header className="w-screen flex items-center justify-end p-4 relative md:hidden h-[72px]">
        <input
          type="checkbox"
          id="menu-toggle"
          name="menu-toggle"
          className="peer hidden"
        />
        <label htmlFor="menu-toggle" className="cursor-pointer block">
          <Menu className="w-6 h-6" />
        </label>

        <div className="peer-checked:flex flex-col gap-y-10 w-screen h-screen z-50 absolute top-0 -right-full transition-all peer-checked:right-0 p-4 items-center justify-start bg-white border shadow-sm rounded-md">
          <div className="w-full flex items-center justify-end mt-2 mr-2">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <X className="w-6 h-6" />
            </label>
          </div>
          <Link href={"/"} className="text-2xl font-bold">
            Brainwave.io
          </Link>
          <nav>
            <ul className="flex flex-col items-start gap-y-6">
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className="font-bold text-sm hover:underline"
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="font-bold">Buy now - Starting at $99</Button>
        </div>
      </header>
    </>
  );
};

const navLinks = [
  {
    title: "Demos",
    href: "/demos",
  },
  {
    title: "Pages",
    href: "/pages",
  },
  {
    title: "Support",
    href: "/support",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
