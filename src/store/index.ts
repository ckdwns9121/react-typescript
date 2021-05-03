/* 
    루트 리듀서를 만들 때 일반 javascript 환경에서 할 때랑 방법이 동일한데, 
    Rootstate라는 타입을 만들어서 내보내주어야 한다는 것이다.
*/

import {combineReducers} from 'redux';
import counter from './counter';

const rootReducer = combineReducers({counter});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>