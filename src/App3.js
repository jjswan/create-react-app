import { useState} from "react";

function App(){
  //input에 접근하여 통제하기 위해 useState 사용
  const [todo, setTodo] = useState("");
  //여러 개의 todo를 array에 넣기 
  const [todos, setTodos] = useState([]);

  //event 
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo===""){
      return;
    }
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  }
  const removeBtn = (index) => {
    setTodos((prev) => prev.filter((item, itemIndex)=>index !== itemIndex));
  }
  
  return (
    <div>
      <h1>My Todos({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write your to do..."></input>
        <button>Add ToDo</button>
        <hr></hr>
        <ul>
          {todos.map((item, index)=> <li key={index}>{item}<button onClick={()=> removeBtn(index)}>Finish</button></li>)} 
        </ul>
      </form>
    </div>
  )
}

export default App;