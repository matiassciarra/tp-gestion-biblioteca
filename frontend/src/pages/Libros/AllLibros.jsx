import { useLoaderData } from "react-router-dom"
async function AllLibros() {
    const data = await useLoaderData();
    console.log(data);
  return (
    <div>AllLibros</div>
  )
}

export default AllLibros