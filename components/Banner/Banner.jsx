import styles from './Banner.module.scss'

export default function Banner({data}){

    return (

        <div className={styles.container} style={{backgroundImage: `url(${data.imageUrl})`}}> 
            <div className={styles.overlay}>
                <h1>{data.companyName}</h1>
                <h4>{data.description}</h4> 
            </div> 
        </div>
        
    )
}