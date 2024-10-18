import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-8">
      <div className="w-full mx-auto max-w-6xl flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          Brainwave.io
        </Link>
        <nav>
          <ul className="flex items-center gap-x-6">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="font-bold text-sm hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

const links = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/tnc",
  },
  {
    title: "Support",
    href: "/support",
  },
];
