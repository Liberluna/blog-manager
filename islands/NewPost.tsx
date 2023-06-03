import { useState, useEffect } from "preact/hooks";

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  useEffect(()=>{
    const token = localStorage.getItem("gh-token")
    const octokit = new Octokit({
      auth: token,
    })
  },[])
  
  return (
    <div>
      <div>
        <span>表示名</span>
        <input/>
      </div>
      <div>
        <span>ID</span>
        <input/>
      </div>
      <div>
        <span>アイコンのPath</span>
        <input placeholder="nakasyou.png"/>
      </div>
      <div>
        <textarea>
          ここにMarkdownを入力...
        </textarea>
      </div>
    </div>
  );
}
