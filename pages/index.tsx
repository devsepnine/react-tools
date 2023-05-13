import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div>main page</div>
      <Link href={'/tools/color'}>color </Link>
      <Link href="/tools/gps">gps </Link>
    </>
  );
};

export default Home;
