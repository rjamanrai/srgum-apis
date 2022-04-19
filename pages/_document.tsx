import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>

      <Head> 
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" /> 
        <link rel="stylesheet" href="css/magnific-popup.css" /> 
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/shortcodes.css" />
        <link rel="stylesheet" href="css/all.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />


        <link rel="icon" href="image/Facvicon.png" sizes="32x32" />
        <script src="js/audiop.js"></script>

      </Head>
      <body>
        <div id="wrapper">
          <div id="page">
            <Main />
            <NextScript />
          </div>
        </div>

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery-validate.js"></script>
        {/* <script src="js/music.js"></script> */}
        <script src="js/main.js"></script>
        <script src="js/shortcodes.js"></script>

        <script src="js/wow.min.js"></script>
        <script src="js/animation.js"></script>

        <script src="js/owl.carousel.min.js"></script>
        <script src="js/owl.carousel2.thumbs.js"></script>
      </body>

    </Html>
  )
}