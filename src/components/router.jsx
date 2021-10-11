import { Route } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'

export default function Routes() {
    
    return (<>
        <Route exact path='/'><Home /></Route>
        <Route path='/aboutme'></Route>
        <Route path='/project'></Route>
        <Route path='/contact'><Contact /></Route>
    </>)

}