import Head from "next/head";
import ParticlesEffect from "../components/ParticlesEffect/Index";
import BackgroundVideo from "../components/BackgroundVideo/Index";
import Typical from "react-typical";
import Loader from "../components/Loader/index";
import Navigation from "../components/Navigation/index";
export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      {/* <BackgroundVideo className="absolute overlay -z-10" /> */}
      <div className="relative w-screen h-screen ">
        <div className="-z-50">
          <ParticlesEffect />
        </div>
        <div className="relative flex">
          <div className="relative">
            <Navigation />
          </div>
          <div className="relative flex w-full h-[95vh] md:h-screen mt-10  md:mt-0 items-center justify-center">
            <div className="flex flex-col items-center text-5xl text-white md:pr-56">
              <h1 className="font-bold text-[70px] mb-2">Tilak Oli</h1>
              <div className="flex gap-1 text-[30px]">
                I am a
                <span>
                  <Typical
                    steps={["Developer", 3000, "Designer", 3000]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">{/* <Loader /> */}</div>
    </>
  );
}
