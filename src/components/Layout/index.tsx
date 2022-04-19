import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Notifactions from '../Notifactions';
import Player from '../Player';
import Script from 'next/script'


export default function Layout({ children }: any) {
    return (<>
        <Script src="js/audiop.js"></Script>

     <Script src="js/jquery.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/jquery-validate.js"></Script>
        {/* <Script src="js/music.js"></Script> */}
        <Script src="js/main.js"></Script>
        <Script src="js/shortcodes.js"></Script>

        <Script src="js/wow.min.js"></Script>
        <Script src="js/animation.js"></Script>

        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/owl.carousel2.thumbs.js"></Script>
        <Header />
        {children}
        <Footer />
        <Player />
        <Notifactions />
    </>);
}
