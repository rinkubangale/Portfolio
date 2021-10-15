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
            <div style={{margin:'30px 0px'}}>
                <a className={styles.btn} href={data.gitLink} target="_blank">GitHub</a>
                <a className={styles.btn} href={data.demoLink} target="_blank">Demo</a>
            </div>
        </div>
    </>
}