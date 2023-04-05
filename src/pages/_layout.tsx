import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div>
    <header className='bg-gray-500 py-4'>
      <div className='flex justify-between max-w-5xl mx-auto'>
        <Link href='/'>
          <h1 className='text-4xl font-bold text-center text-white'>
            Movie Inc
          </h1>
        </Link>
        <Link href='/favorites'>
          <h2 className='text-2xl font-medium text-white hover:underline'>
            Favorites
          </h2>
        </Link>
      </div>
    </header>
    <main className='max-w-5xl mx-auto'>{children}</main>
  </div>
);
export default Layout;
