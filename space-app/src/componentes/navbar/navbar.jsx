import "./navbar.css"
import RocketIcon from "@mui/icons-material/Rocket";
function Navbar({header, links}) {
    return (
        <nav >
        <div>
            <RocketIcon/> 
        <h2>{header}</h2>
        </div> 
        <div>
            {links.map((link) => (
                <Link to ={Link.link} key={Link.id}>
                    {Link.text}
                </Link> 
            ))}
        </div>
        </nav>
    );
}
   
    

export default Navbar; 
