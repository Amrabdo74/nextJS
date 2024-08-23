import Image from "next/image";

// Function to fetch product data
async function singleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Couldn't get products from dummy json");
  }
  return res.json();
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const data = await singleProduct(params.id);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.images[0],
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
  };
}

// Page component
const Page = async ({ params }) => {
  const data = await singleProduct(params.id);
  
  return (
    <div>
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
