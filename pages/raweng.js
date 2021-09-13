import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

export default function RawEng({data}) {

  const navStyles={
    color: "#372812",
  }

  return (
    <div>
      <Head>
          <title>Raw Eng</title>
      </Head>
      <Navigation links={data.RE.navLinks} logo={data.RE.logo} navStyles={navStyles}/>
      <Banner data={data.RE.mainContent}/>
      <Footer data={data.RE.footerData} footerStyles={navStyles}/>
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