import Look_Button from "./Look_Button"
import {BrowserRouter ,Link} from "react-router-dom";

function LookBook1 () {
    return(
        <BrowserRouter>
            <Link to = "/lookbook/spring">
                <Look_Button>Spring</Look_Button>
            </Link>
            <Link to = "/lookbook/summer">
                <Look_Button>Summer</Look_Button>
            </Link>
            <Link to = "/lookbook/fall">
                <Look_Button>Fall</Look_Button>
            </Link> 
            <Link to = "/lookbook/winter">
                <Look_Button>Winter</Look_Button>
            </Link>
        </BrowserRouter>
    )
}

export default LookBook1;