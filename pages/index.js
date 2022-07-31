import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo/Index";
import Typical from "react-typical";
export default function Home() {
  return (
    <>
      <Head>
        <title>{" :) "}</title>
      </Head>
      <div className="relative z-50 w-screen h-screen">
        <div className="fixed hidden w-full h-full 2xl:block ">
          <BackgroundVideo className="absolute overlay -z-10" />
        </div>
        <div className="relative z-50 flex flex-col items-center justify-center w-screen h-screen gap-3 ">
          <div className="text-5xl font-bold text-creamyWhite">
            <span>Tilak Oli</span>
          </div>
          <div className="flex gap-3 text-3xl text-creamyWhite">
            <p className="">I am a Web</p>
            <Typical
              steps={["Developer!", 3000, "Desiger!", 3000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
      </div>
    </>
  );
}
