import React from 'react';

type GreetingsProps ={
    name: string;
}

const Greetrings : React.FC<GreetingsProps> = ({name}) =>(
    <div>
        Hello {name}
    </div>
)

export default GreetingsProps;