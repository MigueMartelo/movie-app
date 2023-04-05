import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <div>
    <header className='bg-blue-200 py-4'>
      <Link href='/'>
        <h1 className='text-4xl font-bold text-center'>Movie Inc</h1>
      </Link>
    </header>
    <main className='max-w-5xl mx-auto'>{children}</main>
  </div>
);
export default Layout;
