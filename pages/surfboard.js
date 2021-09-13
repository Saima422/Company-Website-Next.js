import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import styles from './styles/surfboard.module.scss'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

export default function Surfboard({data}) {

  const navStyles={
    color: "#745F42",
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>Surfboard</title>
      </Head>
      <Navigation links={data.SB.navLinks} logo={data.SB.logo} navStyles={navStyles}/>
      <Banner data={data.SB.mainContent}/>
      <Footer data={data.SB.footerData} footerStyles={navStyles}/>
      {/* <h1>Surfboard</h1>
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