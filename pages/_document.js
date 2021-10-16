import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}

        <meta name="author" content="Arijit Banerjee" />
        <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>
        <link href="/css/style.css" rel="stylesheet" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/flexslider.css" type="text/css" media="screen"/>
        <link href="http://fonts.googleapis.com/css?family=Exo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="/css/style_common.css" />
        <link rel="stylesheet" type="text/css" href="/css/style7.css" />
        <script src="/js/jquery.min.js"></script>
        <script type="text/javascript" src="/js/move-top.js"></script>
        <script type="text/javascript" src="/js/easing.js"></script>
        <script type="text/javascript" src="/js/jquery.mixitup.min.js"></script>
        <script type="text/javascript" src="/js/custom.js"></script>
        {/* <script defer src="/js/jquery.flexslider.js"></script> */}


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument