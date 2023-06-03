import { useState, useEffect } from "preact/hooks";

interface Props {

}

export default function Counter(props: Props) {
  
  useEffect(async ()=>{
    function re(){
      location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=7ad00edcde8a0a74d3e6"
    }
    const params = new URLSearchParams(location.search)
    
    if(!params.has("code"))
      re()
   
    const res = await fetch(`/api/auth/${params.get("code")}`)
    const json = await res.json()
    
    if(json.error === "error")
      re()
    alert(JSON.stringify(json).token)
  },[])
  
  return (
    <div>
      home dash
    </div>
  );
}
