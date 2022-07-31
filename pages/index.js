import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bideo background test</title>
      </Head>
      <div className="relative z-50 w-screen h-screen">
        <div className="fixed w-full h-full">
          <BackgroundVideo className="absolute overlay -z-10" />
        </div>
        <div className="relative z-50 flex items-center justify-center w-screen h-screen text-3xl text-yellow-500 underline ">
          Coming Soon!
        </div>
      </div>
    </>
  );
}
