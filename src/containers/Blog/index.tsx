import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div id="site-content" className="site-content clearfix">
      <div id="inner-content" className="inner-content-wrap">
        <div className="page-content">
          <section className="page-title bg-st-1">
            <div className="overlay-header"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="baner-title fl-st-1">
                    <h2
                      className="title-page white-color wow fadeInDown"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      Latest Blog
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
                            HOME
                          </a>
                        </li>
                        <li className="breadcrumbs-inner">
                          <span
                            className="trail-end white-color wow fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            Our blog
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="fl-news fl-section-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="our-post">
                    <div
                      className="box-news fl-rela wow fadeInUp"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news1-1.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Creative</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"}>December 7, 2021</Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            Top 15 Secrets Of Digital Transformation
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link href={"/blog/890"}>
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela mgr-none wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news2-2.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Develop</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"}>December 7, 2021</Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            Transforming Challenge into Opportunities
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela wow fadeInUp"
                      data-wow-delay="100msms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news3-3.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Marketing</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            How AI is Transforming the Healthcare System
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela mgr-none wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news4-4.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Digital</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            How to Build a Chatbot: Definition & Process
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela wow fadeInUp"
                      data-wow-delay="100msms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news5-5.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Creative</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            Augmented Reality Platform By Google
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela mgr-none wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news6-6.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Creative</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            What to Expect from UX/UI Trends for
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela wow fadeInUp"
                      data-wow-delay="100msms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news7-7.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Maxpro</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            5 Tech Trends of 2020 Every CIO Needs to
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="box-news fl-rela mgr-none wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="box-feature fl-scale fl-rela fl-max fl-shadow-1">
                        <img src="image/news8-8.jpg" alt="image" />
                        <div className="news-category">
                          <h6>
                            <Link href={"/blog/890"}>Sinzenta</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="box-content-news fl-shadow-1">
                        <ul className="meta fl-flex">
                          <li>
                            <Link href={"/blog/890"} >
                              December 7, 2021
                            </Link>
                          </li>
                          <li>
                            <h6 className="author">by Jhon gray</h6>
                          </li>
                        </ul>
                        <div className="fl-style-1 title-post">
                          <Link href={"/blog/890"}>
                            12 Top Software Develop Methodologi
                          </Link>
                        </div>
                        <div className="btn-learn-more">
                          <Link
                            href={"/blog/890"}
                          >
                            <i className="icon-longgg-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-pagination fl-st-1 wow fadeInUp">
                    <ul>
                      <li>
                        <a href="#" className="page-numbers current">
                          01
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          02
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          03
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          04
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-numbers">
                          05
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-xs-12">
                  <div id="sidebar">
                    <div className="inner-sidebar fl-st-1">
                      <div className="widget widget-search fl-shadow-1 wow fadeInUp">
                        <h4 className="title-widget fl-style-2">Search</h4>
                        <form method="get" action="#">
                          <input
                            type="text"
                            value=""
                            placeholder="Search keywords"
                          />
                          <button type="submit">
                            <i className="icon-ic-search"></i>
                          </button>
                        </form>
                      </div>
                      <div className="widget widget-category fl-shadow-1 wow fadeInUp">
                        <h4 className="title-widget fl-style-2">Categories</h4>
                        <div className="box-categories">
                          <ul>
                            <li className="name-category border-st-1">
                              <a href="podcast-details.html" className="active">
                                Graphics Design<span>36</span>
                              </a>
                            </li>
                            <li className="name-category border-st-1">
                              <a href="podcast-details.html">
                                ui/ux brand design<span>32</span>
                              </a>
                            </li>
                            <li className="name-category border-st-1">
                              <a href="podcast-details.html">
                                web devolopment<span>26</span>
                              </a>
                            </li>
                            <li className="name-category border-st-1">
                              <a href="podcast-details.html">
                                branding design<span>16</span>
                              </a>
                            </li>
                            <li className="name-category">
                              <a href="podcast-details.html">
                                ui/ux brand design<span>32</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget widget-recent fl-shadow-1 wow fadeInUp">
                        <h4 className="title-widget fl-style-2">Recent Post</h4>
                        <div className="box-recent fl-flex">
                          <div className="box-feature">
                            <img src="image/recent-post1.jpg" alt="image" />
                          </div>
                          <div className="box-content fl-rela">
                            <Link href={"/blog/890"} >
                              Lorem Ipsum market the printing typesetting.
                            </Link>
                            <Link href={"/blog/890"} >
                              december 7, 2021
                            </Link>
                          </div>
                        </div>
                        <hr />
                        <div className="box-recent fl-flex">
                          <div className="box-feature">
                            <img src="image/recent-post2.jpg" alt="image" />
                          </div>
                          <div className="box-content fl-rela">
                            <Link href={"/blog/890"} >
                              Lorem Ipsum market the printing typesetting.
                            </Link>
                            <Link href={"/blog/890"} >
                              december 7, 2021
                            </Link>
                          </div>
                        </div>
                        <hr />
                        <div className="box-recent fl-flex">
                          <div className="box-feature">
                            <img src="image/recent-post3.jpg" alt="image" />
                          </div>
                          <div className="box-content fl-rela">
                            <Link href={"/blog/890"} >
                              Lorem Ipsum market the printing typesetting.
                            </Link>
                            <Link href={"/blog/890"} >
                              december 7, 2021
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="widget widget-social fl-shadow-1 wow fadeInUp">
                        <h4 className="title-widget fl-style-2">
                          Instagram Post
                        </h4>
                        <div className="box-widget-social">
                          <ul>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post1.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post2.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post3.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post4.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post5.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela active">
                                <img src="image/ig-post6.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post7.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="image/ig-post8.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="box-feature fl-rela">
                                <img src="images/ig-post9.jpg" alt="image" />
                                <div className="box-icon-3">
                                  <a href="#">
                                    <i className="fab fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget widget-populer fl-shadow-1 wow fadeInUp">
                        <h4 className="title-widget fl-style-2">
                          Populer Tags
                        </h4>
                        <div className="box-populer-tag">
                          <ul>
                            <li>
                              <a href="#" className="active">
                                web design
                              </a>
                            </li>
                            <li>
                              <a href="#">ui/ux design</a>
                            </li>
                            <li>
                              <a href="#">graphics</a>
                            </li>
                            <li>
                              <a href="#">design</a>
                            </li>
                            <li>
                              <a href="#">icon</a>
                            </li>
                            <li>
                              <a href="#">graphics design</a>
                            </li>
                            <li>
                              <a href="#">branding</a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
