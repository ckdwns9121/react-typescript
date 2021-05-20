import {RouteComponentProps,useLocation, useParams} from 'react-router-dom';
import AboutContainer from '../container/AboutContainer';

interface MatchParams {
    tab? : string
    id?:string
}

/* 
    타입스크립트에서 match값을 쓰려면 RouteComponentProps 타입이 필요
    하지만 params에 있는 id를 꺼내 쓰려면 RouteComponentProps에서 제네릭에 타입을 주지않았다.
*/
function About( {match}:RouteComponentProps<MatchParams>){

    const {id,tab} = match.params;
    console.log(id);
    console.log(tab);
   
    return(
        <AboutContainer id={id} tab={tab}/>
    )
}

export default About;