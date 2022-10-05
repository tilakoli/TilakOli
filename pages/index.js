import Head from "next/head";
import ParticlesEffect from "../components/ParticlesEffect/Index";
import BackgroundVideo from "../components/BackgroundVideo/Index";
import Loader from "../components/Loader/index";
import Navigation from "../components/Navigation/index";
import Homepage from "../components/Homepage/index";
import SocialLinks from "../components/Elements/SocialLinks";
import ContactPage from "../components/ContactPage";
import CustomCursor from "../components/CustomCursor";
export default function Home() {
  return (
    <>
      <Head>
        <title>Kagami</title>
      </Head>
      {/* <BackgroundVideo className="absolute overlay -z-10" /> */}
      <div className="relative w-screen h-screen">
        <div className="-z-50">
          <ParticlesEffect />
        </div>
        <div className="relative flex">
          <div className="relative">
            <Navigation />
          </div>
          <div className="relative flex w-full h-[95vh] md:h-screen">
            <div className="relative flex w-full h-[95vh] md:h-screen mt-10  md:mt-0 items-center justify-center">
              <Homepage />
            </div>
            <div className="mt-8 ">
              <SocialLinks />
            </div>
            {/* <CustomCursor /> */}
          </div>
          {/* <ContactPage /> */}
        </div>
      </div>
      <div className="bg-gray-600">{/* <Loader /> */}</div>
    </>
  );
}
