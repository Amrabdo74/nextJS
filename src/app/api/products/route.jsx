export async function GET() {
    const res = await fetch('https://dummyjson.com/products', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return Response.json(data.products)
  }