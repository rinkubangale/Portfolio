import { Route } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import About from './About'

export default function Routes() {
    
    return (<>
        <Route exact path='/'><Home /></Route>
        <Route path='/aboutme'><About /></Route>
        <Route path='/project'></Route>
        <Route path='/contact'><Contact /></Route>
    </>)

}