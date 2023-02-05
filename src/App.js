import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

function App(){
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      {/* 사용자가 "/" path에 있으면 Home.js를 랜더링하여 보여줄 것 */}
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/movie/:id" element={<Detail/>}>  
      </Route>
    </Routes>
  </Router>;
}



export default App;