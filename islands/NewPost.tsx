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
      <div class="my-5">
        <span>表示名</span>
        <input class="border"/>
      </div>
      <div class="my-5">
        <span>ID</span>
        <input class="border"/>
      </div>
      <div class="my-5">
        <span>アイコンのPath</span>
        <input placeholder="nakasyou.png" class="border"/>
      </div>
      <div class="my-5">
        <button class="rounded bg-emerald-400 text-white">Pull Requestを提出する</button>
      </div>
      <div>
        <textarea class="border w-full h-screen" placeholder="ここにMarkdownを入力...">
        </textarea>
      </div>
    </div>
  );
}
