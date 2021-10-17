import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const News = () => {

    return (
        <>
            <Head>
                <title>News | Sea Food A Hotal and Restaurants</title>
            </Head>
            <Header />
            <div className="news">
                <div className="container">
                    <div className="news-main">
                        <h3>This page not Found</h3>
                        <h4>404</h4>
                        <div className="news-bwn">
                            <Link  href="/"><a>Go Back</a></Link>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default News