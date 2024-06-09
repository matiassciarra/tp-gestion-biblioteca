import { useParams } from "react-router-dom"
function Libro() {
  const {id} = useParams()
  return (
    <div> Libro {id}</div>
  )
}

export default Libro