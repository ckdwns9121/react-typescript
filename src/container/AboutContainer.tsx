type AboutProps ={
    id?: string
    tab?:string
}

function AboutContainer ({id,tab}:AboutProps){
    return(
        <div>
            about {id}
            {tab ==='test' && <div>test</div>} 
        </div>
    )
}

export default AboutContainer;