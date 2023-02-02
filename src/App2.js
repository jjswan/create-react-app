import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("Created!");
    // return에 넣은 함수는 component가 unamount(destroy)될 때 실행됨
    return () => console.log("Bye!");
  }, [])

  useEffect(function(){
    console.log("Created!");
    // return에 넣은 함수는 component가 unamount(destroy)될 때 실행됨
    return function bye(){
      console.log("Bye!");
    }
  }, [])

  return(
    <h1>Hello</h1>
  )
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=>!prev)

  return (
  <div>
    {/* js를 넣을 때는 중괄호 안에 넣는다는 것 기억하기!! */}
    {showing? <Hello/>:null}
    <button onClick={onClick}>{showing? "Hide":"Show"}</button>
  </div>
  )
}

export default App;