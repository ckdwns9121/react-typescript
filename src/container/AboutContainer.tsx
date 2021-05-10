type AboutProps ={
    id: string
}

function AboutContainer ({id}:AboutProps){
    return(
        <div>
            어바웃 {id}
        </div>
    )
}

export default AboutContainer;