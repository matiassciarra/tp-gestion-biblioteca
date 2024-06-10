import { useParams } from "react-router-dom"

export const OneAutor = () => {
    const {id} = useParams();
  return (
    <div>oneAutor {id}</div>
  )
}
