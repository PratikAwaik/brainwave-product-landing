import { Button } from "@/components/ui/button";
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
      <header className="w-screen flex items-center justify-end p-4 relative md:hidden">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="cursor-pointer block">
          <button>☰</button>
        </label>
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
