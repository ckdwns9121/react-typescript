import React from 'react';


// React.FC의 장단점.
type GreetingsProps ={
    name: string;
}

const Greetrings : React.FC<GreetingsProps> = ({name}) =>(
    <div>
        Hello {name}
    </div>
)

export default GreetingsProps;