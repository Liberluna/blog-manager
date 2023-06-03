import { useState, useEffect } from "preact/hooks";

interface Props {

}

export default function Counter(props: Props) {
  const [userData, setUserData] = useState("")
  
  
  return (
    <div>
      <a>新しい投稿を作成する</a>
    </div>
  );
}
