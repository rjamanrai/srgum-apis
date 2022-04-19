
export default function Footer() {

  return <footer id="footer">
    <div className="content-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sx-12">
            <div className="widget widget-wrap">
              <div className="logo-footer">
                <a href="index">
                  <img src="image/footerlogo.png" alt="image" />
                </a>
              </div>
              <div className="list-social fl-flex">
                <a href="#" className="active"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sx-12">
            <div className="widget widget-contact">
              <div className="title-widget">
                Contact us
              </div>
              <ul className="list-contact">
                <li>
                  <p className="meta-address">Blocks Agency, 2231 Redbud Drive Whitestone, NY 11357</p>
                </li>
                <li>
                  <a href="tel:1105692354238" className="meta-phone">+11 0569 2354 238</a>
                </li>
                <li>
                  <a href="/cdn-cgi/l/email-protection#442d2a222b6a35272537300429252d286a272b29"
                    className="meta-mail"><span className="__cf_email__"
                      data-cfemail="bbd2d5ddd495cad8dac8cffbd6dad2d795d8d4d6">[email&#160;protected]</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sx-12">
            <div className="widget widget-link fl-st-1">
              <div className="title-widget">Collections</div>
              <ul className="list-link">
                <li><a href="show-listing.html">Most Popular Music</a></li>
                <li><a href="show-listing.html">Most Recent Music</a></li>
                <li><a href="about.html">Corporate / Business</a></li>
                <li><a href="show-listing.html">Jazz Music</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sx-12">
            <div className="widget widget-link fl-st-2">
              <div className="title-widget">Company</div>
              <ul className="list-link">
                <li><a href="about.html">About</a></li>
                <li><a href="podcast-details.html">Podcast API</a></li>
                <li><a href="blog.html">Articles</a></li>
                <li><a href="about.html">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-bottom">
              <ul className="list-bottom fl-flex">
                <li className="fl-rela border-right"><a href="about.html">Terms of use</a></li>
                <li className="mgr-none"><a href="about.html">Privacy Policy</a></li>
              </ul>
              <p className="coppy-right">Copyright © 2021 . Designed by <a href="">Avinash</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
}
