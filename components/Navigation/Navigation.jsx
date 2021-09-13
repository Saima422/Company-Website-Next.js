import Link from 'next/link'
import styles from './Navigation.module.scss';

function Navigation({ links, logo, navStyles }){

    return (
        <header className={styles.headerDiv} style={{backgroundColor: `${navStyles.color}`}}>
        <div style={{backgroundColor: `${navStyles.color}`}} className={styles.logoContainer}><Link href="/"><a><img src={logo} alt="Logo" className={styles.navLogo}></img></a></Link></div>
        <div className={styles.container} style={{backgroundColor: `${navStyles.color}`}}>
            <ul className={styles.navContainer}>
                {
                    links.map((item, index)=>(
                        <li className={styles.navItem} key={index}><Link href={item.link}><a className={styles.navLink}>{item.name}</a></Link></li>
                    ))
                }
            </ul>
            <div className={styles.hidden}><i className="fa fa-bars fa-2x humburger"></i></div>
        </div>
        </header>
    )      
}

export default Navigation;