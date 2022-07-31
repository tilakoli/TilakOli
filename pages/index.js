import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bideo background test</title>
      </Head>
      <div className="h-screen w-screen z-50 relative">
        <div className="fixed h-full w-full">
          <BackgroundVideo className="absolute overlay -z-10" />
        </div>
        <div className="text-black text-3xl relative z-50 h-screen w-screen  opacity-10  flex items-center justify-center">
          here askbaksb
        </div>
      </div>
    </>
  );
}
