import { CONTACTS } from '@/common/contacts';
import Link from 'next/link';

export const Contacts = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`flex items-center gap-4 ${className || ''}`}>
        {CONTACTS.map(({ name, Icon, link }) => (
          <Link href={link} target="_blank" key={name}>
            <Icon className="hover:text-color-dark--light transition-all duration-300" />
          </Link>
        ))}
      </div>
    </>
  );
};
