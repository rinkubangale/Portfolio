import styles from './project.module.css'

export default function ProjectCard({ data }) {
    
    return <>
        <div className={styles.projectCard}>
            <div>
                <img className={styles.cardImg} src={ data.img } alt="bg_img" />
            </div>
            <div>
                <h1>{ data.heading }</h1>
            </div>
            <div>
                <p>{ data.details }</p>
            </div>
        </div>
    </>
}