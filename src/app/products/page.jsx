import Link from "next/link";

 async function getPeoducts() {
  const res = await fetch('https://dummyjson.com/products');
if (!res.ok){
   throw new Error ("Couldn't get products from dummy json");
}
return res.json();
}
const  page = async () => {
  const {products} = await getPeoducts();
  console.log(products);
  
  return (<div>{products.map(product =>(
    <div key={product.id}>
      <Link href={`products/${product.id}`}>{product.title}</Link>
    </div>
  ))}</div>)
}

export default page
