import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import Card from '../components/Card/Card'
import styles from "./styles/index.module.scss"
import Footer from '../components/Footer/Footer'

// https://saima422.github.io/Image-JSON-Data-Repo/json-data/company-data.json

export default function Home({data}) {
  const navStyles={
    color: "#6C5E55",
  }

  return (
    <div className="container">
      <Head>
        <title>Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <Navigation links={data.Home.navLinks} logo={data.Home.logo} navStyles={navStyles}/>

      <div className={styles.cardContainer} style={{backgroundColor:`${navStyles.color}`}}>
        <Card data={data.RE.mainContent} link="/raweng"/>
        <Card data={data.SB.mainContent} link="/surfboard"/>
        <Card data={data.CS.mainContent} link="/contentstack"/>
      </div>

      <Footer data={data.Home.footerData} footerStyles={navStyles}/>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://saima422.github.io/Image-JSON-Data-Repo/json-data/company-data.json');
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}