import { useState, useEffect } from "preact/hooks";
import { Octokit } from "https://esm.sh/octokit"

interface Props {

}

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  
  useEffect(async ()=>{
    const token = localStrage.getItem("gh-token")
    alert("0")
    alert(token)
  },[])
  
  return (
    <div>
      home dash
      <div>{ userData }</div>
    </div>
  );
}
