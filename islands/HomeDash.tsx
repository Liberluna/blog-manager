import { useState, useEffect } from "preact/hooks";
import { Octokit } from "octokit"

interface Props {

}

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  
  useEffect(()=>{
    try{
      const token = localStorage.getItem("gh-token")
      const window.octokit = new Octokit({
        auth: token,
      })
      alert("inited octokit!")
    }catch(e){
      document.body.innerHTML += `<div style="position:fixed;background-color:#ddd"><div>
        <span>${e.name}:</span>
        <span>${e.message}</span>
      </div>
      <div>
        ${e.stack.replaceAll("\n","<br>")}
      </div></div>`
      throw e
    }
  },[])
  
  return (
    <div>
      <a>新しい投稿を作成する</a>
    </div>
  );
}
