import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-screen flex items-center justify-between p-4">
      <Link href={"/"} className="text-2xl font-bold">
        Brainwave.io
      </Link>
      <nav>
        <ul className="flex items-center gap-x-10">
          {navLinks.map((link) => (
            <li key={link.title} className="font-bold text-sm hover:underline">
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="font-bold">Buy now - Starting at $99</Button>
    </header>
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
