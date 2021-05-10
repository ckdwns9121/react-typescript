import {RouteComponentProps} from 'react-router-dom';
import AboutContainer from '../container/AboutContainer';
function About({match}:RouteComponentProps){
    console.log(match);
    return(
        <AboutContainer/>
    )
}

export default About;