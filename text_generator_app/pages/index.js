import Head from "next/head";
import HostedModel from "../components/HostedModel";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Text Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex flex-row justify-between items-justify">
        <div>drAIke</div>
        <div>menu</div>
      </header>

      <main className="text-center">
        <div className="w-full h-96 flex items-center">
          <img
            className="mx-auto h-32 object-contain drake"
            src="/images/draikewglasses.png"
          />
        </div>
        <h1 className="text-4xl">
          Dr<span className="text-red-300">ai</span>ke job{" "}
          <span className="text-red-300">rap</span>plication
        </h1>

        <HostedModel />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .drake:hover {
          animation: spin 0.7s ease-in-out;
        }
      `}</style>
    </div>
  );
}
