import {useSelector,useDispatch} from 'react-redux';
import { RootState } from '../store';
import {increase,decrease,increase_by} from '../store/counter';
import Counter from '../components/Counter';


function CounterContainer (){
    const count = useSelector((state : RootState)=> state.counter.count);
    const dispatch = useDispatch();

    const onIncrease =()=>{
        dispatch(increase());
    }
    const onDecrease =()=>{
        dispatch(decrease());
    }
    const onIncreaseBy =(diff:number)=>{
        dispatch(increase_by(diff));
    }
    return(
        <Counter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    )
}

export default CounterContainer;