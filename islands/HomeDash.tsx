import { useState, useEffect } from "preact/hooks";
import NewPost from "./NewPost.tsx";

interface Props {

}

export default function Counter(props: Props) {
  const [mode, setMode] = useState("new-post")
  
  return (
    <div>
      <a>新しい投稿を作成する</a>
      { mode === "new-post" && <NewPost/> }
    </div>
  );
}
