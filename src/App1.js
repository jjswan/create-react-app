//Button component를 import 하기
//import Button from "./Button";
//App css 파일 import 하기
import styles from "./App.module.css";
//useState, useEffect import하기
import {useState, useEffect} from "react";

function App() {
  //App function을 랜더링할 때마다 항상 새롭게 나오는 부분
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev+1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("I run all the time");
  //console.log('Search for ', keyword)
  //첫 랜더링 때만 새롭게 나오는 부분
  // const iRunOnlyOnce = () => console.log("I run only once");
  useEffect(()=> {
    console.log('I run only once');
  }, [])

  useEffect(()=>{
    if(counter !== 0){
      console.log("I run when click button");
    }
  }, [counter])

  useEffect(()=>{
    if(keyword !=="" && keyword.length > 5){
      console.log('Search for ', keyword);
    }
  }, [keyword])

  return(
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button text="Continue"></Button>  */}
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App;
