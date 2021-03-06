import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Recipies = () => {
    return (
        <>
            <Head>
                <title>Recipies | Sea Food A Hotal and Restaurants</title>
            </Head>
            <Header />
            <div className="recipies">
                <div className="container">
                    <div className="recipies-main">
                        <div className="recipies-top">
                            <h3>RECIPES</h3>
                            <p>content here', making it look like readable English. Many desktop publishing packages and editors now use Lorem Ipsum as their default model text. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        </div>
                        <div className="recipies-menu">
                            <div className="col-md-6 recipies-top-left">
                                <Image src="/images/pizza.jpg" alt="" width={500} height={400} layout="responsive" />
                            </div>
                            <div className="col-md-6 recipies-top-right">
                                <h3>Total Time</h3>
                                <h3>$50</h3>
                                <h4>1hr 30min</h4>
                                <p>Avg Rating(25)</p>
                                <p>MORE DETAILS</p>
                                <p>Lorem Ipsum as their default model text. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <select name="cars">
                                    <option value="select your location"> Select your Items</option>
                                    <option value="saab">Fish Caries</option>
                                    <option value="fiat">Frans Caries</option>
                                    <option value="audi">Crabes</option>
                                    <option value="audi">Octopus</option>
                                </select>
                                <ul>
                                    <li>Field Under:<span className="respi"> Chicken, Fish, Frans, crab, Quick&Easy, Slow Cooker</span></li>
                                    <li>Provided By:<span className="respi">Kellog's sea food Recipes</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div className="container">
                    <div className="recipies-bottom">
                        <div className="view view-seventh">
                            <Image src="/images/r1.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Prawn Masala</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/prawn-masala"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="view view-seventh">
                            <Image src="/images/r2.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Kerala Fried Prawns</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/kerala-fried-prawns"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="view view-seventh">
                            <Image src="/images/r3.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Spicy Sriracha Prawns with Basil</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/spicy-sriracha-prawns-with-basil"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="view view-seventh">
                            <Image src="/images/r4.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Prawn Curry</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/prawn-curry"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="view view-seventh">
                            <Image src="/images/r5.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Prawn Balcho</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/prawn-balcho"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="view view-seventh">
                            <Image src="/images/r7.jpg" alt="" width={360} height={350} layout="responsive" />
                            <div className="mask">
                                <h2>Prawn Pulao</h2>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <Link href="/recipies/prawn-pulao"><a className="info">Read More</a></Link>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Recipies