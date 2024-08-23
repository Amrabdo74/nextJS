import Image from "next/image";
import Head from "next/head";

async function singleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Couldn't get products from dummy json");
  }
  return res.json();
}

const Page = async ({ params }) => {
  const data = await singleProduct(params.id);
  
  return (
    <div>
      {/* SEO and Open Graph Meta Tags */}
      <Head>
        <title>{data.title} | YourSiteName</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.images[0]} />
        <meta property="og:url" content={`https://yourdomain.com/products/${data.id}`} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.images[0]} />
      </Head>

      {/* Product Details */}
      <div key={data.id}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <Image width={120} height={120} src={data.images[0]} alt={data.title} />
      </div>
    </div>
  );
};

export default Page;
