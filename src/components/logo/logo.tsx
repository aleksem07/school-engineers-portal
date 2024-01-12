import Link from "next/link";
import { LogoIcon } from "@/app/UI/icons/logo-icon";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`grid grid-cols-logo gap-2 ${className}`}>
      <Link href="/" className={`text-2xl font-bold`}>
        <LogoIcon />
      </Link>
      <p className="text-xs max-w-1">school engineers portal</p>
    </div>
  );
};
