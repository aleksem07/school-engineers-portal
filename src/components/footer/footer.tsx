import GitHubIcon from '@/app/UI/github-icon';
import Link from 'next/link'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`flex flex-col gap-4 items-center justify-center p-4 ${className}`}>
      <Link href="https://github.com/aleksem07" target='_blank'>
        <GitHubIcon className="hover:text-gray-500" />
      </Link>
      <p className="text-sm items-center">2024</p>
    </footer>
  );
};
