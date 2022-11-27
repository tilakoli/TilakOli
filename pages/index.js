import Head from "next/head";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage/index";
import AboutmePage from "../components/AboutmePage/index";
import ContactPage from "../components/ContactPage/index";
import Loader from "../components/Loader/index";
import { useState } from "react";
import ParticlesEffect from "../components/ParticlesEffect/Index";
import Navigation from "../components/Navigation/index";
import SocialLinks from "../components/Elements/SocialLinks";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showResumePage, setShowResumePage] = useState(false);
  const [showWorkPage, setShowWorkPage] = useState(false);
  const [showBlogsPage, setShowBlogsPage] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  const setHomeActive = () => {
    setShowContactPage(false);
    setShowBlogsPage(false);
    setShowWorkPage(false);
    setShowResumePage(false);
    setShowAboutPage(false);
    setShowHomePage(true);
  };

  const setContactPageActive = () => {
    setShowBlogsPage(false);
    setShowWorkPage(false);
    setShowResumePage(false);
    setShowAboutPage(false);
    setShowHomePage(false);
    setShowContactPage(true);
  };
  const setAboutPageActive = () => {
    setShowBlogsPage(false);
    setShowWorkPage(false);
    setShowResumePage(false);
    setShowHomePage(false);
    setShowContactPage(false);
    setShowAboutPage(true);
  };
  return (
    <>
      <Head>
        <title>Kagami</title>
      </Head>
      <div>
        <div className="relative w-screen h-screen">
          {/* * bg-homeBg * */}
          <div className="-z-50">
            <ParticlesEffect />
          </div>
          <div className="relative flex">
            <div className="relative">
              <Navigation
                homeaction={setHomeActive}
                onContactClick={setContactPageActive}
                OnAboutMeClick={setAboutPageActive}
              />
            </div>
            <div className="relative flex w-full h-[95vh] md:h-screen">
              <div className="relative flex w-full h-[95vh] md:h-screen mt-10 md:mt-0 items-center justify-center">
                {showHomePage && <Homepage />}
                {showAboutPage && <AboutmePage />}
                {showResumePage && <ResumePage />}
                {showWorkPage && <WorkPage />}
                {showBlogsPage && <BlogsPage />}
                {showContactPage && <ContactPage />}
              </div>
              <div className="mt-8">
                <SocialLinks />
              </div>
              <CustomCursor />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <Loader />
      </div>
    </>
  );
}
