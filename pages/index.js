import Head from "next/head";
import Layout from '../components/Layout'
import Homepage from "../components/Homepage/index";
import AboutmePage from '../components/AboutmePage/index'
import ContactPage from '../components/ContactPage/index'
import Navigation from "../components/Navigation/index";
import Loader from '../components/Loader/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kagami</title>
      </Head>
      <Layout>
          <Homepage />
          {/* <AboutmePage/> */}
          {/* <ContactPage/> */}
        </Layout>
      <div className="bg-gray-600"><Loader /></div>
    </>
  );
}
