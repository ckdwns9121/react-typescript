// import React ,{useState} from 'react';


// //useState 를 사용할 때 Generics를 사용하지 않아도 자동으로 타입을 유추한다.
// // 상태가 null일 수도 있고 아닐수도 있을 때 Generics를 활용하면 유용하다.
// function Counter(){
//     const [count,setCount] = useState<number>(0);
//     const onIncrease =() =>setCount(count +1);
//     const onDecrease =() =>setCount(count -1);

//     return(
//         <div>
//             <h1>{count}</h1>
//             <div>
//                 <button onClick ={onIncrease}>+</button>
//                 <button onClick ={onDecrease}>-</button>
//             </div>
//         </div>
//     )
// } 

// export default Counter;

import React ,{useReducer} from 'react';
 
type Action ={type :'INCREASE' } | { type : 'DECREASE'}  //액션을 쭉 연달아 나열가능 OR연산자.


//리듀서를 작성할 때 state의 타입과 함수의 return 타입이 동일하다.
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter (){
    const [count,dispatch] = useReducer(reducer,0);
    const onIncrease =() =>dispatch({type:'INCREASE'});
    const onDecrease =() =>dispatch({type:'DECREASE'});

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick ={onIncrease}>+</button>
                <button onClick ={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;