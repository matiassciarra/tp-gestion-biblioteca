import { useParams } from "react-router-dom"

export const UnGenero =()=>{
    const {nombreGenero} = useParams()
    return(
        <>
            <p>nombre {nombreGenero}</p>
        </>
    )
}