import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

export default function Surfboard({data}) {

  const navStyles={
    color: "#745F42",
  }

  return (
    <div>
      <Head>
          <title>Surfboard</title>
      </Head>
      <Navigation links={data.SB.navLinks} logo={data.SB.logo} navStyles={navStyles}/>
      <Banner data={data.SB.mainContent}/>
      <Footer data={data.SB.footerData} footerStyles={navStyles}/>
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