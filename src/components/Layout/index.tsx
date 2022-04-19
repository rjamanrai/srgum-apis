import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Notifactions from '../Notifactions';
import Player from '../Player';

export default function Layout({ children }: any) {
    return (<>
        <Header />
        {children}
        <Footer />
        <Player />
        <Notifactions />
    </>);
}
