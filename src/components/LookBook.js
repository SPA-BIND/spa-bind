import './LookBook.css';
import fall from './subcomponents/fall';
import spring from './subcomponents/spring';
import summer  from './subcomponents/summer';
import winter from './subcomponents/winter';

function LookBook (){
    return(
        <BrowserRouter>
            <div className = "LookBook"> LookBook </div>
            <Route path = "/lookbook/spring" component ={spring}/>
            <Route path = "/lookbook/summer" component = {summer}/>
            <Route path = "/lookbook/fall" component ={fall}/>
            <Route path = "/lookbook/winter" component = {winter}/>
        </BrowserRouter>
    );
}

export default LookBook;