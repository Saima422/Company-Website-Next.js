import Link from 'next/link'
import styles from './Card.module.scss'

export default function Card({data, link}){

    return <div className={styles.container}>
        <div className={styles.logoContainer}>
            <img src={data.imageUrl} alt="logo" />
        </div>
        <h2>{data.companyName}</h2>
        <Link href={link}><a>Visit Page</a></Link>
    </div>
}