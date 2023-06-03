import { useState, useEffect } from "preact/hooks";
import { Octokit } from "https://esm.sh/octokit"

interface Props {

}

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  
  useEffect(()=>{
    try{
      const token = localStorage.getItem("gh-token")
      const octokit = new Octokit({
        auth: token,
      })
      alert("inited octokit!")
    }catch(e){
      alert("error")
    }
  },[])
  
  return (
    <div>
      home dash
      <div>{ userData }</div>
    </div>
  );
}
