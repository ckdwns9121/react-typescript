

type CounterProps ={
  count : number;
  onIncrease : ()=>void
  onDecrease : ()=>void
  onIncreaseBy :(diff:number) =>void
}


function Counter({count ,onIncrease,onDecrease,onIncreaseBy}: CounterProps){

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )

}

export default Counter;