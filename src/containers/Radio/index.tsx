import Head from "next/head";
import styles from "./radio.module.css";
import Player from "../../components/Player";

export default function Radio() {
  return (
    <div id="site-content" className="site-content clearfix">
      <Head>
        <title>Live Player | Srgum Radio | Punjabi Radio | Player</title>
        <meta
          name="title"
          content="Live Player of Srgum Radio | Punjabi Radio "
        />
      </Head>
      <div id="inner-content" className="inner-content-wrap">
        <div className="page-content">
          <section className="page-title bg-st-3">
            <div className="overlay-header"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="baner-title fl-st-2">
                    <h2
                      className="title-page white-color wow fadeInDown"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      Srgum Radio
                    </h2>
                    <div className="breadcrumbs">
                      <ul className="fl-flex">
                        <li>
                          <a
                            href="index.html"
                            className="white-color wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            Live Player
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tf-about fl-st-1"
                    style={{ background: "transparent", marginBottom: 40 }}
                  >
                    <div className={`${styles.playerBox} row`}>
                      <Player isLivePlayerPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
