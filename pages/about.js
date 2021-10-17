import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {

    return (
        <>
            <Head>
                <title>About | Sea Food A Hotal and Restaurants</title>
            </Head>
            <Header />
            <div className="about">
                <div className="container">
                    <div className="about-main">
                        <div className="about-top">
                            <h3>ABOUT US</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className="about-bottom">
                            <div className="col-md-8 about-bottom-left">
                                <div className="about-bottom-matter-top">
                                    <div className="about-bottom-img">
                                        <Image src="/images/black.jpg" alt="" width={200} height={200} layout="responsive" />
                                    </div>
                                    <div className="about-bottom-matter">
                                        <h3>voluptatum deleniti atque corrupti quos dolores</h3>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled.pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="about-bottom-matter-top">
                                    <div className="about-bottom-img">
                                        <Image src="/images/frans.jpg" alt="" width={200} height={200} layout="responsive" />
                                    </div>
                                    <div className="about-bottom-matter">
                                        <h3>voluptatum deleniti atque corrupti quos dolores</h3>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled.pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="col-md-4 about-bottom-right">
                                <h3>Nam libero tempore, cum soluta nobis eligendi optio cumque</h3>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <h3>Nam libero tempore, cum soluta nobis eligendi optio cumque</h3>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="cleaerfix"> </div>
                    </div>
                </div>
            </div>
            <div className="cheif">
                <div className="container">
                    <div className="cheif-main">
                        <h4>OUR TEAM</h4>
                        <div className="col-md-3 about-bottom-grid">
                            <Image src="/images/t1.jpg" alt="" width={270} height={270} layout="responsive" />
                            <div className="about-bottom-bg">
                                <h3> Malorum</h3>
                                <p>voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-md-3 about-bottom-grid">
                        <Image src="/images/t4.jpg" alt="" width={270} height={270} layout="responsive" />
                            <div className="about-bottom-bg">
                                <h3>Richard</h3>
                                <p>voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-md-3 about-bottom-grid">
                            <Image src="/images/t3.jpg" alt="" width={270} height={270} layout="responsive" />
                            <div className="about-bottom-bg">
                                <h3>McClintock</h3>
                                <p>voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="col-md-3 about-bottom-grid">
                            <Image src="/images/t2.jpg" alt="" width={270} height={270} layout="responsive" />
                            <div className="about-bottom-bg">
                                <h3>Bonorum</h3>
                                <p>voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About