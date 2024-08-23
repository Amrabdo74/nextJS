import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My First Next.js Project</title>
        <meta name="description" content="Welcome to my first Next.js project. Explore our product offerings and learn more about what we do." />
        <meta property="og:title" content="Home | My First Next.js Project" />
        <meta property="og:description" content="Welcome to my first Next.js project. Explore our product offerings and learn more about what we do." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | My First Next.js Project" />
        <meta name="twitter:description" content="Welcome to my first Next.js project. Explore our product offerings and learn more about what we do." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
      </Head>
      <div className="landing">
        <h1>It’s my first Next.js project</h1>
        <Link href="/products">Go to all products</Link>
      </div>
    </>
  );
}
