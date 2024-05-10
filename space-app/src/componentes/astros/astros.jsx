import Typography from "@mui/material/Typography";
import Astros from "./astros"
import { useState, useEffect} from "react"; 
import { CircularProgress } from "@mui/material";
function Astro(props) {
    return (
        <div className="card"> 
        <h2> {props.Astro.name} </h2>
        <p>{props.Astro.craft} </p>
        </div>
    );
}

function Astros (){
    const [astros, setAstros] = useState(); 
    const URL = "http://api.open-notify.org/astros.json"; 

    useEffect(() => {
        async function fetchData () { 
            const response = await fetch(URL);
            const data = await response.json();  
            setAstros(data.people);  
        }
        fetchData(); 
    }, []);
    console.log(astros); 
   

    return (
        <>
        <Typography variant="h2"> ASTROS </Typography>
        <div className = "card-container">
            {astros ? ( 
                astros.map((astro, index) => <Astro astro ={astro} key={index} />)  
            ) : ( 
                <CircularProgress />  
            )}

        </div>
        <Astro/> 
        </>
    );
}
export default Astros; 