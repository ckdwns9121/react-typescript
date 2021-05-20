### TypeScript X React

0. 프로젝트 생성

```
    $ npx create-react-app ts-react-tutorial --typescript
```

1. React.FC의 장단점.
    * 장점
        - React.FC를 사용 할 때는 props의 타입릏 Generics로 넣어서 사용한다.   
        - 첫 번째는, props에 기본적으로 children이 들어가있다.   
        - 두 번째는 컴포넌트의 defaultProps, proptTypes, contextTypes를 설정할 때 자동완성이 될 수 있다.
    * 단점
        - children이 옵션 형태로 들어가 있다보니 컴포넌트의 props 타입이 명백하지 않다.
        - 어떤 컴포넌트에 children이 들어가고 싶지 않을 때 그에 대한 처리를 해야한다.
        - defaultProps를 넣어도 속성이 없으면 오류

2. 컴포넌트에 생략할 수 있는 props 설정하기
    - 컴포넌트의 props중에 생략해도 되는 값이 있다면 '?' 키워드를 사용하면 된다.

3. 컴포넌트에서 함수 타입의 props 받아오기

``` 
    // Greetring.tsx

    type GreetingsProps={
        name :string;
        mark:string;
        optional? : string;
        onClick: (name: string) =>void 
    }
    function Greetrings ({name,mark,optional,onClick} : GreetringProps){
        const handleClick =()=> onClick(name);
        return(
            <div>
                Hello , {name} {mark}
                {optional && <p>{optional}</p>}
                <button onClick={handleClick}> click! </button>
            </div>
        )
    }

    Greetrings.defaultProps={
        mark:'!'
    }
    export default Greetings;
```

```

    const App: React.FC=()=>{
        const onClick =(name:string) =>{
            console.log(`${name}says hello`);
        }
        return(
            <Greetrings name="hello" onClick={onClick}/>
        )
    }

    export default App
```
4. useState및 이벤트 관리

    - useState<number>()와 같이 Generics를 사용하여 해당 상태에 어떤 타입을 가지고 있을지 설정만 하면 된다.

5. useReducer

```
    type Action ={type:'INCREASE'} | {type:'DECREASE'}; // 액션을 OR연산자로 연달아 선언.

    function reducer (state:number , action:Action) : number{
        switch(action.type){
            case 'INCREASE':
                return state+1;
            case 'DECREASE':
                return state-1;
            default :
                throw new Error('undefined');
        }
    }
``` 


6. Router

타입스크립트에서 match값을 쓰려면 RouteComponentProps 타입이 필요하다.   
하지만 params에 있는 id를 꺼내 쓰려면 에러가 뜬다.   
RouteComponentProps에서 제네릭 타입을 주지 않았기 때문에 타입을 선언하고 받는다. 
```
   import {RouteComponentProps} from 'react-router-dom';

   interface MatchParams{
       id : string
   }
   function Home({match}: RouteComponentProps<MatchParams>){
       return(
           <></>
       )
   }
```