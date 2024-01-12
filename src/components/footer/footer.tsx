import Link from "next/link";
import { CONTACTS } from "@/common/contacts";

const currentYear = new Date().getFullYear();

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`flex flex-col gap-4 items-center justify-center p-4 ${className}`}
    >
      <div className="flex gap-4">
        {CONTACTS.map(({ name, Icon, link }) => (
          <Link href={link} target="_blank" key={name}>
            <Icon className="hover:text-gray-500" />
          </Link>
        ))}
      </div>

      <p className="text-xs items-center">aleksem07 © {currentYear}</p>
    </footer>
  );
};
