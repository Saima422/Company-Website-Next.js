import Link from 'next/link'
import Head from 'next/head'
import styles from './styles/raweng.module.scss'
import Navigation from '../components/Navigation/Navigation'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
// import favicon from '../public/favicon/icon.ico'

export default function RawEng({data}) {

  const navStyles={
    color: "#372812",
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>Raw Eng</title>
          {/* <link rel="icon" href={favicon} type="image/ico"></link> */}
      </Head>
      <Navigation links={data.RE.navLinks} logo={data.RE.logo} navStyles={navStyles}/>
      <Banner data={data.RE.mainContent}/>
      {/* <div className={styles.middleDiv}></div> */}
      <Footer data={data.RE.footerData} footerStyles={navStyles}/>
      
      {/* <h1>Raw Engineering</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://saima422.github.io/Image-JSON-Data-Repo/json-data/company-data.json');
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}