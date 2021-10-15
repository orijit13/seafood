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
        <script src="/js/jquery.min.js"></script>
        <script type="text/javascript" src="/js/move-top.js"></script>
        <script type="text/javascript" src="/js/easing.js"></script>
        <script type="text/javascript" src="/js/jquery.mixitup.min.js"></script>
        <script type="text/javascript" src="/js/custom.js"></script>
        <script defer src="/js/jquery.flexslider.js"></script>

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