import styles from './project.module.css'

import {SiJavascript, SiHtml5, SiCss3, SiExpress, SiMongodb, SiMysql, SiGit } from 'react-icons/si'


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
                <p style={{height:'130px', textAlign: 'justify'}}>{ data.details }</p>
            </div>
            <div>
                Tech Stack Used :
                <br />
                <SiHtml5 style={{fontSize: '30px', margin:'20px 5px 0px 20px'}} />html
                <SiCss3 style={{fontSize: '30px', margin:'20px 5px 0px 20px'}} />css
                <SiJavascript style={{fontSize: '30px', margin:'20px 8px 0px 20px'}} />Javascript
            </div>
            <div style={{margin:'30px 0px'}}>
                <a className={styles.btn} href={data.gitLink} target="_blank">GitHub</a>
                <a className={styles.btn} href={data.demoLink} target="_blank">Demo</a>
            </div>
        </div>
    </>
}