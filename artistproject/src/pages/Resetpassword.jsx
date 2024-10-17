import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Resetpassword(){
  const path = import.meta.env.VITE_DATA_HOST_API;
  const api = path + "/verifyResetUrl";
  const params= useParams();
 useEffect(async()=>{
    const result=await axios.get(`${api}`);
 },[])
    return(
        <div>
            <h1>hello</h1>
            {params.token}
        </div>

     )
}