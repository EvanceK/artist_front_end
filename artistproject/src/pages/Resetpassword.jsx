import { useParams } from "react-router-dom"

export default function Resetpassword(){

  const params= useParams();
 
    return(
        <div>
            <h1>hello</h1>
            {params.token}
        </div>

     )
}