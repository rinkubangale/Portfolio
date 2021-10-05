import { Route } from "react-router-dom";
import Home from './Home'

export default function Routes() {
    
    return (<>
        <Route exact path='/'><Home /></Route>
        <Route path='/aboutme'></Route>
        <Route path='/project'></Route>
        <Route path='/contact'></Route>
    </>)
}