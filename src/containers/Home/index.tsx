import React, { useEffect } from "react";
import { setPlayerUrl } from "../../store/player";

export default function Home() {
  const setPlayer = () => {
    setPlayerUrl("http://radio-admin.srgum.com/radio/8000/radio.mp3");
  };
  useEffect(() => {
    setPlayer();
  }, []);

  return (
    <>
      <div className="side-menu__block">
        <div className="side-menu__block-overlay custom-cursor__overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner">
          <div className="side-menu__top justify-content-end">
            <a href="#" className="side-menu__toggler side-menu__close-btn">
              <i className="far fa-times-circle"></i>
            </a>
          </div>
          <div className="side-menu__top-introduce">
            <a href="index.html" className="main-logo">
              <img src="image/logo.png" alt="Home" />
            </a>
            <p className="white-color">
              Interacting with your audience creating new relationships,
              nurturing existing ones, and responding to feedback.
            </p>
            <form method="get" action="#" className="form-side_block">
              <input type="text" value="" placeholder="Search keywords" />
              <button type="submit">
                <i className="icon-ic-search"></i>
              </button>
            </form>
            <div className="widget widget-contact">
              <div className="title-widget">Contact us</div>
              <ul className="list-contact">
                <li>
                  <p className="meta-address">
                    Blocks Agency, 2231 Redbud Drive Whitestone, NY 11357
                  </p>
                </li>
                <li>
                  <a href="tel:1105692354238" className="meta-phone">
                    +11 0569 2354 238
                  </a>
                </li>
                <li>
                  <a
                    href="/cdn-cgi/l/email-protection#d2bbbcb4bdfca3b1b3a1a692bfb3bbbefcb1bdbf"
                    className="meta-mail"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="dbb2b5bdb4f5aab8baa8af9bb6bab2b7f5b8b4b6"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <div className="page-content">
            <section className="page-title bg-st-2">
              <div className="container-fluid">
                <div className="overlay-header2"></div>
                <div className="row">
                  <div className="col-12">
                    <div className="carousel-banner">
                      <div
                        className="themesflat-carousel clearfix wow fadeInUp"
                        data-margin="30"
                        data-item="1"
                        data-item2="1"
                        data-item3="1"
                        data-item4="1"
                        data-auto="true"
                      >
                        <div className="owl-carousel owl-theme none dots-none">
                          <div className="slide-item">
                            <h2 className="title white-color fl-serif">
                              Feel <br /> The Music
                            </h2>
                            <p className="sub-title white-color ">
                              Interacting with your audience creating new
                              relationships, nurturing existing ones, and
                              responding to feedback.
                            </p>
                            <div className="btn-slide">
                              <a
                                href="#"
                                className="themesflat-button3 bg-white st-1 fl-icon player-m play-pause-button"
                              >
                                <span className="box-icon ">
                                  <i className="fas fa-play"></i>
                                </span>
                                Listen Now
                              </a>
                              <a
                                href="podcast-play.html"
                                className="themesflat-button3 bg-white st-2"
                              >
                                <span className="icon-btn">
                                  <i className="icon-musical-note"></i>
                                </span>
                                Browse All
                              </a>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="slide-item">
                            <h2 className="title white-color fl-serif">
                              Feel <br /> The Music
                            </h2>
                            <p className="sub-title white-color ">
                              Interacting with your audience creating new
                              relationships, nurturing existing ones, and
                              responding to feedback.
                            </p>
                            <div className="btn-slide">
                              <a
                                href="#"
                                className="themesflat-button3 bg-white st-1 fl-icon player-m play-pause-button"
                              >
                                <span className="box-icon ">
                                  <i className="fas fa-play"></i>
                                </span>
                                Listen Now
                              </a>
                              <a
                                href="podcast-play.html"
                                className="themesflat-button3 bg-white st-2"
                              >
                                <span className="icon-btn">
                                  <i className="icon-musical-note"></i>
                                </span>
                                Browse All
                              </a>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="feature-header"
                src="image/hero-man.png"
                alt="image"
              />
            </section>
            <section className="tf-channel">
              <div className="overlay-theme"></div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="fl-channel">
                      <div className="fl-title-heading ct">
                        <div
                          className="sub-heading white-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Features
                        </div>
                        <h2
                          className="title-heading white-color wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Feature Music Channels
                        </h2>
                      </div>
                      <div className="list-channel">
                        <div
                          className="box-channel wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="box-channel-content">
                            <div className="box-icon-1">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                            <p className=" theme-color">
                              <span>
                                <i className="fas fa-music"></i>
                              </span>{" "}
                              19 Tracks
                            </p>
                            <h4 className="fl-serif name-channel">
                              Edgy Electronic
                            </h4>
                            <div className=" name-singer">
                              Work hard, play hard
                            </div>
                          </div>
                        </div>
                        <div
                          className="box-channel wow fadeInDown"
                          data-wow-delay="100ms"
                          data-wow-duration="1500ms"
                        >
                          <img src="image/chanel-1.jpg" alt="image" />
                        </div>
                        <div
                          className="box-channel wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="box-channel-content">
                            <div className="box-icon-1">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                            <p className=" theme-color">
                              <span>
                                <i className="fas fa-music"></i>
                              </span>{" "}
                              19 Tracks
                            </p>
                            <h4 className="fl-serif name-channel">
                              Feel the Rhythm
                            </h4>
                            <div className=" name-singer">Groovy Nu-Disco</div>
                          </div>
                        </div>
                        <div
                          className="box-channel wow fadeInDown mgr-none"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <img src="image/chanel-2.jpg" alt="image" />
                        </div>
                        <div
                          className="box-channel wow fadeInUp"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <img src="image/chanel-3.jpg" alt="image" />
                        </div>
                        <div
                          className="box-channel wow fadeInUp"
                          data-wow-delay="100ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="box-channel-content">
                            <div className="box-icon-1">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                            <p className=" theme-color">
                              <span>
                                <i className="fas fa-music"></i>
                              </span>{" "}
                              19 Tracks
                            </p>
                            <h4 className="fl-serif name-channel">
                              Ghibli Themes
                            </h4>
                            <div className=" name-singer">
                              Mystical Film Score
                            </div>
                          </div>
                        </div>
                        <div
                          className="box-channel wow fadeInUp"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <img src="image/chanel-4.jpg" alt="image" />
                        </div>
                        <div
                          className="box-channel wow fadeInUp mgr-none"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="box-channel-content">
                            <div className="box-icon-1">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                            <p className=" theme-color">
                              <span>
                                <i className="fas fa-music"></i>
                              </span>{" "}
                              19 Tracks
                            </p>
                            <h4 className="fl-serif name-channel">
                              Upbeat Bangers
                            </h4>
                            <div className=" name-singer">
                              Unifying melodies
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-story fl-st-1 fl-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sx-12">
                    <div className="box-wrap-story">
                      <div className="fl-title-heading">
                        <div className="sub-heading theme-color">
                          Real Music
                        </div>
                        <h2 className="title-heading">
                          Real Music <br /> for Real Stories
                        </h2>
                        <p className=" wrap">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text.
                        </p>
                      </div>
                      <div className="btn-story">
                        <a
                          href="podcast-play.html"
                          className="themesflat-button3 bg-theme st-2"
                        >
                          <span className="icon-btn">
                            <i className="icon-musical-note"></i>
                          </span>
                          Browse All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sx-12">
                    <div
                      className="music-story wow fadeInRight"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="overlay-music st-1">
                        <div className="player fl-st-1">
                          <div className="player-content fl-st-1">
                            <div className="album-art">
                              <img
                                src="image/avt-ms2.jpg"
                                alt="image"
                                className="active"
                              />
                              <ul className="fl-st-1">
                                <li>
                                  <div className="album-name fl-st-1"></div>
                                </li>
                                <li>
                                  <p className="sub-album fl-st-1">
                                    59 mins left
                                  </p>
                                </li>
                                <li className="fl-control">
                                  <div className="player-controls fl-st-1">
                                    <div className="control box-icon-8">
                                      <span className=" play-pause-button fl-play-pause">
                                        <i className="fas fa-play"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="player-track fl-st-1">
                                    <div className="s-area">
                                      <div className="ins-time"></div>
                                      <div className="s-hover"></div>
                                      <div className="seek-bar"></div>
                                    </div>
                                  </div>
                                  <div className="track-time fl-st-1">
                                    <div className="track-length"></div>
                                    <span>/</span>
                                    <div className="current-time"></div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="fl-list-play fl-st-1">
                          <ul>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                I Will Be There For You
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                This Time Is Mine
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="time fl-st-1 muted-color">
                                02:58
                              </span>
                              <span className="share ">
                                <a href="#" className="muted-color">
                                  <i className="icon-ic-cloud"></i>
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-episodes fl-st-1">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="fl-title-heading ct">
                      <div
                        className="sub-heading theme-color wow fadeInDown"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        Episodes
                      </div>
                      <h2
                        className="title-heading wow fadeInDown"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        Latest Episodes
                      </h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="carousel-episodes wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div
                        className="themesflat-carousel clearfix wow fadeInUp"
                        data-margin="30"
                        data-item="4"
                        data-item2="3"
                        data-item3="2"
                        data-item4="1"
                        data-auto="false"
                      >
                        <div className="owl-carousel owl-theme dots-none">
                          <div className="item-episodes">
                            <div className="box-feature fl-rela fl-st-1">
                              <img src="image/episodes-1.jpg" alt="image" />
                              <div className="meta">
                                <a href="podcast-play.html">Episode 01</a>
                              </div>
                              <div className="box-icon-3">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                            <div className="box-content">
                              <a
                                href="podcast-play.html"
                                className="title-episodes "
                              >
                                Starting A Podcast In 2021, Tips & Tricks
                              </a>
                              <div className="day">
                                <a href="podcast-play.html">APRIL 7, 2022</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-episodes">
                            <div className="box-feature fl-rela fl-st-1">
                              <img src="image/episodes-2.jpg" alt="image" />
                              <div className="meta">
                                <a href="podcast-play.html">Episode 02</a>
                              </div>
                              <div className="box-icon-3">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                            <div className="box-content">
                              <a
                                href="podcast-play.html"
                                className="title-episodes "
                              >
                                No. 1 Hip Hop Podcast Meets WipCast
                              </a>
                              <div className="day ">
                                <a href="podcast-play.html">APRIL 7, 2022</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-episodes">
                            <div className="box-feature fl-rela fl-st-1">
                              <img src="image/episodes-3.jpg" alt="image" />
                              <div className="meta">
                                <a href="podcast-play.html">Episode 03</a>
                              </div>
                              <div className="box-icon-3">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                            <div className="box-content">
                              <a
                                href="podcast-play.html"
                                className="title-episodes"
                              >
                                Podcasters Unite To Fight Discrimination
                              </a>
                              <div className="day">
                                <a href="podcast-play.html">APRIL 7, 2022</a>
                              </div>
                            </div>
                          </div>
                          <div className="item-episodes">
                            <div className="box-feature fl-rela fl-st-1">
                              <img src="image/episodes-4.jpg" alt="image" />
                              <div className="meta">
                                <a href="podcast-play.html">Episode 04</a>
                              </div>
                              <div className="box-icon-3">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            </div>
                            <div className="box-content">
                              <a
                                href="podcast-play.html"
                                className="title-episodes "
                              >
                                Jumping For Joy In 2020 Is Not Possible
                              </a>
                              <div className="day">
                                <a href="podcast-play.html">APRIL 7, 2022</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-top-chart fl-st-1 fl-section-top">
              <div className="overlay-section"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sx-12">
                    <div className="box-music-chart fl-st-1 mg-bt-50">
                      <div className="fl-title-heading">
                        <div
                          className="sub-heading white-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Top Chart
                        </div>
                        <h2
                          className="title-heading white-color wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Weekly Top Chart
                        </h2>
                      </div>
                      <div
                        className="musis-chart wow fadeInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="overlay-music st-2"></div>
                        <div className="fl-item-music fl-flex">
                          <div className="box-feature">
                            <img src="image/avt-ms-1.jpg" alt="image" />
                            <div className="box-icon-9">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-content">
                            <ul>
                              <li>
                                <p className="name-album">
                                  I Will Be There For You
                                </p>
                              </li>
                              <li>
                                <p className="sub-name-album">
                                  Grursus mal suada
                                </p>
                              </li>
                            </ul>
                            <a href="#" className="share muted5-color">
                              <i className="icon-ic-share"></i>
                            </a>
                          </div>
                        </div>
                        <div className="fl-list-play fl-st-1">
                          <ul>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Maria Woo
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Chris Martin
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                I Will Be There For You
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Meda Hyat
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                This Time Is Mine
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Maria Woo
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Hammer
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Hurt 'Em
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-item-music">
                          <a
                            href="podcast-play.html"
                            className="themesflat-button3 bg-white-2 st-4"
                          >
                            <span className="icon-btn">
                              <i className="icon-musical-note"></i>
                            </span>
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sx-12">
                    <div className="box-music-chart fl-st-1">
                      <div className="fl-title-heading">
                        <div
                          className="sub-heading white-color wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Top Chart
                        </div>
                        <h2
                          className="title-heading white-color wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Monthly Top Chart
                        </h2>
                      </div>
                      <div
                        className="musis-chart wow fadeInRight"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="overlay-music st-3"></div>
                        <div className="fl-item-music fl-flex">
                          <div className="box-feature">
                            <img src="image/avt-ms-2.jpg" alt="image" />
                            <div className="box-icon-9">
                              <a
                                href="#"
                                className="player-m play-pause-button"
                              >
                                <i className="fas fa-play"></i>
                              </a>
                            </div>
                          </div>
                          <div className="box-content">
                            <ul>
                              <li>
                                <p className="name-album">
                                  Guaguanco La Tierra
                                </p>
                              </li>
                              <li>
                                <p className="sub-name-album">
                                  Grursus mal suada
                                </p>
                              </li>
                            </ul>
                            <a href="#" className="share muted5-color">
                              <i className="icon-ic-share"></i>
                            </a>
                          </div>
                        </div>
                        <div className="fl-list-play fl-st-1">
                          <ul>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Maria Woo
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Chris Martin
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                I Will Be There For You
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Meda Hyat
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                This Time Is Mine
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Maria Woo
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                The Fire Deep Within
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Hammer
                              </span>
                            </li>
                            <li>
                              <span className="box-icon-8">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="name fl-st-1 muted-color">
                                Guaguanco La Tierra
                              </p>
                              <span className="name-singer3 fl-st-1 muted-color">
                                Hurt 'Em
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-item-music">
                          <a
                            href="podcast-play.html"
                            className="themesflat-button3 bg-white-2 st-4"
                          >
                            <span className="icon-btn">
                              <i className="icon-musical-note"></i>
                            </span>
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-offer fl-st-1 fl-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="box-offer-special">
                      <div
                        className="feature-offer wow fadeInLeft"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <img src="image/offer-special.jpg" alt="image" />
                      </div>
                      <div className="content-offer">
                        <div className="fl-title-heading">
                          <div className="sub-heading theme-color">
                            Special Offer
                          </div>
                          <h2 className="title-heading muted2-color">
                            Offer Exclusive Content With Private Podcast
                          </h2>
                        </div>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text.
                        </p>
                        <div className="btn-offer">
                          <a
                            href="podcast-details.html"
                            className="themesflat-button3 bg-theme st-3"
                          >
                            <span className="icon-btn">
                              <i className="icon-musical-note"></i>
                            </span>
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-feature-show fl-st-1 fl-section">
              <img
                className="feature-left"
                src="image/left-show.png"
                alt="image"
              />
              <img
                className="feature-right"
                src="image/right-show.png"
                alt="image"
              />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-shows fl-flex">
                      <div className="fl-title-heading">
                        <div
                          className="sub-heading theme-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Episodes
                        </div>
                        <h2
                          className="title-heading wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Featured Shows
                        </h2>
                      </div>
                      <div
                        className="btn-shows wow fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <a
                          href="podcast-play.html"
                          className="themesflat-button3 bg-trans"
                        >
                          <span className="icon-btn">
                            <i className="icon-musical-note"></i>
                          </span>
                          Browse All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sx-12">
                    <div className="box-shows fl-st-1">
                      <div
                        className="box-feature fl-st-1 wow fadeInDown"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <img src="image/feature-show1.png" alt="image" />
                      </div>
                      <div
                        className="box-content wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="overlay-music st-4"></div>
                        <div className="fl-list-play">
                          <ul className="fl-st-2">
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sx-12">
                    <div className="box-shows">
                      <div
                        className="box-content fl-st-1 wow fadeInDown"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="overlay-music st-5"></div>
                        <div className="fl-list-play">
                          <ul className="fl-st-2">
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                            <li>
                              <span className="box-icon-10">
                                <a
                                  href="#"
                                  className="player-m play-pause-button"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </span>
                              <p className="episode muted3-color">Episode 03</p>
                              <p className="name fl-st-2 muted2-color">
                                Help Your Family Succeed in 2021
                              </p>
                              <p className="time fl-st-2 muted4-color">05:45</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="box-feature wow fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <img src="image/feature-show2.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-about-us fl-st-1 fl-section-top">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="box-about-us">
                      <div className="fl-title-heading ct">
                        <h2
                          className="title-heading white-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Hey, Qcast Play Wow in The World
                        </h2>
                        <p
                          className="white-color wow fadeInDown "
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour
                        </p>
                        <div
                          className="box-icon-4 wow fadeInDown"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        >
                          <a
                            href="https://www.youtube.com/watch?v=wfKs3ProM7M"
                            className="popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      </div>
                      <img
                        className="feature-about"
                        src="image/feature-about.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-singer fl-st-1 fl-section-top">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-singer">
                      <div className="fl-title-heading">
                        <div
                          className="sub-heading theme-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Team Member
                        </div>
                        <h2
                          className="title-heading wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Meet The Hosts
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="carousel-singer wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div
                        className="themesflat-carousel clearfix wow fadeInUp"
                        data-margin="30"
                        data-item="4"
                        data-item2="3"
                        data-item3="2"
                        data-item4="1"
                        data-auto="true"
                      >
                        <div className="owl-carousel owl-theme dots-none">
                          <div className="item-singer">
                            <img src="image/team2.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="item-singer">
                            <img src="image/team3.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="item-singer active">
                            <img src="image/team4.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="item-singer">
                            <img src="image/team5.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="item-singer">
                            <img src="image/team6.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="item-singer">
                            <img src="image/team1.jpg" alt="image" />
                            <div className="overlay-bg"></div>
                            <div className="overlay-wrap">
                              <h3>
                                <a
                                  href="single-playlist.html"
                                  className="name-singer2 white-color"
                                >
                                  RJ Danial
                                </a>
                              </h3>
                              <p className=" white-color">Breakfast Show</p>
                            </div>
                            <div className="list-social">
                              <ul>
                                <li>
                                  <a href="#" className="fl-hv1 active">
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1 fl-st-2">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="fl-hv1">
                                    <i className="fab fa-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-sub fl-st-1">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="fl-flex fl-max fl-sub">
                      <div className="fl-title-heading">
                        <div
                          className="sub-heading theme-color wow fadeInDown"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          Newsletter
                        </div>
                        <h2
                          className="title-heading white-color wow fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          Never Miss a Beat
                        </h2>
                      </div>
                      <p
                        className="wrap-sub  white-color wow fadeInDown"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        Get notified about updates and be the first to get early
                        access to new episodes.
                      </p>
                    </div>
                    <div
                      className="form-sub wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <form
                        id="subscribe-form"
                        action="#"
                        method="GET"
                        accept-charset="utf-8"
                        className="form-submit"
                      >
                        <input
                          name="email"
                          value=""
                          className="email"
                          type="text"
                          required
                          placeholder="Enter email address"
                        />
                        <button id="submit" name="submit" type="submit">
                          <span>
                            <i className="fas fa-paper-plane"></i>
                          </span>{" "}
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="tf-latest-new fl-st-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="fl-title-heading ct">
                      <div
                        className="sub-heading theme-color wow fadeInDown"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        Latest News
                      </div>
                      <h2
                        className="title-heading wow fadeInDown"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        Our Latest Posts
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sx-12">
                    <div
                      className="box-latest-news fl-st-1 wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-rela fl-scale">
                        <img src="image/latest-new1.jpg" alt="image" />
                        <div className="meta">
                          <a href="blog-single.html" className="day">
                            15 AUG, 2021
                          </a>
                        </div>
                      </div>
                      <div className="box-content fl-st-1">
                        <p className=" category">
                          <a href="blog-single.html">Fashion</a>
                        </p>
                        <a href="blog-single.html" className="title-news ">
                          Starting A Podcast In 2021, Tips and Tricks
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sx-12">
                    <div
                      className="box-latest-news fl-st-1 wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-rela fl-scale">
                        <img src="image/latest-new2.jpg" alt="image" />
                        <div className="meta">
                          <a href="blog-single.html" className="day">
                            15 AUG, 2021
                          </a>
                        </div>
                      </div>
                      <div className="box-content fl-st-1">
                        <p className=" category">
                          <a href="blog-single.html">Fashion</a>
                        </p>
                        <a href="blog-single.html" className="title-news ">
                          This is the perfect spot if you need peace
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sx-12">
                    <div
                      className="box-latest-news fl-st-1 wow fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-rela fl-scale">
                        <img src="image/latest-new3.jpg" alt="image" />
                        <div className="meta">
                          <a href="blog-single.html" className="day">
                            15 AUG, 2021
                          </a>
                        </div>
                      </div>
                      <div className="box-content fl-st-1">
                        <p className=" category">
                          <a href="blog-single.html">Fashion</a>
                        </p>
                        <a href="blog-single.html" className="title-news ">
                          Polygonal shapes with red glow are cool
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
