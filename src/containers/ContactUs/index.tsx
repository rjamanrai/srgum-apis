export default function ContactUs() {
  return <div id="site-content" className="site-content clearfix">
    <div id="inner-content" className="inner-content-wrap">
      <div className="page-content">
        <section className="page-title bg-st-1">
          <div className="overlay-header"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="baner-title fl-st-1">
                  <h2 className="title-page white-color wow fadeInDown" data-wow-delay="200ms"
                    data-wow-duration="1500ms">Contact us</h2>
                  <div className="breadcrumbs">
                    <ul className="fl-flex">
                      <li>
                        <a href="index.html" className="white-color wow fadeInUp" data-wow-delay="200ms"
                          data-wow-duration="1500ms">HOME</a>
                      </li>
                      <li className="breadcrumbs-inner">
                        <span className="trail-end white-color wow fadeInUp" data-wow-delay="400ms"
                          data-wow-duration="1500ms">Contact us</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tf-contact fl-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sx-12">
                <div className="box-contact">
                  <div className="icon-contact fl-st-1 wow fadeInDown" data-wow-delay="100ms"
                    data-wow-duration="1500ms">
                    <i className="icon-ic-map"></i>
                  </div>
                  <div className="box-content fl-st-1 wow fadeInUp " data-wow-delay="100ms"
                    data-wow-duration="1500ms">
                    <h4 className="title">OUR ADDRESS</h4>
                    <p className="sub">PSD Building, 2 AlBahr St, Loskia sripur, jamukara.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sx-12">
                <div className="box-contact">
                  <div className="icon-contact fl-st-1  wow fadeInDown" data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <i className="icon-ic-phone"></i>
                  </div>
                  <div className="box-content fl-st-1 wow fadeInUp" data-wow-delay="200ms"
                    data-wow-duration="1500ms">
                    <h4 className="title">OUR PHONE</h4>
                    <ul>
                      <li>
                        <p className="sub">Office Telephone :<a href="tel:0029129102320"> 0029129102320</a></p>
                      </li>
                      <li>
                        <p className="sub">Mobile :<a href="tel:000232439493"> 000 2324 39493</a></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sx-12">
                <div className="box-contact">
                  <div className="icon-contact fl-st-2  wow fadeInDown" data-wow-delay="300ms"
                    data-wow-duration="1500ms">
                    <i className="icon-ic-mail"></i>
                  </div>
                  <div className="box-content wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <h4 className="title">OUR EMAIL</h4>
                    <ul>
                      <li>
                        <p className="sub">Main Email :<a href=""> <span className="__cf_email__"
                          data-cfemail="355b54585075425057465c41501b565a58">test</span></a></p>
                      </li>
                      <li>
                        <p className="sub">Inquiries :<a href=""> <span className="__cf_email__"
                          data-cfemail="357c5b535a755a47504d1b565a58">test</span></a></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="title-contact wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  CONTACT FORM</h3>
                <div className="form-contact">
                  <form action="contact/contact-process.php" method="post" id="contactform"
                    className="form-submit">
                    <div className="row-form fl-st-2 wow fadeInUp" data-wow-delay="100ms"
                      data-wow-duration="1500ms">
                      <div className="col-form-6 fl-st-2 ">
                        <input id="name" name="name" value="" aria-required="true" required
                          type="text" placeholder="Enter your full name" />
                        <span className="icon-form"> <i className="icon-ic-user"></i> </span>
                      </div>
                      <div className="col-form-6 fl-st-2 mgr-none">
                        <input id="email" name="email" value="" aria-required="true" required
                          type="email" placeholder="Enter your email" />
                        <span className="icon-form"> <i className="icon-ic-m"></i> </span>
                      </div>
                    </div>
                    <div className="row-form wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                      <div className="col-form-12">
                        <textarea id="message" name="message" aria-required="true" required
                          placeholder="Enter your message"></textarea>
                        <span className="icon-form"> <i className="icon-ic-mess"></i> </span>
                      </div>
                    </div>
                    <div className="row-form wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="col-form-12 ct">
                        <button className="submit ">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>

  </div>
}
