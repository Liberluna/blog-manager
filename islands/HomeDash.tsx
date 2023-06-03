import { useState, useEffect } from "preact/hooks";
import { Octokit } from "https://esm.sh/octokit"

interface Props {

}

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  
  useEffect(async ()=>{
    function re(){
      location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=7ad00edcde8a0a74d3e6"
    }
    const params = new URLSearchParams(location.search)
    
    if(!params.has("code")){
      re()
      return
    }
    const res = await fetch(`/api/auth/${params.get("code")}`)
    const json = await res.json()
    
    if(json.error === "error"){
      re()
      return
    }
    localStorage.setItem("gh-token", json.token)
    
    await (async()=>{
      const octokit = new Octokit({
        auth: json.token,
      })
      const res = await octokit.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      setUserData(res)
    })();
  },[])
  
  return (
    <div>
      home dash
      <div>{ userData }</div>
    </div>
  );
}
