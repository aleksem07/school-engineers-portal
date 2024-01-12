import { Logo } from "@/components/logo/logo";
import { Footer } from "@/components/footer/footer";
import { NAV_LINKS } from "@/common/nav-links";
import Link from "next/link";

export const Dashboard = () => {
  return (
    <nav className="grid grid-rows-dashboard w-3/12 min-w-40 shadow-2xl height-screen">
      <Logo className={"border-b-2 p-4 flex justify-start"} />
      <div className="flex flex-col p-4">
        {NAV_LINKS.map(({ name, path, icon }) => (
          <Link
            href={path}
            className="p-2 my-2 hover:text-gray-500 hover:bg-gray-200"
            key={name}
          >
            {name}
          </Link>
        ))}
      </div>

      <Footer className="border-t-2 items-start" />
    </nav>
  );
};
