import Head from "next/head";
import Link from 'next/link'


const Layout = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <Link href="/debank">Debank</Link>
        <Link href="/todo">Todo</Link>
      </header>
      <main className='main'>
        { children }
      </main>
    </div>
  );
}

export default Layout;