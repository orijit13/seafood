import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const News = () => {

    return (
        <>
            <Head>
                <title>News | Sea Food A Hotal and Restaurants</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="news">
                <div className="container">
                    <div className="news-main">
                        <h3>This page not Found</h3>
                        <h4>404</h4>
                        <div className="news-bwn">
                            <a href="index.html">Go Back</a>
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