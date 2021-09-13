import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import styles from './styles/contentstack.module.scss'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

export default function Contentstack({data}) {

  const navStyles={
    color: "#A5494B",
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>Contentstack</title>
      </Head>
      <Navigation links={data.CS.navLinks} logo={data.CS.logo} navStyles={navStyles}/>
      <Banner data={data.CS.mainContent}/>
      <Footer data={data.CS.footerData} footerStyles={navStyles}/>
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