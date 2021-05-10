import React from 'react';
import HomeContainer from '../container/HomeContainer';
import {RouteComponentProps} from 'react-router-dom';

function Home({match}:RouteComponentProps){
    return <HomeContainer/>
}

export default Home;