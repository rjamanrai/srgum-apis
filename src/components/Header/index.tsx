import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <div id="site-header">
        <div className="container-fluid">
          <div className="site-header-inner fl-st-2">
            <div className=" fl-st-2">
              <img src="/image/footerlogo.png" alt="image" />
            </div>
            <div className="top-header fl-st-2">
              <div className="nav-wrap fl-st-2">
                <div className="btn-menu">
                  <span></span>
                </div>
                <nav id="mainnav" className="mainnav">
                  <ul className="menu">
                    <li className="item active">
                      <Link href="/">HOME </Link>
                    </li> 
                    <li className="item">
                      <Link href="/podcasts">PODCAST </Link>
                    </li>
                    <li className="item">
                      <Link href="/blog">BLOG </Link>
                    </li>
                    <li className="item">
                      <Link href="/about-us">ABOUT US </Link>
                    </li>
                    <li className="item">
                      <Link href="/contact-us">CONTACT </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="search-header fl-st-2">
                <div className="list-menu">
                  <div className="menu-box theme-color navigation-side-menu">
                    <i className="fab fa-itunes-note"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
