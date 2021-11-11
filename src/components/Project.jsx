import ProjectCard from "./ProjectCard"
import Styles from './project.module.css'
import AppImg from './Screenshot.png'
import AppImg2 from './Screenshot 2.png'

export default function Project() {

    const Project1 = {
        img: 'https://miro.medium.com/max/3240/1*lUu06--2j16xUE5_iJS-vw.png',
        heading: 'A Cloned Version “Pepperfry.com”',
        details: 'Built authentication and integrated it with the frontend. Laid out the database schema and build the REST API for the same. Developed the Home and Products page. Developed the Cart page.',
        gitLink: 'https://github.com/Tarun3165/pepperfryBackend',
        demoLink: 'https://pepperfrywebsite.herokuapp.com/products/home'
    }
    const Project2 = {
        img: AppImg,
        heading: 'Movie Star - Movie App ',
        details: 'Built authentication and integrated it with the frontend. Fetching Data from API. Used LocalStorage to store data. Developed the Home and Products page. ',
        gitLink: 'https://github.com/rinkubangale/Movie-Star-App',
        demoLink: 'https://movies-star-app.herokuapp.com/'
    }
    const Project3 = {
        img: AppImg2,
        heading: 'Swiftic - Mobile Store',
        details: 'Developed the Home, Cart, and Confirmation page. Provided a form to Add a Product to the website. Add to cart button, Checkout button.',
        gitLink: 'https://github.com/rinkubangale/Swiftic-App',
        demoLink: 'https://swiftic-app.herokuapp.com/'
    }
    
    return (<>
        <div className={ Styles.projectDiv }>
            <ProjectCard data={ Project1 }/>
            <ProjectCard data={ Project2 }/>
            <ProjectCard data={ Project3 }/>
        </div>
    </>)
}