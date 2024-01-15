'use client';
import Link from 'next/link';
import type { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/common/routes';

export const metadata: Metadata = {
  title: '404 Page not found',
};

export default function NotFound() {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };

  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <h2 className="text-2xl">Извините, страница не найдена </h2>

      <p>404 Page not found</p>

      <div className="flex gap-2">
        <button
          onClick={clickHandler}
          className="text-color-dark--light hover:text-color-black"
        >
          назад
        </button>
        <Link
          href={AppRoutes.HOME}
          className="text-color-dark hover:text-color-black"
        >
          на главную
        </Link>
      </div>
    </div>
  );
}
