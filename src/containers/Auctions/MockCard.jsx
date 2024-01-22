//This is just a mock-card used for prod purposes


const MockCard = ({props}) => {


    console.log(props);
    return(
        <div style={{height: "200px", width: "150px", border: "2px solid black", backgroundColor: "blue"}}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>

        </div>

    );
}


export default MockCard;