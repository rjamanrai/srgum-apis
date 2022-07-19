import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Notifactions from "../Notifactions";
import Player from "../Player";
// import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";


export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Srgum Radio is Punjabi Internet Radio. Srgum Radio is the Punjabi Radio which is broadcasting from a village of Punjab. Srgum Radio 24/7 Punjabi Music, Bhangra, Desi, Hindi, Remix, phone calls talk, Request Songs Just tune in to Srgum Radio Srgum Radio Punjabi radio station online."
        />
        <meta
          name="keywords"
          content="Srgum, Radio, Punjabi, music, song, request"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

      <Header />
      {children}
      <Footer />
      {router.route !== "/radio" && <Player />}
      <Notifactions />
    </>
  );
}
