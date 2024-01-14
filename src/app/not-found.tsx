import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Page not found',
};

export default function NotFound() {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <h2 className="text-2xl">Извините, страница не найдена </h2>
      <p>404 Page not found</p>

      <Link href="/" className="text-color-dark--light">
        вернуться на главную
      </Link>
    </div>
  );
}
