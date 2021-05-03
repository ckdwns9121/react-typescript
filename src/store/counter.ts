// ts에서 redux 사용하기

/* 
    1. 액션 type 선언.
    type을 선언할 시 다음과 같이 문자열 뒤에 as const 라는  키워드를 붙여야 한다.
    해당 키워드를 붙이면 추후 액션 객체의 type이 string이 되지 않고 실제 값을 가르킨다.
*/
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY ='counter/INCREASE_BY' as const;


/*
    2. 액션 생성자 선언
*/

export const increase =()=>({type:INCREASE});
export const decrease =()=>({type:DECREASE});
export const increase_by =(diff:number) =>({type:INCREASE_BY,payload:diff});

/*
    3. 액션 TYPE 선언
    여기서 사용된 ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸타입이다.
*/

type CounterAction = 
| ReturnType<typeof increase> 
| ReturnType<typeof decrease>
| ReturnType<typeof increase_by>

/*
    4. 초기값 선언
*/

type CounterState={
    count: number
}
const initState : CounterState ={
    count : 0
}

/*
    5. 리듀서 작성
*/

function counter(state:CounterState = initState , action : CounterAction){
    switch(action.type){
        case INCREASE :
            return {count : state.count +1}
        case DECREASE :
            return { count: state.count -1}
        case INCREASE_BY :
            return {count: state.count + action.payload}
        default:
            return state
    }
}

export default counter;