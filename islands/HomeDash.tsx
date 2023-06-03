import { useState, useEffect } from "preact/hooks";

interface Props {

}

export default function Counter(props: Props) {
  useEffect(()=>{
    alert("a")
  },[])
  return (
    <div>
      home dash
    </div>
  );
}
