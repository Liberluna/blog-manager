import { useState, useEffect } from "preact/hooks";
import { Octokit } from "https://esm.sh/@octokit/core"

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
      document.body.innerHTML = `<div>
        <span>${e.name}:</span>
        <span>${e.message}</span>
      </div>
      <div>
        ${e.stack.replaceAll("\n","<br>")}
      </div>`
    }
  },[])
  
  return (
    <div>
      home dash
      <div>{ userData }</div>
    </div>
  );
}
