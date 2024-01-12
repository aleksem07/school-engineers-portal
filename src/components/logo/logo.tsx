import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`grid ${className}`}>
      <Link href="/" className={`text-2xl font-bold`}>
        SIP
      </Link>
      <p className="text-xs">school engineers portal</p>
    </div>
  );
};
