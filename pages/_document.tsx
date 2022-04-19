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

      </Head>
      <body>
        <div id="wrapper">
          <div id="page">
            <Main />
            <NextScript />
          </div>
        </div>

       
      </body>

    </Html>
  )
}