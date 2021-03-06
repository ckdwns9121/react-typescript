# ๐ ๋ฆฌ์กํธ์ ํ์์คํฌ๋ฆฝํธ๋ฅผ ํจ์จ์ ์ผ๋ก ์ฐ๊ธฐ

## ๋ชฉ์ฐจ

- [1. ํ๋ก์ ํธ ์์ฑ](#-ํ๋ก์ ํธ-์์ฑ)
- [2. function type component](#function-type-component)
- [3. useState](#usestate)
- [4. Router](#router)
- [5. redux](#๋ฆฌ๋์ค)

## ํ๋ก์ ํธ ์์ฑ

```
$npx create-react-app my-app --template typescript
#or
$yarn create react-app my-app --template typescript
```

## React.FC์ ์ฅ๋จ์ 

- ์ฅ์  - React.FC๋ฅผ ์ฌ์ฉ ํ  ๋๋ props์ ํ์์ **Generics**๋ก ๋ฃ์ด์ ์ฌ์ฉํ๋ค.
  - ์ฒซ ๋ฒ์งธ๋, props์ ๊ธฐ๋ณธ์ ์ผ๋ก **children**์ด ๋ค์ด๊ฐ์๋ค.
  - ๋ ๋ฒ์งธ๋ ์ปดํฌ๋ํธ์ defaultProps, proptTypes, contextTypes๋ฅผ ์ค์ ํ  ๋ ์๋์์ฑ์ด ๋  ์ ์๋ค.
- ๋จ์ 
  - children์ด ์ต์๋ ํํ๋ก ๋ค์ด๊ฐ ์๋ค๋ณด๋ ์ปดํฌ๋ํธ์ props ํ์์ด ๋ช๋ฐฑํ์ง ์๋ค.
  - ์ด๋ค ์ปดํฌ๋ํธ์ children์ด ๋ค์ด๊ฐ๊ณ  ์ถ์ง ์์ ๋ ๊ทธ์ ๋ํ ์ฒ๋ฆฌ๋ฅผ ํด์ผํ๋ค.
  - defaultProps๋ฅผ ๋ฃ์ด๋ ์์ฑ์ด ์์ผ๋ฉด ์ค๋ฅ

## function type component

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

`์ปดํฌ๋ํธ์ props์ค์ ์๋ตํด๋ ๋๋ ๊ฐ์ด ์๋ค๋ฉด '?' ํค์๋๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.`

```ts
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name}says hello`);
  };
  return <Greetrings name="hello" onClick={onClick} />;
};

export default App;
```

## useState

- useState<number>()์ ๊ฐ์ด **Generics**๋ฅผ ์ฌ์ฉํ์ฌ ํด๋น ์ํ์ ์ด๋ค ํ์์ ๊ฐ์ง๊ณ  ์์์ง ์ค์ ๋ง ํ๋ฉด ๋๋ค.

## useReducer

**๊ฐ์ฒด ๋ฆฌํฐ๋ด**๋ก ์ก์ํ์์ ์ ์ธํ๋ค.

```javascript
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // ์ก์์ OR์ฐ์ฐ์๋ก ์ฐ๋ฌ์ ์ ์ธ.

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

## Router v6 ์ด์ 

~~ํ์์คํฌ๋ฆฝํธ์์ match๊ฐ์ ์ฐ๋ ค๋ฉด **RouteComponentProps** ํ์์ด ํ์ํ๋ค.  
ํ์ง๋ง params์ ์๋ id๋ฅผ ๊บผ๋ด ์ฐ๋ ค๋ฉด ์๋ฌ๊ฐ ๋ฌ๋ค.  
RouteComponentProps์์ **์ ๋ค๋ฆญ ํ์**์ ์ฃผ์ง ์์๊ธฐ ๋๋ฌธ์ ํ์์ ์ ์ธํ๊ณ  ๋ฐ๋๋ค.~~ ๋ฒ์  ์๋ฐ์ดํธ๋ก ์ธํด ์ ๋ฒ์  ๋ด์ฉ์ ์์ฑํ์์ต๋๋ค.

```ts
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}
function Home({ match }: RouteComponentProps<MatchParams>) {
  return <></>;
}
```

## Router v6

### ์ค์น

```
$ npm install react-router-dom@6
```

### Switch ๋์  Routes

```js
<Routes>
  <Route path="/login" element={<Login />} />
</Routes>
```

### Route์ component ๋์  element ์ฌ์ฉ

```js
<Route path="/" exact element={<HomePage />} />
<Route path="/login" exact element={<LoginPage />} />
```

### exact ๋ ์ญ์ 

```js
<Route path="/login" element={<UsersPage />} />

//์ฌ๋ฌ ๋ผ์ฐํ์ ๋งค์นญํ๊ณ  ์ถ์ ๊ฒฝ์ฐ URL ๋ค์ *์ ์ฌ์ฉํ๋ค.
<Routes>
  <Route path="member/*" element={<Member />} />
</Routes>

```

### ์ค์ฒฉ ๋ผ์ฐํ

```js
<Routes>
  <Route path="/member">
    <Route path=":memberId" /> // /member/:memberId
  </Route>
</Routes>
```

### Not Found

```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### useHistory ๋์  useNavigate

```js
const navigate = useNavigate();

navigate('/');
navigate(-1);
navigate(-2);
navigate(`/user/${user._id}`);
```

### Optional URL ํ๋ผ๋ฏธํฐ ์ฌ๋ผ์ง. ํ์ํ๋ฉด Route 2๊ฐ ๋ง๋ค์ด์ผ ํจ

```js
<Route path="/optional/:value?" element={<Optional />} />
<Route path="/optional" element={<Optional />} />
```

### id path ์ด์ฉํ๊ธฐ

```js
import React from 'react';
import { useParams } from 'react-router';

const WebPost = () => {
  const { id } = useParams();
  return <div>#{id}๋ฒ์งธ ํฌ์คํธ</div>;
};

export default WebPost;
```

## ๋ฆฌ๋์ค

> ๋ฆฌ๋์ค๋ Redux Toolkit Js๋ฅผ ํ์ฉํ์.
> type์ ํ์์ผ ๋ interface๋ ๊ฐ์ฒด์ผ๋ ์ฐ์.
> [Redux Toolkit Js ์ ๋ฆฌ](https://github.com/ckdwns9121/TIL/blob/master/React/redux-toolkit-js.md)

#### ๋ฆฌ๋์ค ์ฌ๊ฐ

- redux์ redux-saga ์ค์นํ๊ธฐ

```

$ yarn add redux react-redux @types/react-redux redux-saga

```

- typesafe-actions ์ค์น

```

$ yarn add typesafe-actions

```

- redux store ์์ฑ

### ๐store/test.ts

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

### ๐store/index.ts

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

//์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๊ฒ๋  ์คํ ์ด์ ์ ์ฅ๋ ๋ฐ์ดํฐ์ ํ์์๋๋ค.
export type RootState = ReturnType<typeof rootReducer>;
```

### ๐index.tsx

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
