import { useEffect, useState } from "react"; 


function App(){
  const [loading, setLoading] = useState(true);
  //아래에서 가져온 코인 정보에 접근하기 위해 useState 사용
  const [coins, setCoins] = useState([]);
  //코인을 살 돈 정보에 접근할 useState
  const [money, setMoney] = useState(0);
  //코인 심볼 정보에 접근할 useState
  const [symbol, setSymbol] = useState("USD");
  //component가 생성되었을 때만 실시
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((data)=>setCoins(data)); setLoading(false);
  }, [])
  
  function onChange(event){
    localStorage.setItem("money", event.target.value)
    setMoney(event.target.value);
  }
  
  function moneyChange(){
    const selectTag = document.querySelector("#coin-select");
    const price = selectTag.value.split(",")[0];
    const newsymbol = selectTag.value.split(",")[1];
    setMoney((prev)=> localStorage.getItem("money")/price);
    setSymbol((prev)=> newsymbol);
  }

  return(
    <div>
      <h1>The Coins({coins.length})</h1>
      {loading? <strong>Loading...</strong>:null}
      <input onChange={onChange} type="number" placeholder="Write the amount you want(US$)"></input>
      <p>{money} {symbol}</p>
      <hr></hr>
      <label htmlFor="coin-select">Select coin</label>
      <select id="coin-select" onChange={moneyChange}>
        <option value="">Please choose a coin</option>
        {coins.map((item)=> <option key={item.id} value={[item.quotes.USD.price, item.symbol]} >{item.name}({item.symbol})</option>)}
      </select>
      {/* <ul>
        {coins.map((item)=> <li key={item.id}>{item.name} ({item.symbol}) : {item.quotes.USD.price}</li>)}
      </ul> */}
    </div>
  )
}

export default App;