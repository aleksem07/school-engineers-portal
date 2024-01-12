"use client";
import { Logo } from "@/components/logo/logo";
import { Footer } from "@/components/footer/footer";
import { NAV_LINKS } from "@/common/nav-links";
import Link from "next/link";
import { setPath } from "@/redux/pathSlice/pathSlice";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const currentPath = useAppSelector((state: RootState) => state.path.value);

  return (
    <nav className="grid grid-rows-dashboard w-3/12 min-w-40 shadow-2xl height-screen">
      <Logo className={"border-b-2 p-4 flex justify-start"} />
      <div className="flex flex-col px-2 py-4">
        {NAV_LINKS.map(({ name, path, icon }) => (
          <Link
            href={path}
            onClick={() => dispatch(setPath(path))}
            className={`flex justify-between gap-2 p-2 my-1 transition-all duration-300 rounded-lg ${
              currentPath === path
                ? "bg-gray-200 hover:bg-gray-200"
                : "hover:bg-gray-100 hover:text-gray-500"
            }`}
            key={name}
          >
            <p>{name}</p>
            <p>{icon}</p>
          </Link>
        ))}
      </div>

      <Footer className="border-t-2" />
    </nav>
  );
};