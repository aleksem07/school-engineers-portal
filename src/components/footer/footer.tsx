import { Contacts } from "@/components/contacts/contacts";

const currentYear = new Date().getFullYear();

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`flex flex-col gap-4 items-center justify-center p-4 mobile:px-1 ${
        className || ""
      }`}
    >
      <Contacts className="mobile:flex-col" />

      <p className="text-xs items-center mobile:hidden">
        aleksem07 © {currentYear}
      </p>
    </footer>
  );
};
