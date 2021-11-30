# 📍 리액트와 타입스크립트를 효율적으로 쓰기

## 목차

- [프로젝트생성](#-프로젝트생성)
- [Router](#-Router)

## 프로젝트생성

```
$ npx create-react-app ts-react-tutorial --typescript
```

## 1. React.FC의 장단점

- 장점 - React.FC를 사용 할 때는 props의 타입을 **Generics**로 넣어서 사용한다.
  - 첫 번째는, props에 기본적으로 **children**이 들어가있다.
  - 두 번째는 컴포넌트의 defaultProps, proptTypes, contextTypes를 설정할 때 자동완성이 될 수 있다.
- 단점
  - children이 옵셔널 형태로 들어가 있다보니 컴포넌트의 props 타입이 명백하지 않다.
  - 어떤 컴포넌트에 children이 들어가고 싶지 않을 때 그에 대한 처리를 해야한다.
  - defaultProps를 넣어도 속성이 없으면 오류

## 2. 컴포넌트에 생략할 수 있는 props 설정하기

- 컴포넌트의 props중에 생략해도 되는 값이 있다면 '?' 키워드를 사용하면 된다.

## 3. 컴포넌트에서 함수 타입의 props 받아오기

```ts
interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

function Greetrings({ name, mark, optional, onClick }: GreetringProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello , {name} {mark}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}> click! </button>
    </div>
  );
}

Greetrings.defaultProps = {
  mark: '!',
};
export default Greetings;
```

```ts
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name}says hello`);
  };
  return <Greetrings name="hello" onClick={onClick} />;
};

export default App;
```

## 4. useState및 이벤트 관리

- useState<number>()와 같이 **Generics**를 사용하여 해당 상태에 어떤 타입을 가지고 있을지 설정만 하면 된다.

## 5. useReducer

**객체 리터럴**로 액션타입을 선언한다.

```javascript
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 액션을 OR연산자로 연달아 선언.

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('undefined');
  }
}
```

## 6. Router

타입스크립트에서 match값을 쓰려면 **RouteComponentProps** 타입이 필요하다.  
하지만 params에 있는 id를 꺼내 쓰려면 에러가 뜬다.  
RouteComponentProps에서 **제네릭 타입**을 주지 않았기 때문에 타입을 선언하고 받는다.

```ts
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}
function Home({ match }: RouteComponentProps<MatchParams>) {
  return <></>;
}
```

## 7. 리덕스

> 리덕스는 Redux Toolkit Js를 활용하자.  
> type은 타입일 때 interface는 객체일때 쓰자.  
> [Redux Toolkit Js 정리](https://github.com/ckdwns9121/TIL/blob/master/React/redux-toolkit-js.md)

#### 리덕스 사가

- redux와 redux-saga 설치하기

```
$ yarn add redux react-redux @types/react-redux redux-saga
```

- typesafe-actions 설치

```
$ yarn add typesafe-actions
```

- redux store 작성

### 🗂store/test.ts

```ts
import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { getApi } from '../api';

const GET_LIST = 'GET_LIST' as const;
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS' as const;
const GET_LIST_ERROR = 'GET_LIST_ERROR' as const;

export const getRealties = createAction(GET_LIST)<any>();
export const getListSuccess = createAction(GET_LIST_SUCCESS)<any>();
export const getListError = createAction(GET_LIST_ERROR)<any>();

const actions = { getRealties, getListSuccess, getListError };

type Actions = ActionType<typeof actions>;

const initState: any = {
  data: []
};

function* testApi(action: any): Generator {
  try {
      yield put({
        type: GET_LIST_SUCCESS,
        payload: payload
      });
    }
  } catch (e) {
    console.log(e);
  }
}

export function* testSaga() {
  yield takeLatest(testApi);
}

const test = createReducer<IState, Actions>(initState, {
  [GET_LIST]: (state, action) => {
    return {
      ...state,
      success: false,
      error: false,
    };
  },
  [GET_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      success: true,
      realties: action.payload,
    };
  },
  [GET_LIST_ERROR]: (state, action) => {
    return {
      ...state,
      success: false,
      error: true,
    };
  },
});

export type RooteState = ReturnType<typeof test>;
export default test;
```

### 🗂store/index.ts

```ts
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import test, { testSaga } from './test';

const rootReducer = combineReducers({
  test,
});

export function* rootSaga() {
  yield all([testSaga()]);
}

export default rootReducer;

//컴포넌트에서 사용하게될 스토어에 저장된 데이터의 타입입니다.
export type RootState = ReturnType<typeof rootReducer>;
```

### 🗂index.tsx

```ts
...
import { createStore,applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import rootReducer,{rootSaga} from './store/index';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
